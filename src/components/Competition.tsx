// import { matchesType } from '@/types'
// import Image from 'next/image'

// const Competition = ({data}:{data:matchesType}) => {
//   const nd = new Date(data?.utcDate)
//   const dateConvert = nd.toDateString()
//   return (
//     <div className='mb-4 flex justify-between items-center px-4 py-1 bg-slate-600 hover:bg-slate-700 rounded-md'>
//       <div className='flex space-x-4'>
//         <Image src={data?.competition.emblem} alt={data?.competition.name} width={40} height={40} />
//         <p className='text-xl  text-teal-400'>{data?.competition.name}</p>
//       </div>
//       <p className='text-base md:text-sm'>{dateConvert}</p>
//     </div>
//   )
// }

// export default Competition
import { matchesType } from '@/types'
import Image from 'next/image'

const Competition = ({data}:{data:matchesType}) => {
  // Create a new Date object with UTC date
  const utcDate = new Date(data?.utcDate);

  // Convert UTC date to local date (Vietnamese timezone)
  const localDate = utcDate.toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh', // Set timezone to Vietnam
    weekday: 'long', // Display short weekday name (e.g., Mon)
    day: 'numeric', // Display day of the month
    month: 'short', // Display full month name
    year: 'numeric', // Display year
  });

  return (
    <div className='mb-4 flex justify-between items-center px-4 py-1 bg-slate-600 hover:bg-slate-700 rounded-md'>
      <div className='flex space-x-4'>
        <Image src={data?.competition.emblem} alt={data?.competition.name} width={40} height={40} />
        <p className='text-xl  text-teal-400'>{data?.competition.name}</p>
      </div>
      <p className='text-base md:text-sm'>{localDate}</p>
    </div>
  )
}

export default Competition