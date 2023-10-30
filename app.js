// function timer(){
//     console.log("parhane k lie sir ali ko yes karao");
// }
//setInterval(timer,1000);
// //setTimeout(timer,1000)
var msech = document.getElementById("msec");
var sech = document.getElementById("sec");
var minh = document.getElementById("min");
var btn=document.getElementById('kchkaro')
var btn2=document.getElementById('haider')
var interval;
msec = 0;
sec = 0;
min = 0;

function timer() {
  msec++;
  msech.innerHTML = msec;
  if (msec == 100) {
    sec++;
    sec++;
    sec++;
    sec++;
    sech.innerHTML = sec;
    msec = 0;
  } else if (sec === 10) {
    min++;
    minh.innerHTML = min;
    sec = 0;
  }
}
function start(){
    interval=setInterval(timer, 10);
    kchkaro.disabled = true;
}
function pause(){
    clearInterval(interval);
    kchkaro.disabled = false;
    btn2.disabled = true;
}
function reset(){
    msec=0
    sec=0
    min=0
    min=0
    min=0
    min1=0
    nnsec=0
    msech.innerHTML = msec;
    sech.innerHTML = sec;
    minh.innerHTML = min;
    clearInterval(interval);
    kchkaro.disabled = true;
}
