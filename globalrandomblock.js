const boDYL = document.querySelector("body")



const btnBODY= document.querySelector(".bodystandart")
btnBODY.style.background = "black"
btnBODY.style.width = "100px"
btnBODY.style.height = "30px"
btnBODY.style.color = "white"
btnBODY.style.borderRadius = "8px"
btnBODY.addEventListener("mouseover",()=> {
    btnBODY.style.transition = "2s"
    btnBODY.style.background = "rgb(255,255,255)"
    btnBODY.style.color = "black"
    btnBODY1.style.color = "black"
    btnBODY.style.border = "2px solid white"
})
btnBODY.addEventListener("mouseout",()=>{
    btnBODY.style.transition = "1s"
    btnBODY.style.background = "rgb(7,0,0)"
    btnBODY.style.color = "white"
    btnBODY.style.border = "2px solid black"

})
btnBODY.addEventListener("click",()=>{
    boDYL.style.background = "black"
    boDYL.style.transition = "3s"

})
const btnBODY1= document.querySelector(".bodystandart1")
btnBODY1.style.background = "white"
btnBODY1.style.width = "100px"
btnBODY1.style.height = "30px"
btnBODY1.style.color = "black"
btnBODY1.style.borderRadius = "8px"
btnBODY1.style.border = "1px solid white"
btnBODY1.addEventListener("mouseover",()=>{
    btnBODY1.style.transition = "1s"
    btnBODY1.style.background = "rgb(0,0,0)"
    btnBODY1.style.color = "white"
    btnBODY1.style.border = "1px solid black"
    btnBODY1.addEventListener("mouseout",()=>{
        btnBODY1.style.transition = "1s"
        btnBODY1.style.background = "rgb(255,255,255)"
        btnBODY1.style.color = "black"
        btnBODY1.style.border = "2px solid white"
    })
    btnBODY1.addEventListener("click",()=>{
        boDYL.style.background = "white"
        boDYL.style.transition = "3s"

    })
})
