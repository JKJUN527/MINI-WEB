window.onload = function() {
    var img = new Image()
    img.src = './77ea2be15f2b479b2980799a61ee21ec.png'
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ObjectTracker('face');
    var mediaRecorder, chunks = []
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);
    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', function(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      event.data.forEach(function(rect) {
        context.drawImage(img, rect.x, rect.y - rect.height / 2, rect.width, rect.height);
      });
    })
    navigator.getUserMedia({
        audio: true,
        video: true
    }, (stream) => {
      mediaRecorder = new MediaRecorder(stream)
      mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data)
      }
      mediaRecorder.onstop = (e) => {
          blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' })
          var formdata = new FormData()
          formdata.append('file', blob)
          $.ajax({
              url: 'https://mini.jkjun.cn/uploadvideo/',
              method: 'POST',
              data: formdata,
              processData: false,
              contentType: false,
              success: function(res) {
                  location.href = 'https://mini.jkjun.cn/src/index.html#/publish'
              }
          })
      }
    }, (err) => {
        console.log(err)
    })
}