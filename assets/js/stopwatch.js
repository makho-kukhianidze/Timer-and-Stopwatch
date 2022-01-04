// Variable block - Start.
var stopwatch = document.getElementById('stopwatch');
var hours = 0;
var minutes = 0;
var seconds = 0;
var tik = new Audio();
tik.src = "../sound/tik.mp3";
// Variable block - End.

// Function start stopwatch - Start.
function startstopwatch() {
  cycle();
}
// Function start stopwatch - End.

// Function stop stopwatch - Start.
function stop() {
  tik.pause();
  alert("paused");
}
// Function stop stopwatch - End.

// Function restart stopwatch - Start.
function restart() {
  location.reload();
}
// Function restart stopwatch - End.

// Function cycle stopwatch - Start.
function cycle() {
  hours = parseInt(hours);
  minutes = parseInt(minutes);
  seconds = parseInt(seconds);
  seconds = seconds + 1;
  if (seconds == 60) {
    minutes = minutes + 1;
    seconds = 0;
  }
  if (minutes == 60) {
    hours = hours + 1;
    minutes = 0;
    seconds = 0;
  }
  tik.play();
  if (hours < 10 || hours == 0) {
    hours = "0" + hours;
  }
  if (minutes < 10 || minutes == 0) {
    minutes = "0" + minutes;
  }
  if (seconds < 10 || seconds == 0) {
    seconds = "0" + seconds;
  }
  stopwatch.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "<p style='font-size: 20px;'>  Hours : Minutes : Seconds</p>";
  setTimeout("cycle()", 1060);
}
// Function cycle stopwatch - End.

// Function Full Screen - Start.
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
// Function Full Screen - End.

// Variable block background color - Start.
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var black = document.getElementById('black');
var orange = document.getElementById('orange');
// Variable block background color - End.

// background color - blue , green , black , orange events - Start.
blue.addEventListener('click', function () {
  document.body.style.backgroundColor = "#0048ff42";
  document.getElementById("hours").style.borderBottom = "2px solid red";
  document.getElementById("minutes").style.borderBottom = "2px solid red";
  document.getElementById("seconds").style.borderBottom = "2px solid red";
  document.body.style.color = "black";
})

green.addEventListener('click', function () {
  document.body.style.backgroundColor = "#94db94";
  document.getElementById("hours").style.borderBottom = "2px solid red";
  document.getElementById("minutes").style.borderBottom = "2px solid red";
  document.getElementById("seconds").style.borderBottom = "2px solid red";
  document.body.style.color = "black";
})

orange.addEventListener('click', function () {
  document.body.style.backgroundColor = "orange";
  document.body.style.color = "black";
})

black.addEventListener('click', function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
})
// background color - blue , green , black , orange events - End.

// Variable block background music - Start.
var musicOne = document.getElementById('musicOne');
var musicTwo = document.getElementById('musicTwo');
var musicThree = document.getElementById('musicThree');
var musicFour = document.getElementById('musicFour');
var musicOneSound = new Audio();
musicOneSound.src = "../music_backgound/1.mp3";
var musicTwoSound = new Audio();
musicTwoSound.src = "../music_backgound/2.mp3";
var musicThreeSound = new Audio();
musicThreeSound.src = "../music_backgound/3.mp3";
var musicFourSound = new Audio();
musicFourSound.src = "../music_backgound/4.mp3";
var stopMuisc = document.getElementById('stopMuisc');
// Variable block background music - End.

// background music - events - Start.
stopMuisc.addEventListener('click', function () { // stop background music.
  musicOneSound.pause()
  musicTwoSound.pause();
  musicThreeSound.pause();
  musicFourSound.pause();
})

musicOne.addEventListener('click', function () {
  musicOneSound.play();
});

musicTwo.addEventListener('click', function () {
  musicTwoSound.play();
});

musicThree.addEventListener('click', function () {
  musicThreeSound.play();
});

musicFour.addEventListener('click', function () {
  musicFourSound.play();
});
// background music - events - End.