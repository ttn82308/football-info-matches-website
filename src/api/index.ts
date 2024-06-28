import { apiOptions, matchesType } from "@/types"

const options:apiOptions =  {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN,
    "Content-Type": "application/json",
  },
}
export const getMatchesfootball = async () => {
  const matchData = await fetch('https://api.football-data.org/v4/matches',options)
  return matchData.json()
}
// Define Vietnamese month names
const vietnameseMonths = [
  "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];
const todayDate = new Date()
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear()
const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
const day = String(getDateMonth.getDate()).padStart(2, '0');

const yesterday = [year, month, day].join('-');
  // Get Vietnamese month name
const vietnameseMonth = String(vietnameseMonths[getDateMonth.getMonth()]);
export const getMatchesfootballFinished = async () => {
  const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`,options)
  return matchData.json()
}

export const getNewsInfo = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,{next:{revalidate:20}})
  return newsData.json()
}

export const filterLeague = async (filterData:string) => {
  const getEnglishLeague = await getMatchesfootball()
  const filterPremierLeague:matchesType[] = getEnglishLeague?.matches
  const getData = filterPremierLeague.filter((item) => item.competition.name === filterData)
  return getData
}