//
// var countUp = function(userInput) {
//
//   for(var i = 1; i <= userInput; i++){
//     if(i % 3 === 0 && !(i % 5 === 0)){
//         $("ul#results").append("<li>Ping</li>");
//     } else if(i % 5 === 0 && !(i % 3 === 0)){
//         $("ul#results").append("<li>Pong</li>");
//     } else if (i % 15 === 0){
//         $("ul#results").append("<li>Ping Pong</li>");
//     } else{
//         $("ul#results").append("<li>" + i + "</li>");
//   }


$(document).ready(function() {

$("form#getNumber").submit(function(event){

  var userInput = Math.abs(parseInt($("input#countUp").val()))
  $("ul#results").empty();
  for(var i = 1; i <= userInput; i++){
    if(i % 3 === 0 && !(i % 5 === 0)){
        $("ul#results").append("<li>Ping</li>");
    } else if(i % 5 === 0 && !(i % 3 === 0)){
        $("ul#results").append("<li>Pong</li>");
    } else if (i % 15 === 0){
        $("ul#results").append("<li>Ping Pong</li>");
    } else{
        $("ul#results").append("<li>" + i + "</li>");
    }
    }
    $(".resultslist").show();

    event.preventDefault();
  });
});
