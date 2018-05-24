$(document).ready(function() {

  $("form#drag-name").submit(function(event) {
    event.preventDefault();

    var street = $("#street").val();
    var pet = $("#pet-name").val();
    var word = $("#word").val();

    $(".drag1").append("The "+street+"-"+pet+" Mc"+word);
    $(".drag2").append(pet+"-"+word+street+" III");
    $(".drag3").append("Mc"+word+street+"-"+pet);
  });













});
