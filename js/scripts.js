$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const year = parseInt($("input#year").val());
    const result = leapYear(year);
    $("#result").text(result);
  });
});

function leapYear(year) {
  return false;
}