import { shortAddress } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ResultTableTypes {
  data?: any
}

const ResultTable = ({ data }: ResultTableTypes) => {
  return (
    <div className='px-2 mt-2 w-full md:w-[650px]'>
      {Object.keys(data).length > 0 && (
        <div className='overflow-y-auto bg-card border border-border rounded-lg'>
          <table className='border-collapse table-auto w-full text-sm text-left '>
            <thead className='text-gray-500 text-xs'>
              <tr>
                <th scope='col' className='borderline px-6 py-3 whitespace-nowrap'>
                  Chain
                </th>
                <th scope='col' className='borderline px-6 py-3 whitespace-nowrap'>
                  Age
                </th>
                <th scope='col' className='borderline px-6 py-3 whitespace-nowrap'>
                  Transactions
                </th>
                <th scope='col' className='borderline px-6 py-3 whitespace-nowrap'>
                  Last Transaction
                </th>
              </tr>
            </thead>
            <tbody className='divider'>
              {data.map((x: any, index: number) => (
                <tr key={index} className='w-full rounded-lg hover:bg-background'>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-2'>
                      <Image src={x.chainData.logo} alt={x.chainData.name} width='20' height='20' className='rounded-full' />
                      <Link href={`${x.chainData.url}/address/${x.address}`} target='_blank' className='hover:underline decoration-whiteText'>
                        <p className='text-whiteText whitespace-nowrap'>{x.chainData.name}</p>
                      </Link>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <p className='text-whiteText whitespace-nowrap'>{x.age} days old</p>
                  </td>
                  <td className='px-6 py-4'>
                    <p className='text-whiteText whitespace-nowrap'>{x.totalTx}</p>
                  </td>
                  <td className='px-6 py-4'>
                    <Link href={`${x.chainData.url}/tx/${x.lastTx.hash}`} target='_blank' className='hover:underline decoration-primary'>
                      <p className='text-primary whitespace-nowrap'>{shortAddress(x.lastTx.hash, 5)}</p>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ResultTable
