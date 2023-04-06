const image = document.getElementById('img1')
const heading = document.getElementById('heading')
const paraOne = document.getElementById('para1') 
const paraTwo = document.getElementById('para2')
const taskHeading = document.getElementById('task-heading')
const taskDescription = document.getElementById('task-description')
const dateTime = document.getElementById('date-time')
const button = document.getElementById('btn')

button.addEventListener('click', ()=>{
    image.classList.add('display-none')
})