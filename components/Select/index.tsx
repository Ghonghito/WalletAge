import { ArrowDownIcon } from '@/components/Icons'
import { Listbox } from '@headlessui/react'
import Image from 'next/image'

interface Types {
  data: any
  labelKey: string
  hasLogo: boolean
  logoKey: string
  selectedItems: any
  setSelected: any
}

const MultiCustomSelect = ({ data, labelKey, hasLogo, logoKey, selectedItems, setSelected }: Types) => {
  const handleSelect = (selectedItem: any) => {
    setSelected(selectedItem)
  }

  const renderLabel = (item: any) => item[labelKey]
  const renderLogo = (item: any) => {
    if (item.coinmarketcap && item.coinmarketcap.logo) {
      return item.coinmarketcap.logo
    } else {
      return item[logoKey]
    }
  }

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <Listbox value={selectedItems} onChange={handleSelect} multiple>
        {({ open }) => (
          <div className='relative'>
            <Listbox.Button className='flex items-center bg-card duration-150 border-[1px] border-border relative w-full cursor-pointer rounded-md bg-darkBackground py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm sm:text-sm sm:leading-6'>
              <p className={`block truncate text-white`}>{selectedItems.map((x: any) => x).join(', ')}</p>
              <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                <ArrowDownIcon className={`h-4 w-4 duration-150 fill-white ${open && 'rotate-180'}`} aria-hidden='true' />
              </span>
            </Listbox.Button>
            <Listbox.Options className='divider absolute z-50 mt-1 max-h-48 w-full bg-background overflow-y-auto rounded-md duration-150 border-[1px] border-border bg-darkBackground text-base shadow-lg focus:outline-none sm:text-sm'>
              {data.map((item: any, index: any) => (
                <Listbox.Option key={index} value={item[labelKey]} className={({ active }) => classNames(active ? 'hover:bg-darkHover duration-150 text-lightText dark:text-darkText' : 'text-gray-900', ' select-none cursor-pointer')}>
                  <div className='py-2 pl-3 pr-9'>
                    <div className='flex items-center'>
                      {hasLogo && <Image src={renderLogo(item)} alt='logo' width={20} height={20} className='flex-shrink-0 rounded-full' />}
                      <p className={`${hasLogo && 'ml-3'} block truncate text-white`}>{renderLabel(item)}</p>
                    </div>
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        )}
      </Listbox>
    </div>
  )
}
export default MultiCustomSelect
