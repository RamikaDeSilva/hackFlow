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

