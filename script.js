
for (var i = 0; i < 36; i++){
  $('.grigliona').append('<div class="quad"></div>');
}
$('.quad').click(
  function () {
  var z = $(this)
  $.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/random/int',
    method: 'GET',
    success: function success(data) {
      if(z.hasClass('cliccato')){
        alert("Hai già cliccato")
      }
      else{
        if (data.response <= 5) {
          z.addClass('rosso');
          z.append('<h3>' + data.response + '</h3>')
          z.addClass('cliccato');
        }
        else {
          z.addClass('verde');
          z.append('<h3>' + data.response + '</h3>')
          z.addClass('cliccato');
        }
      }
    },
    error: function error() {
      console.log('error', 'Si è verificato un errore');
    }
  });
});
