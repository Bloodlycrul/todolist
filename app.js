const image = document.getElementById('img1')
const heading = document.getElementById('heading')
const paraOne = document.getElementById('para1') 
const paraTwo = document.getElementById('para2')
const taskHeading = document.getElementById('task-heading')
const taskDescription = document.getElementById('task-description')
const dateTime = document.getElementById('date-time')
const button = document.getElementById('btn')
const taskShow = document.getElementById('task-list-show')

button.addEventListener('click', ()=>{
    // Removing the image and heading title to the first Container
    image.classList.add('displaynone')
    heading.classList.add('displaynone')
    paraOne.classList.add('displaynone')
    paraTwo.classList.add('displaynone')

    // Creating the element 
    let headingTask = document.createElement('div')
    let taskBody = document.createElement('p')
    let taskName = document.createElement('p')
    let taskDate = document.createElement('p')
    let checkBox = document.createElement('input')
let taskEl = document.createElement('div');

    checkBox.type = 'checkBox';

    // Adding the class and append the child Here
    checkBox.classList.add('check-box')
    taskEl.appendChild(checkBox);
    taskShow.appendChild(taskEl)
    taskEl.classList.add('task-list')
    taskEl.appendChild(headingTask)
    headingTask.appendChild(taskName)
    headingTask.appendChild(taskBody)
    headingTask.appendChild(taskDate)

    taskName.textContent = taskHeading.value;
    taskBody.textContent = taskDescription.value;
    taskDate.textContent = dateTime.value


    checkBox.addEventListener('click', ()=>{
        if(checkBox.checked === true){
            taskEl.classList.add('backcolor-line')
        }else if(!checkBox.checked === true){
            taskEl.classList.remove('backcolor-line')
        }
    
    })

})



