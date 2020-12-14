const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

function datetime() {
  // Date
  var dates = document.getElementById('dates');
  var months = document.getElementById('months');
  var years = document.getElementById('years');

  // Time
  var hours = document.getElementById('hours');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');

  var d = new Date();
  var weekday = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu");
  // weekday[0] = "Minggu";
  // weekday[1] = "Senin";
  // weekday[2] = "Selasa";
  // weekday[3] = "Rabu";
  // weekday[4] = "Kamis";
  // weekday[5] = "Jum'at";
  // weekday[6] = "Sabtu";

  var n = weekday[d.getDay()];
  document.getElementById("days").innerHTML = n;

  var dt = new Date().getDate();
  var mon = new Date().getMonth() + 1;
  var y = new Date().getFullYear();

  var h = new Date().getHours();
  var min = new Date().getMinutes();
  var s = new Date().getSeconds();

  dt = (dt < 10) ? "0" + dt : dt;
  mon = (mon < 10) ? "0" + mon : mon;

  h = (h < 10) ? "0" + h : h;
  min = (min < 10) ? "0" + min : min;
  s = (s < 10) ? "0" + s : s;

  dates.innerHTML = dt;
  months.innerHTML = mon;
  years.innerHTML = y;

  hours.innerHTML = h;
  minutes.innerHTML = min;
  seconds.innerHTML = s;
}

var interval = setInterval(datetime, 1);