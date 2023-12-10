export const randomImg = (arr) =>{
    return arr[Math.floor(Math.random() * arr.length)]
}

export const extractLaunchesYear = (arr) =>{
    const years = [];
    
    arr.forEach((launch) => {
        if (!years.find((el) => el === launch.launch_year)) years.push(launch.launch_year)
    })
    return years
}

export const extractFlightNumbers = (arr) =>  {

    const numbers = [];
    
    arr.forEach((item) => {
        if (!numbers.find((el) => el === item.flight_number)) numbers.push(item.flight_number)
    })
  
    return numbers;
}