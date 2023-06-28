'use client'
import ResultTable from '@/components/Table'
import LoadingTable from '@/components/Table/LoadingTable'
import { getWalletAge } from '@/utils'
import { useState } from 'react'

const page = () => {
  const [resultData, setResultData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorData, setErrorData] = useState<string>('')

  const getData = async () => {
    const walletAddress = (document.getElementById('walletAddress') as HTMLInputElement).value
    setErrorData('')
    if (walletAddress !== '') {
      setIsLoading(true)
      const data = await getWalletAge(walletAddress)
      setResultData(data)
      setIsLoading(false)
    } else {
      setErrorData('Wallet address is not specified')
    }
  }
  return (
    <div className='flex flex-col items-center justify-center mt-5'>
      <div className='mb-4'>
        <h1 className='text-lg lg:text-xl text-white font-extrabold text-center'>Check the age of the wallet on multiple blockchains</h1>
      </div>
      <div className='px-2 w-full md:w-[650px]'>
        <div className='relative w-full'>
          <input type='search' id='walletAddress' className='p-2.5 w-full z-20 text-sm text-white bg-card rounded-r-lg rounded-l-lg border border-border focus:outline-none' placeholder='Search address' required />
          <button onClick={() => getData()} type='submit' className='absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary rounded-r-lg border border-primary hover:bg-primary/70 focus:outline-none'>
            <svg aria-hidden='true' className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
            <span className='sr-only'>Search</span>
          </button>
        </div>
      </div>
      {errorData !== null && <p className='text-sm text-red-500 mt-2'>{errorData}</p>}
      {isLoading ? <LoadingTable /> : <ResultTable data={resultData} />}
    </div>
  )
}

export default page
