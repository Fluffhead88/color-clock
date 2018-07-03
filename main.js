// function to display the current time with a background color that changes
// with time

var isHovering = false;

function displayClock() {
  // gets the current date and strips all info except hours, minutes, and seconds
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  // add leading zeros to h,m &s values that are less than 10
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  // sets read out for time
  var time = h + ":" + m + ":" + s;
  // sets the value for the hex color for the background color
  var color = "#" + s + m;
  console.log(time);
  console.log(color);
  // sets body background style to hex number generated above
  document.body.style.background = color;
  // changes the HTML value of the time ID to the current time
  document.querySelector('#time').textContent = time;

  // creates a percentage value of the current minute and creates a bar based on that

  minute_percent = (Number(s) / 60) * 100;
  let bar = "_".repeat(minute_percent);
  console.log(bar);

  // places the time bar on the page
  document.querySelector('#time_bar').textContent = bar;


  document.querySelector('#time').onmouseover = function() {
    isHovering = true;
  };
  document.querySelector('#time').onmouseout = function() {
    isHovering = false;
  };

  if (isHovering) {
    document.querySelector('#time').textContent = color;
  };
  console.log(isHovering)

};

// updates the clock every second
setInterval(displayClock, 1000);