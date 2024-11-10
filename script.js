
const addTaskInput = document.getElementById('add-task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function addNewTask () {
    let inputText = addTaskInput.value.trim();
    if (inputText !== '') {
        let taskItem = document.createElement('li');
        taskItem.textContent = inputText;
        taskList.appendChild(taskItem);
        addTaskInput.value = '';
    }
    else {
        addTaskInput.style.border('3px solid #DD0000');
        setTimeout(addTaskInput.style.border, 1000, '3px solid #DD0000');
    }
}

addTaskButton[0].addEventListener('click', () => {
    
});

addTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addNewTask();
    }
});

let Time = 25;
let Reset = 0;

const element = document.getElementById("Remains");
element.innerHTML = `${Time} seconds`;

function ticking(){
  const interval = setInterval(function() {
    if (Reset === 1){
      Time = 25;
      element.textContent = Time + ' seconds';
    }
    else{
      Time--;
      element.textContent = Time + ' seconds remaining';
      if (Time <= 0) {
        clearInterval(interval);
        element.textContent = 'Time is up!';
        Reset = 1;
      }
    }
  }, 1000);
}


function start(){
  console.log("Yes");
  Reset = 0;
  ticking();
}

function reset(){
  console.log("No");
  Reset = 1;
}

