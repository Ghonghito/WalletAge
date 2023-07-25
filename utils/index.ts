import axios from 'axios'

export const shortAddress = (address: string, length: number) => {
  try {
    return `${address.substring(0, length)}...${address.substring(address.length - length)}`
  } catch (error) {
    return '-'
  }
}

export const checkAge = async (chains: any, walletAddress: string) => {
  const walletData: any = []
  for (const chain of chains) {
    const data = await axios.get(`/api/check-age?address=${walletAddress}&chain=${chain.chain_name}`)
    if (data.status === 200) {
      walletData.push(data.data)
    }
  }
  return walletData
}
