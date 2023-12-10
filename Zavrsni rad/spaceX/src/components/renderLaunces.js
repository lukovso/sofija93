export const renderAllLaunches = (data) =>{

const mainDiv = document.createElement("div")
mainDiv.classList.add("mainSection")
    const img = document.createElement("img")
    img.src = data.links.mission_patch

    const h4Name = document.createElement("h4")
    h4Name.textContent = `Mission name: ${data.mission_name}`

    const pYear = document.createElement("p")
    pYear.textContent = `Launches Year: ${data.launch_year}`

    const pRocket = document.createElement("p")
    pRocket.textContent = `Rocket name: ${data.rocket.rocket_name}`

    const pRocketType = document.createElement("p")
    pRocketType.textContent = `Rocket type: ${data.rocket.rocket_type}`

    // const pLaunchesSite = document.createElement("p")
    // pLaunchesSite.textContent = `Launches site: ${data.launches_site.site_name}`
    
    // data.forEach = ((launches) =>{
    //     const div = document.createElement("div")
        
    //     const pName = document.createElement("p")
    //     pName.textContent = launches.mission_name
        
        // const pYear = document.createElement("p")
        // pYear.textContent = launches.launch_year
        
        // const pRocket = document.createElement("p")
        // pRocket.textContent = `Rocket name: ${launches.rocket.rocket_name}`
        
        // const pRocketType = document.createElement("p")
        // pRocketType.textContent = `Rocket type: ${launches.rocket.rocket_type}`
        
        // const pLaunchesSite = document.createElement("p")
        // pLaunchesSite.textContent = `Launches site: ${launches.launches_site.site_name}`
        
        // div.append(pName, pYear, pRocket, pRocketType)
        // mainDiv.append(div)
        // })
        mainDiv.append(img, h4Name, pYear, pRocket, pRocketType)
        return mainDiv
    }

