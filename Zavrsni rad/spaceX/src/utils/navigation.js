import { inputSection } from "./input"
import {fecthAllLaunches, fecthAllMission, fecthAllPayloads, fecthAllRockets} from "./http.js"
import { renderAllLaunches } from "../components/renderLaunces.js"
import { Loader } from "./loader.js"
import { renderMission } from "../components/renderMission.js"
import { renderPayloads } from "../components/renderPayloads.js"
import { renderRockets } from "../components/renderRockets.js"
import { mainPage } from "../components/mainPage.js"
import { selectLaunchesYear } from "./select.js"
import { SelectFlightNumber } from "./select.js"
// import { renderfilter } from "../index.js"

export const navigation = () =>{
    const main = document.querySelector(".main")
    const inputSec = document.querySelector(".input")
    const section = document.createElement("section")
    section.classList.add("navSection")

    const pLogo = document.createElement("p")
    pLogo.textContent = "SPACEX"
    pLogo.classList.add("logo")

    pLogo.addEventListener("click",()=>{
        main.textContent = ""
        inputSec.textContent = ""
        const mPage = mainPage()
        main.append(mPage)
    })

    const div = document.createElement("div")
    div.classList.add("divNavigation")
    
    const pAllLaunches = document.createElement("p")
    pAllLaunches.textContent = "All Launches"

    pAllLaunches.addEventListener("click",() =>{
        const main = document.querySelector(".main")
        main.textContent = ""
        inputSec.textContent = ""
        const load = Loader()
        main.append(load)
         const AllLaunches = async () =>{
        
            try{
                const response = await fecthAllLaunches()
            load.remove()
                // const render = renderAllLaunches(response.data)
                // main.append(render)
                response.data.forEach((arr)=>{
                    const news = renderAllLaunches(arr)
                    main.append(news)
                })
            }catch(error){
                 // eslint-disable-next-line no-console
                 console.log(error)
            }
        }
        
        AllLaunches()
    })

    const pOneLaunches = document.createElement("p")
    pOneLaunches.textContent = "One Launches"

    pOneLaunches.addEventListener("click", ()=>{
        main.textContent = ""
        inputSec.textContent = ""
        const input = inputSection()
        inputSec.append(input)
    })

    const pMission = document.createElement("p")
    pMission.textContent = "Mission"
    pMission.addEventListener("click", ()=>{
        const main = document.querySelector(".main")
        main.textContent = ""
        inputSec.textContent = ""
        const load = Loader()
        main.append(load)
         const AllMission = async () =>{
        
            try{
                const response = await fecthAllMission()
                load.remove()
        
                const mision = renderMission(response.data)
                main.append(mision)
                
            }catch(error){
                 // eslint-disable-next-line no-console
                 console.log(error)
            }
        }
        AllMission()

    })
       const pPayloads = document.createElement("p")
       pPayloads.textContent = "Payloads"

       pPayloads.addEventListener("click",()=>{
        main.textContent = " "
        inputSec.textContent = " "
        const load = Loader()
        main.append(load)
        const AllPayloads = async () =>{
        
            try{
                const response = await fecthAllPayloads()
                load.remove()
        
                const payloads = renderPayloads(response.data)
                main.append(payloads)
                
            }catch(error){
                 // eslint-disable-next-line no-console
                 console.log(error)
            }
        }
        AllPayloads()
    })
    const pRockets = document.createElement("p")
       pRockets.textContent = "Rockets"

       pRockets.addEventListener("click",()=>{
        main.textContent = " "
        inputSec.textContent = " "
        const load = Loader()
        main.append(load)
        const AllRockets = async () =>{
        
            try{
                const response = await fecthAllRockets()
                load.remove()
        
                const rockets = renderRockets(response.data)
                main.append(rockets)
                
            }catch(error){
                 // eslint-disable-next-line no-console
                 console.log(error)
            }
        }
        AllRockets()
    })

    // const searchperYear = document.createElement("p")
    // searchperYear.textContent = "Search per Year"

    // searchperYear.addEventListener("click",()=>{
    //     main.textContent = ""
    //     inputSec.textContent = ""
    //     const sectionSelect = document.querySelector(".sectionSelect")
    //     const selectYear = selectLaunchesYear()
    //     const selectNumber = SelectFlightNumber()
    //     sectionSelect.append(selectYear, selectNumber)
    // })


    div.append(pAllLaunches, pOneLaunches, pMission, pPayloads, pRockets)
    section.append(pLogo, div)
    return section
}