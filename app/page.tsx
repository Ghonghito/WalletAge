'use client'
import MultiCustomSelect from '@/components/MultiCustomSelect'
import ResultTable from '@/components/Table'
import LoadingTable from '@/components/Table/LoadingTable'
import { chainListData } from '@/explorers'
import { checkAge } from '@/utils'
import { useState } from 'react'

const Home = () => {
  const chains = chainListData.filter((x) => x.mainnet_configuration !== null)
  const [selected, setSelected] = useState<any>([chains[0].chain_name])
  const [resultData, setResultData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorData, setErrorData] = useState<string>('')

  const getData = async () => {
    const walletAddress = (document.getElementById('walletAddress') as HTMLInputElement).value
    setErrorData('')

    if (selected.length === 0) {
      setErrorData('Chain is not specified')
      return
    }

    if (walletAddress === '') {
      setErrorData('Wallet address is not specified')
      return
    }

    const selectedChains = chainListData.filter((x) => selected.includes(x.chain_name))
    if (walletAddress !== '') {
      setIsLoading(true)
      const data = await checkAge(selectedChains, walletAddress)
      setResultData(data)
      setIsLoading(false)
    } else {
      setErrorData('Wallet address is not specified')
    }
  }
  
  return (
    <div className=' mt-3'>
      <div className='flex flex-col items-center justify-center'>
        <div className='px-2 w-full md:w-[650px] space-y-2'>
          {errorData !== '' && <div className='text-red-600 text-center'>{errorData}</div>}
          <MultiCustomSelect data={chains} labelKey='chain_name' hasLogo={true} logoKey='chain_logo' selectedItems={selected} setSelected={setSelected} />
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
        {isLoading ? <LoadingTable /> : <ResultTable data={resultData} />}
      </div>
    </div>
  )
}

export default Home
