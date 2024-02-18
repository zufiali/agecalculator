const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
const button = document.querySelector('button')
const ageContainer = document.querySelector('.age_num')

const date = new Date()

let day = date.getDate()
let month = 1 + date.getMonth()
let year = date.getFullYear()

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

button.addEventListener('click', () => {
    if (dayInput.value > day) {
        day = day + months[month - 1]
        month = month - 1
    }
    if (monthInput.value > month) {
        month = month + 12
        year = year - 1
    }
    
    const ageDay = day - dayInput.value
    const ageMonth = month - monthInput.value
    const ageYear = year - yearInput.value
    
    ageContainer.innerHTML = `
        You are: <span>${ageYear}</span> years 
        <span>${ageMonth}</span> months 
        and <span>${ageDay}</span> days
    `
})
