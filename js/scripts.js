$(document).ready(function() {



  $("form#drag-name").submit(function(event) {
    event.preventDefault();

    var faveCol = $("#color").val();

    var dob = parseInt($("#born").val());

    var street = $("#street").val();
    var pet = $("#pet-name").val();
    var word = $("#word").val();

    $(".drag1").append(street+" "+pet+" Mc"+word);
    $(".drag2").append(pet+" "+word+ " "+street+" III");
    $(".drag3").append("Mc"+word+" "+street+" "+pet);

    $(".birthday1").prepend(dob/2-47);
    $(".birthday2").prepend(dob*2+99);
    $(".birthday3").prepend(dob/5);

    $(".col-md-5.Me").css("background-color", faveCol);
    console.log(faveCol);
  });













});
