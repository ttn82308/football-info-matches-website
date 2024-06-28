// import { getMatchesfootball, getMatchesfootballFinished } from "@/api"
// import Status from "@/components/Status"

// export default async function Home() {
//   const getDatas =  await getMatchesfootball()
//   const getDatasFinished = await getMatchesfootballFinished()

//   const matchesDatas = getDatas?.matches
//   const matchesDatasFinished = getDatasFinished?.matches

//   const nd = new Date()
//   const dateConvert = nd.toDateString()


//   return (
//     <section className="px-2 md:px-4 md:w-[1000px]">
//       <div className="flex justify-between items-center mb-4 md:mb-2">
//         <h1 className="text-md md:text-xl font-bold">Trận đấu</h1>
//         <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm">
//           <p>{`${dateConvert}`}</p>
//         </div>
//       </div>
//       <Status matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} />
//     </section>
//   )
// }
import { getMatchesfootball, getMatchesfootballFinished } from "@/api"
import Status from "@/components/Status"

// Define Vietnamese month names
const vietnameseMonths = [
  "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

export default async function Home() {
  const getDatas =  await getMatchesfootball()
  const getDatasFinished = await getMatchesfootballFinished()

  const matchesDatas = getDatas?.matches
  const matchesDatasFinished = getDatasFinished?.matches

  // Get today's date
  const todayDate = new Date();

  // Get yesterday's date
  const yesterdayDate = new Date(todayDate.getTime());
  yesterdayDate.setDate(todayDate.getDate() - 1);

  // Extract year, month, and day
  const year = yesterdayDate.getFullYear();
  const monthIndex = yesterdayDate.getMonth();
  const day = String(yesterdayDate.getDate()).padStart(2, '0');

  // Get Vietnamese month name
  const vietnameseMonth = vietnameseMonths[monthIndex];

  // Form Vietnamese date string
  const vietnameseDate = `${day} ${vietnameseMonth} ${year}`;

  return (
    <section className="px-2 md:px-4 md:w-[1000px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="text-md md:text-xl font-bold">Trận đấu</h1>
        <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm">
          <p>{`${vietnameseDate}`}</p>
        </div>
      </div>
      <Status matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} />
    </section>
  )
}
