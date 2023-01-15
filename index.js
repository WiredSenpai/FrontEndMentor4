const firstCard = document.querySelector(".state__start")
const secondCard = document.querySelector(".state__end")
const submitButton = document.querySelector(".submit__button")
const restartButton = document.querySelector(".restart")
const rating = document.querySelector("#selected__value")
const values = document.querySelectorAll(".btn")



submitButton.addEventListener("click", () =>{
    secondCard.classList.remove("hidden")
    firstCard.style.display = "none"
})

restartButton.addEventListener("click", () =>{
    secondCard.classList.add("hidden")
    firstCard.style.display = "block"
})


values.forEach((value) =>{
    value.addEventListener("click", () => {
     rating.innerHTML = value.innerHTML
    })
})