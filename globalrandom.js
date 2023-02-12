
const body = document.querySelector("body")
body.style.background = "rgb(93,27,126)"

const header = document.querySelector(".header")
header.style.display = "flex"
header.style.justifyContent = "center"
header.style.alignItems = "center"
header.style.flexDirection = "column"
const hero = document.querySelector(".hero")
hero.style.display = "flex"


const block0 = document.querySelector(".block0")
const btn0 = document.querySelector(".btn0")
btn0.addEventListener("mouseover",()=>{
    btn0.style.background = "rgba(161,19,19,0.77)"
    btn0.style.transition = ".6s"
    btn0.style.color = "White"

})
btn0.addEventListener("mouseout",()=>{
    btn0.style.background = "red"
    btn0.style.transition = ".6s"
    btn0.style.color = "black"
})


btn0.style.background = "red"
btn0.style.width = "100px"
btn0.style.height = "40px"
btn0.style.margin = "100px 50px"
btn0.style.borderRadius ="7px"
btn0.style.border = "none"
btn0.addEventListener("click",()=>{

    block0.style.background = "transparent"
    block0.style.border = "2px dashed "
    block0.style.color = "#7800cb"
    block0.style.width = "150px"
    block0.style.height = "150px"
    block0.style.boxShadow = "33px 25px 24px -7px rgba(34, 60, 80, 0.19)"
    block0.style.margin = "50px 10px"
    block0.style.transition = "4s"
    block0.style.display = "flex"
    block0.style.justifyContent = "center"
    block0.style.alignItems = "center"
    btn5.style.display = "block"
    btn0.innerHTML ="😎"
})
const btn5 = document.querySelector(".btn5")
btn5.style.background = "red"
btn5.style.width = "130px"
btn5.style.height = "40px"
btn5.style.border = "none"
btn5.style.borderRadius = "10px"
btn5.style.display = "none"
btn5.style.transition = "3s"
block0.style.position = "absolute"
block0.style.left = "390px"
btn5.addEventListener("click",()=>{
    block0.style.background = "rgba(63,217,129,0.66)"
    block0.style.border = "2px dashed rgba(63,217,129,0.66)"
    btn5.style.transition = "2s"
    btn0.innerHTML = "Выключить"
    btn5.innerHTML = "Включить"
    btn5.style.display = "none"
    // btn3.innerHTML = "<h1>Welcome</h1>"
})



const block1 = document.querySelector(".block1")
const btn1 = document.querySelector(".btn1")
btn1.style.background = "red"
btn1.style.width = "100px"
btn1.style.height = "40px"
btn1.style.margin = "100px 50px"
btn1.style.borderRadius ="7px"
btn1.style.border = "none"
btn1.addEventListener("click",()=>{
    block1.style.background = "transparent"
    block1.style.border = "2px dashed"
    block1.style.color = "#7800cb"
    block1.style.width = "150px"
    block1.style.height = "150px"
    block1.style.boxShadow = "33px 25px 24px -7px rgba(34, 60, 80, 0.19)"
    block1.style.margin = "50px 10px"
    block1.style.transition = "4s"
    block1.style.display = "flex"
    block1.style.justifyContent = "center"
    block1.style.alignItems = "center"
    btn4.style.display = "block"
    btn1.innerHTML ="🥰"
    btn4.style.border = "none"
})
const btn4 = document.querySelector(".btn4")
btn4.style.background = "red"
btn4.style.width = "130px"
btn4.style.height = "40px"
btn4.style.borderRadius = "10px"
btn4.style.display = "none"
btn4.style.transition = "3s"
btn4.style.border = "none"
block1.style.position = "absolute"
block1.style.left = "680px"
btn4.addEventListener("click",()=>{
    block1.style.background = "rgba(255,216,59,0.75)"
    btn4.style.transition = "2s"
    block1.style.border = "2px dashed rgba(255,216,59,0.75)"
    btn1.innerHTML = "Выключить"
    btn4.innerHTML = "Включить"
    btn4.style.display = "none"
    // btn3.innerHTML = "<h1>Welcome</h1>"
})

const block2 = document.querySelector(".block2")
const btn2 = document.querySelector(".btn2")
btn1.addEventListener("mouseover",()=>{
    btn1.style.background = "rgba(161,19,19,0.77)"
    btn1.style.transition = ".6s"
    btn1.style.color = "White"

})
btn1.addEventListener("mouseout",()=>{
    btn1.style.background = "red"
    btn1.style.transition = ".6s"
    btn1.style.color = "black"
})

btn2.addEventListener("mouseover",()=>{
    btn2.style.background = "rgba(161,19,19,0.77)"
    btn2.style.transition = ".6s"
    btn2.style.color = "White"

})
btn2.addEventListener("mouseout",()=>{
    btn2.style.background = "red"
    btn2.style.transition = ".6s"
    btn2.style.color = "black"
})
btn2.style.background = "red"
btn2.style.width = "100px"
btn2.style.height = "40px"
btn2.style.margin = "100px 50px"
btn2.style.borderRadius ="7px"
btn2.style.border = "none"
btn2.addEventListener("click",()=>{
    block2.style.background = "transparent"
    block2.style.border = "2px dashed"
    block2.style.color = "#7800cb"
    block2.style.width = "150px"
    block2.style.height = "150px"
    block2.style.boxShadow = "33px 25px 24px -7px rgba(34, 60, 80, 0.19)"
    block2.style.margin = "50px 10px"
    block2.style.transition = "4s"
    block2.style.display = "flex"
    block2.style.justifyContent = "center"
    block2.style.alignItems = "center"
    btn2.innerHTML = "😊"
    btn3.style.display = "block"

})

const btn3 = document.querySelector(".btn3")
btn3.style.background = "red"
btn3.style.width = "130px"
btn3.style.height = "40px"
btn3.style.borderRadius = "10px"
btn3.style.display = "none"
btn3.style.transition = "3s"
btn3.style.border = "none"
block2.style.position = "absolute"
block2.style.left = "950px"
btn3.addEventListener("click",()=>{
    block2.style.background = "rgba(33,229,229,0.66)"
    block2.style.border = "2px dashed rgba(33,229,229,0.66)"
    btn3.style.transition = "2s"
    // btn3.style.border = "none"
    btn3.innerHTML = "Выключить"
    btn2.innerHTML = "Включить"
    btn3.style.display = "none"
    // btn3.innerHTML = "<h1>Welcome</h1>"
})
