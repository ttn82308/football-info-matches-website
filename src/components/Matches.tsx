import Image from 'next/image'
import { matchesType } from '@/types';

const Matches = ({data}:{data:matchesType}) => {
  const getDate = new Date(data?.utcDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const cleanTime = (timeString: string): string => {
    return timeString.replace(/(AM|PM)/, '').trim();
  };

  const getTimePeriod = (timeString: string) => {
    const hour = parseInt(timeString.split(':')[0], 10);
    const period = timeString.includes('AM') ? 'Sáng' : 'Chiều';
    return hour < 12 && period === 'Sáng' ? 'Sáng' : 'Chiều';
  };

  const cleanDate = cleanTime(getDate);
  const timePeriod = getTimePeriod(getDate);
  
  return (
    <div className='grid grid-cols-3'>
      <div className='w-full h-full flex items-center'>{/*right team*/}
        <div className='py-4 w-[30px] h-[30px] relative mr-2 text-3xl'>
          <Image src={data?.homeTeam?.crest!} alt={data?.homeTeam?.name!} fill className='object-cover' />
        </div>
        <p className='text-xl'>{data?.homeTeam?.name}</p>
      </div> 
      <div className='px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md'>
        {data?.status == 'FINISHED' ? (
          <p className='20px py-1 text-teal-400 text-xl'>{data?.score?.fullTime.home} : {data.score?.fullTime.away}</p>
          ) : (
          <p className='20px py-1 text-teal-400 text-xl'>{cleanDate} {timePeriod} </p>
        )}
        
      </div>
      <div className='w-full flex items-center justify-end'>    {/*right team*/}       
        <p className='py-4 text-xl text-right'>{data.awayTeam?.name}</p>
        <div className='w-[30px] h-[30px] relative ml-2'>
          <Image src={data?.awayTeam?.crest!} alt={data.awayTeam?.name!} fill className='object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Matches