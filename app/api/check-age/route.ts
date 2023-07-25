import { chainListData } from '@/explorers'
import { NextResponse } from 'next/server'
import { getWalletAge } from './function'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userAddress = searchParams.get('address')
  const chain = searchParams.get('chain')
  const chainNames = chainListData.map((x) => x.chain_name)

  try {
    if (chain && !chainNames.includes(chain)) {
      return NextResponse.json({ status: 404, error: 'Chain not found!' })
    }
    const data = await getWalletAge(chain, userAddress)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ status: 404, error: 'Something went wrong' })
  }
}
