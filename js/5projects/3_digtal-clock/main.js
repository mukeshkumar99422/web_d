const clock = document.getElementById('clock');

setInterval(function () {
  //setInterval(<function>,<time(ms)>)
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);