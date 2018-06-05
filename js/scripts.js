$(document).ready(function() {



  $("form#drag-name").submit(function(event) {
    event.preventDefault();

    var political = parseInt($("select#political").val());

    if (political < 5) {
      $("span#liberal").show();
      $("span#conservative, span#moderate").hide();
    } else if (political >= 4 && political <= 6) {
      $("span#moderate").show();
      $("span#conservative, span#liberal").hide();
    } else {
      $("span#conservative").show();
      $("span#liberal, span#moderate").hide();
    }

    var faveCol = $("#color").val();

    var month = parseInt($("#month").val());
    var day = parseInt($("#day").val());
    var year = parseInt($("#year").val());
    var age = 2018-year;

    if (age >= 54) {
      $("span#bb").show();
      $("span#x, span#mil").hide();
    } else if (age >= 32 && age < 54) {
      $("span#x").show();
      $("span#bb, span#mil").hide();
    } else {
      $("span#mil").show();
      $("span#x, span#bb").hide();
    }

    var street = $("#street").val();
    var pet = $("#pet-name").val();
    var word = $("#word").val();

    $(".drag1, .drag2, .drag3").empty();
    $(".drag1").append(" "+street+" "+pet+" Mc"+word);
    $(".drag2").append(pet+" "+word+ " "+street+" III");
    $(".drag3").append("Mc"+word+" "+street+" "+pet);

    $(".birthday1, .birthday2, .birthday3").empty();
    $(".birthday1").prepend(Math.round(day*month-year+50000));
    $(".birthday2").prepend(Math.round(year/month+day));
    $(".birthday3").prepend(Math.round(year/day));

    $(".col-md-5.Me").css("background-color", faveCol);
    console.log(faveCol);
  });













});
