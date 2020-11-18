$(document).on('click', '#atualizar', function() {
  var onSuccess = function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    $.ajax({
      url: "https://api.hgbrasil.com/weather?format=json-cors&key=174b4728&lat=" + lat + "&lon="+ lon + "&user_ip=remote",
      type: "get",
      dataType: "json",
      success: function(data){ //Executar se der certo

      cidade = "<p>"+ data.results.city +"</p>";
      clima = "<p><strong>Clima: </strong>"+ data.results.description +"</p>";
      temperatura = "<p>"+ data.results.temp +"ºC</p>";

      navigator.notification.alert("Aguarde...", atualizarDados(), "Carregando informações");

      function atualizarDados()
      {
        $('#cidade').html(cidade);
        $('#clima').html(clima);
        $('#temperatura').html(temperatura);
      }
    },
    error: function(){ //Executar se der erro
      alert("Deu erro!");
    }
    })
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);
});