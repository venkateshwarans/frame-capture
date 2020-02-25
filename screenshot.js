// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
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
        link.href = createCanvas.toDataURL();
        link.click();
        screenshot.data = '';
    };
    image.src = url;
}

// chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
//   if (msg.ready === "ready") {
//       if (confirm('Do you want to have a capture of this screen?')) {
//           sendResponse({download : "download"});
//       }
//   }
// });
