const LoadingTable = () => {
  return (
    <div className='p-2 w-full md:w-[650px]'>
      <div className='overflow-y-auto rounded-lg bg-card'>
        <table className='border-collapse table-auto w-full text-sm text-left border border-border rounded-lg '>
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
            </tr>
          </thead>
          <tbody className='divider'>
            <tr className='w-full rounded-lg'>
              <td className='px-6 py-4'>
                <div className='flex items-center gap-1'>
                  <div className='w-[20px] h-[20px] animate-pulse bg-gray-500 rounded-full' />
                  <p className='animate-pulse bg-gray-500 w-48 h-3 rounded-lg'></p>
                </div>
              </td>
              <td className='px-6 py-4'>
                <p className='animate-pulse bg-gray-500 w-32 h-3 rounded-lg'></p>
              </td>
              <td className='px-6 py-4'>
                <p className='animate-pulse bg-gray-500 w-32 h-3 rounded-lg'></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LoadingTable
