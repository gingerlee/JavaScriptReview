$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var favoritesInput = $("input#favorite").val();

    $(".favorite1").append(favoritesInput);

    $("#list").show();

    event.preventDefault();
  });
});
