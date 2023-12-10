export const mainPage = () =>{
    const main = document.createElement("main")
    main.classList.add("mainPage")

    const img = document.createElement(img)

    const h1 = document.createElement("h1")
    h1.textContent = "SPACEX LAUNCHES"
    
    main.append(img, h1)
    return main
}