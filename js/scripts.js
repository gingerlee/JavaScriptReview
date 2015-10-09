$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var favorites = $("input#favorite").val();

    $(".favorite").append(favorites);

    $("#favelist").show();

    event.preventDefault();
  });
});
