function displayClock() {
  var date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  var time = h + ":" + m + ":" + s;
  var color = "#" + s + m + h;


  document.body.style.background = color;
  document.querySelector('#time').innerHTML = time;
}


setInterval(displayClock, 1000);