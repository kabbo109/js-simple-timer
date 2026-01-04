let time = 0;
let timer = null;

function start(){
  if(timer) return;
  timer = setInterval(()=>{
    time++;
    document.getElementById('time').innerText = time;
  },1000);
}

function stop(){
  clearInterval(timer);
  timer = null;
}

function reset(){
  stop();
  time = 0;
  document.getElementById('time').innerText = time;
}
