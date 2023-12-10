// import { Loader } from "./utils/loader.js"
// import {fecthAllLaunches} from "./utils/http"
// import { renderAllLaunches } from "./utils/renderLaunces"
import {navigation} from  "./utils/navigation.js"
const main = document.querySelector(".main")
import { mainPage } from "./components/mainPage.js"
// import { SelectFlightNumber } from "./utils/select.js"
// import { selectLaunchesYear } from "./utils/select.js"
import "../asset/css/style.css"
// import { extractFlightNumbers, extractLaunchesYear } from "./utils/helper.js"

// const loader = Loader()
// main.append(loader)

const navSection= document.querySelector(".navigation")
const nav = navigation()
navSection.append(nav)

const mPage = mainPage()
main.append(mPage)

// export const renderfilter = (data) =>{
//     const filters = document.querySelector("sectionSelect")

//     const allYears = extractLaunchesYear(data)
//     const allNumbers = extractFlightNumbers(data)

//     const selectYear = selectLaunchesYear(allYears)
//     const selectNumber = SelectFlightNumber(allNumbers)

//     filters.append(selectYear,selectNumber)
//     return filters
// }

// export const AllLaunches = async () =>{
//     const main = document.querySelector(".main")

//     try{
//         const response = await fecthAllLaunches()
//         // const render = renderAllLaunches(response.data)
//         // main.append(render)
//         response.data.forEach((arr)=>{
//             const news = renderAllLaunches(arr)
//             main.append(news)
//         })
//     }catch(error){
//          // eslint-disable-next-line no-console
//          console.log(error)
//     }
// }

// AllLaunches()