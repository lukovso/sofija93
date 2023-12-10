export const renderPayloads = (data) =>{
    const sectionPayloads = document.createElement("section")
    sectionPayloads.classList.add("secPayloads")


    data.forEach((payloads)=>{
        const divPayloads = document.createElement("div")

        const pPayloadsID = document.createElement("h2")
        pPayloadsID.textContent = `Payloads ID: ${payloads.payload_id}`
        
        const pOrbit = document.createElement("p")
        pOrbit.textContent = `Orbit: ${payloads.orbit}`

        const pPayloadsNationality = document.createElement("p")
        pPayloadsNationality.textContent = `Nationality: ${payloads.nationality}`

        const pPayloadsManufacturer = document.createElement("p")
        pPayloadsManufacturer.textContent = `Manufacurer: ${payloads.manufacturer}`

        divPayloads.append(pPayloadsID, pOrbit, pPayloadsNationality, pPayloadsManufacturer)
        sectionPayloads.append(divPayloads)
    })
    return sectionPayloads
} 