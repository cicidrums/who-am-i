$(document).ready(function() {



  $("form#drag-name").submit(function(event) {
    event.preventDefault();

    var faveCol = $("#color").val();

    var month = parseInt($("#month").val());
    var day = parseInt($("#day").val());
    var year = parseInt($("#year").val());
    var age = 2018-year;

    var street = $("#street").val();
    var pet = $("#pet-name").val();
    var word = $("#word").val();

    $(".drag1").append(" "+street+" "+pet+" Mc"+word);
    $(".drag2").append(pet+" "+word+ " "+street+" III");
    $(".drag3").append("Mc"+word+" "+street+" "+pet);

    $(".birthday1").prepend(Math.round(day*month-year+50000));
    $(".birthday2").prepend(Math.round(year/month+day));
    $(".birthday3").prepend(Math.round(year/day));

    $(".col-md-5.Me").css("background-color", faveCol);
    console.log(faveCol);
  });













});
