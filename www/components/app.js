$(document).on('click', '#atualizar', function() {
  var onSuccess = function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);
});