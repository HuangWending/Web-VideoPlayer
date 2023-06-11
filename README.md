# Web-VideoPlayer
Web前端视频播放器
<!DOCTYPE html>
<html>
<head>
  <title>视频播放器</title>
  <style>
    #videoPlayer {
      width: 640px;
    }
  </style>
</head>
<body>
  <h2>视频播放器</h2>

这部分是HTML文档的开头，包含文档类型定义和`<html>`标签开始。`<head>`部分包含文档的标题以及一些样式定义。`<body>`部分是页面的主体部分。

  <input type="file" id="videoInput">
  <button onclick="playVideo()">确定</button>
  <br><br>

这段代码创建一个文件输入字段`<input type="file">`，用于用户选择视频文件。接着，按钮`<button>`被创建，点击该按钮会触发`playVideo()`函数。

  <div id="videoPlayer">
    <video id="video" width="640" height="480">
      <source id="videoSource" type="video/mp4">
    </video>
  </div>

这里定义了一个容器`<div>`，用于包裹视频播放器。视频播放器由`<video>`元素组成，其中设置了宽度和高度，并包含一个`<source>`元素，用于指定视频文件的源类型和URL。

  <br>

  <button onclick="playPause()">播放/暂停</button>
  <button onclick="changeSpeed(0.5)">0.5x</button>
  <button onclick="changeSpeed(1)">1x</button>
  <button onclick="changeSpeed(2)">2x</button>
  <br>

这一部分创建了几个按钮，分别用于播放/暂停视频和调整播放速度。每个按钮都有一个`onclick`属性，当用户点击按钮时，相应的JavaScript函数会被调用。


  <input type="range" min="0" max="1" step="0.1" value="1" oninput="changeVolume(this.value)">
  <br>

这是一个用于调整音量的滑块输入`<input type="range">`，用户可以通过拖动滑块来改变音量。`oninput`属性指定了当滑块的值发生变化时调用的JavaScript函数。


  <script src="videoPlayer.js"></script>

这行代码引入了名为`videoPlayer.js`的外部JavaScript文件。这个文件包含了视频播放器所需的JavaScript代码。


</body>
</html>

这是HTML文档的结尾，关闭了`<body>`和`<html>`标签。

var videoPlayer = document.getElementById("videoPlayer");
var videoInput = document.getElementById("videoInput");
var video = document.getElementById("video");
var videoSource = document.getElementById("videoSource");

这几行代码使用`document.getElementById()`方法获取了 HTML 元素的引用。通过元素的 ID 属性，我们可以访问相应的元素对象并将其存储在变量中，方便后续的操作和修改。

function playVideo() {
  var file = videoInput.files[0];
  var fileURL = URL.createObjectURL(file);
  videoSource.src = fileURL;
  video.load();
  video.play();
}

这是`playVideo()`函数，它在用户点击“确定”按钮时被调用。该函数从文件输入字段`videoInput`中获取用户选择的文件，创建一个 URL 对象，并将其赋值给视频元素`videoSource`的`src`属性。然后，调用`video`的`load()`方法加载视频并调用`play()`方法播放视频。

function playPause() {
  if (video.paused)
    video.play();
  else
    video.pause();
}
`playPause()`函数用于切换视频的播放/暂停状态。如果视频当前处于暂停状态（`paused`属性为`true`），则调用`play()`方法播放视频；否则，调用`pause()`方法暂停视频的播放。
function changeSpeed(speed) {
  video.playbackRate = speed;
}

`changeSpeed()`函数用于更改视频的播放速度。通过将`speed`参数赋值给视频元素的`playbackRate`属性，可以改变视频的播放速度。例如，`changeSpeed(2)`会将播放速度设置为2倍。
function changeVolume(volume) {
  video.volume = volume;
}

`changeVolume()`函数用于更改视频的音量。通过将`volume`参数赋值给视频元素的`volume`属性，可以调整视频的音量。`volume`的值应在0到1之间，其中0表示静音，1表示最大音量。
