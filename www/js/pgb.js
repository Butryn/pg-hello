function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
  var options = { frequency: 100 };  // Update every 3 seconds

navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
	
}


     function onSuccess(acceleration) {
    document.getElementById("type").innerHTML='Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n';
}

function onError() {
    alert('onError!');
}

