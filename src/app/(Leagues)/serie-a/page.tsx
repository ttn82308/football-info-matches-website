import { filterLeague } from '@/api'
import LeagueTable from '@/components/LeagueTable'

const SerieA= async () => {
  const getSerieA= await filterLeague('Serie A')
  return (
    <div className='w-[1000px]'>
      {getSerieA.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default SerieA