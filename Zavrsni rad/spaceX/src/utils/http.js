import axios from "axios"

const spaceXLaunches = axios.create({
    baseURL: "https://api.spacexdata.com/v3",
    timeout: 1000,
    headers: {},
})

export const fecthAllLaunches = () =>{
    return spaceXLaunches.get("/launches")
}

export const fecthOneLaunches = (launcheID) =>{
    return spaceXLaunches.get(`/launches/${launcheID}`)
}

export const fecthAllMission = () =>{
    return spaceXLaunches.get("/missions")
}

export const fecthAllPayloads = () =>{
    return spaceXLaunches.get("/payloads")
}

export const fecthAllRockets = () =>{
    return spaceXLaunches.get("/rockets")
}