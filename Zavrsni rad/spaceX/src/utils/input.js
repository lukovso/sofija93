import { renderAllLaunches } from "../components/renderLaunces"
import {fecthAllLaunches} from "./http"
import { renderfilter } from ".."

export const inputSection = (data) =>{
    const section = document.createElement("section")

    const input = document.createElement("input")
    // input.textContent = "Search your launches..."

    const btn = document.createElement("button")
    btn.textContent = "Serach"
    // btn.addEventListener("click",(event)=>{

    //     const rezultat = data.filter((item)=>{
    //         item.mission_name.toLowerCase().includes(event.target.toLowerCase()
    //         )
    //         renderAllLaunches(rezultat)
    //     })
    
    // })
const main = document.querySelector(".main")
    btn.addEventListener("click", (event)=>{
            const fetchAllLunches = async () =>{
                try {
        const response = await fecthAllLaunches()
                    response.data.filter = ((item=> item.mission_name.inclueds(event.target.input.value)))
                } catch (error) {
                    // eslint-disable-next-line no-console
                     console.log(error)
                }
            }
            fetchAllLunches(response)
        })

    section.append(input,btn)
    return section
}