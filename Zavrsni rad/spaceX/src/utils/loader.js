export const Loader = () =>{

    const divLoader = document.createElement("div")
    divLoader.classList.add("divLoader")

    const div1 = document.createElement("div")
    div1.classList.add("loader1")

    const div2 = document.createElement("div")
    div2.classList.add("loader2")

    const div3 = document.createElement("div")
    div3.classList.add("loader3")

    divLoader.append(div1,div2,div3)
    return divLoader
}

