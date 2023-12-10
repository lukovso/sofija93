import { randomImg } from "../utils/helper"

export const renderRockets = (data) =>{
    const sectionRockets = document.createElement("section")
    sectionRockets.classList.add("secRockets")


    data.forEach((rockets)=>{
        const divRockets = document.createElement("div")

        const imgRockets = document.createElement("img")
        imgRockets.src = randomImg(rockets.flickr_images)
        
        const pRocketName = document.createElement("h1")
        pRocketName.textContent = `Rocket Name: ${rockets.rocket_name}`

        const pCountry = document.createElement("p")
        pCountry.textContent = `Country: ${rockets.country}`

        const pRocketID = document.createElement("p")
        pRocketID.textContent = `Rocket ID: ${rockets.id}`

        const pRocketActive = document.createElement("p")
        pRocketActive.textContent = `Rocket Active: ${rockets.active}`

        const pRocketDescription = document.createElement("p")
        pRocketDescription.textContent = `Rocket Description: ${rockets.description}`

        divRockets.append(imgRockets,pRocketName, pCountry,pRocketID, pRocketActive, pRocketDescription)
        sectionRockets.append(divRockets)
    })
    return sectionRockets
} 
