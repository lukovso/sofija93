export const renderMission = (mission) =>{
    const sectionMission = document.createElement("section")
    sectionMission.classList.add("misionsSection")
    mission.forEach((data)=>{
        
        const divMission = document.createElement("div")
        divMission.classList.add("secMision")
        
        const missionName = document.createElement("h1")
        missionName.textContent = `Mission Name: ${data.mission_name}`
        
        const missionManufacturing = document.createElement("div")
        missionManufacturing.textContent = `Mission manufacturers: ${data.manufacturers}`
        
        const missionDescription = document.createElement("p")
        missionDescription.textContent = data.description
        
        divMission.append(missionName, missionManufacturing, missionDescription)
        sectionMission.append(divMission)
    })
    return sectionMission
}