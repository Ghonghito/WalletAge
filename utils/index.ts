import { explorersList } from '@/explorers'
import axios from 'axios'
import { differenceInDays, toDate } from 'date-fns'

export const shortAddress = (address: string, length: number) => {
  try {
    return `${address.substring(0, length)}...${address.substring(address.length - length)}`
  } catch (error) {
    return '-'
  }
}

export const calculateAge = (timestamp: number) => {
  const convertedDate = new Date(timestamp * 1000)
  const daysDifference = differenceInDays(new Date(), convertedDate)
  return daysDifference
}

export const getWalletAge = async (walletAddress: string) => {
  let walletData: any = []
  for (const chain of explorersList) {
    const data = await axios
      .get(`${chain.api_url}/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10000&sort=desc&apikey=${chain.api_key}`)
      .then((response) => response)
      .catch((error) => error.response)

    if (data.status === 200) {
      if (data.data.message === 'OK' && data.data.result.length > 0) {
        const address = walletAddress
        const totalTx = data.data.result.length
        const lastTx = data.data.result[data.data.result.length - 1]
        const lastTxDate = toDate(Number(lastTx.timeStamp) * 1000)
        const age = calculateAge(Number(lastTx.timeStamp))
        walletData.push({ address, totalTx, lastTx, age, lastTxDate, chainData: chain })
      }
    }
  }
  return walletData
}
