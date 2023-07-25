import Logo from '@/assets/logo.svg'
import { chainListData } from '@/explorers'
import Image from 'next/image'

const Header = () => {
  const mainnetChains = chainListData.filter((x) => x.mainnet_configuration !== null)

  return (
    <div>
      <div className='max-w-full mx-auto py-2 px-4 sm:px-6 lg:px-12'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image src={Logo} width={35} height={35} alt='Logo' />
            <p className='text-white'>WalletAge</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-white text-xs md:text-base'>MULTICHAIN WALLET AGE CHECKER</p>
          </div>
          <div className='hidden md:flex flex-col  gap-1'>
            <p className='text-white text-sm'>Supported Chains:</p>
            <div className='flex items-center gap-1'>
              {mainnetChains.map((x) => (
                <Image src={x.chain_logo} width={15} height={15} alt={x.chain_name} key={x.chain_name} className='rounded-full' title={x.chain_name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:hidden'>
        <div className='duration-150 border-b border-border'></div>
        <div className='flex items-center justify-between py-3 px-5'>
          {mainnetChains.map((x) => (
            <Image src={x.chain_logo} width={15} height={15} alt={x.chain_name} key={x.chain_name} className='rounded-full' title={x.chain_name} />
          ))}
        </div>
      </div>
      <div className='duration-150 border-b border-border'></div>
    </div>
  )
}

export default Header
