var refreshIntervalId;
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("end").addEventListener("click", end);
});
function start() {
  refreshIntervalId = setInterval(triggerFrameCapture, 4000);
}

function end() {
  clearInterval(refreshIntervalId);
}

function triggerFrameCapture() {
  chrome.tabs.captureVisibleTab(null, {
    format : "png",
    quality : 100
}, function(screenshotUrl) {
    var views = chrome.extension.getViews();
    for (var i = 0; i < views.length; i++) {
      var view = views[i];
      view.saveScreenShot(screenshotUrl)
    }
  });
}

function saveScreenShot(url) {
  var image = new Image();
    var createCanvas = document.createElement("canvas")
    image.onload = function() {
        var canvas = createCanvas;
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);

        // save the image
        var link = document.createElement('a');
        link.download = "download.png";
        link.href = createCanvas.toDataURL('image/png');
        link.click();
        // screenshot.data = '';
    };
    image.src = url;
}
