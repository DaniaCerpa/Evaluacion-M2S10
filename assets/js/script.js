$(document).ready(function() {
  
/* formato original
  $(".text-body-secondary").click(function() {
    var idBoton = $("#Rio").attr("id");
    $("#detalles" + idBoton).toggle();
  });

  $(".btn-close").click(function() {
    $(".detalles").show();
});
*/

$(".text-body-secondary").each(function() {
  const idBoton = $(this).attr("id");
  $(this).click(function() {
  $("#detalles" + idBoton).toggle();
});
  
});


$(".btn-close").click(function() {
  $(".detalles").hide();
});

})
