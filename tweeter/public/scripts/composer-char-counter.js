// $(document).ready(function() {
//   $("#tweet-text").on("input", function () {
//     const maxChar = 140;
//     const inputChar = $(this).val().length;
//     const charCounter = maxChar - inputChar;

//     const $counterElement = $(this).parent().find(".counter");

//     $counterElement.text(charCounter);

//     if (charCounter < 0) {
//       $counterElement.addClass("invalid");
//     } else {
//       $counterElement.removeClass("invalid");
//     }
//   });
// });




$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    var charCount = $(this).val().length;
    var charLeft = 140 - charCount;
    $('#charCount').text(charLeft);
    if (charLeft < 0) {
      $('#charCount').addClass('red');
    } else {
      $('#charCount').removeClass('red');
    }
  });
});