var videoPlayer = document.getElementById("videoPlayer");
var videoInput = document.getElementById("videoInput");
var video = document.getElementById("video");
var videoSource = document.getElementById("videoSource");

function playVideo() {
  var file = videoInput.files[0];
  var fileURL = URL.createObjectURL(file);
  videoSource.src = fileURL;
  video.load();
  video.play();
}

function playPause() {
  if (video.paused)
    video.play();
  else
    video.pause();
}

function changeSpeed(speed) {
  video.playbackRate = speed;
}

function changeVolume(volume) {
  video.volume = volume;
}
