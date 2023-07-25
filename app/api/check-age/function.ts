import { chainListData } from '@/explorers'
import axios from 'axios'
import { differenceInDays, toDate } from 'date-fns'

export const calculateAge = (timestamp: number) => {
  const convertedDate = new Date(timestamp * 1000)
  const daysDifference = differenceInDays(new Date(), convertedDate)
  return daysDifference
}

export const getWalletAge = async (chainName: any, walletAddress: any) => {
  const chain = chainListData.filter((x) => x.chain_name === chainName)
  const data = await axios
    .get(`${chain[0].explorers.mainnet.api_url}/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10000&sort=desc&apikey=${chain[0].explorers.mainnet.api_key}`)
    .then((response) => response)
    .catch((error) => error.response)

  if (data.status === 200) {
    if (data.data.message === 'OK' && data.data.result.length > 0) {
      const address = walletAddress
      const totalTx = data.data.result.length
      const lastTx = data.data.result[data.data.result.length - 1]
      const lastTxDate = toDate(Number(lastTx.timeStamp) * 1000)
      const age = calculateAge(Number(lastTx.timeStamp))
      return { status: 200, address, totalTx, lastTx, age, lastTxDate, chainData: chain[0] }
    } else {
      return { address: walletAddress, totalTx: 0, lastTx: [], age: 0, lastTxDate: '', chainData: chain[0] }
    }
  } else {
    return { status: 404, walletAddress, totalTx: 0, lastTx: [], age: 0, lastTxDate: '', chainData: chain[0] }
  }
}
