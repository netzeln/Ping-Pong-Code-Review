
var countUp = function(userInput) {

  for(var i = 1; i <= userInput; i++){
    if(i % 3 === 0 && !(i % 5 === 0)){
        $("ul").append("<li>Ping</li>");
    } else if(i % 5 === 0 && !(i % 3 === 0)){
        $("ul").append("<li>Pong</li>");
    } else if (i % 15 === 0){
        $("ul").append("<li>Ping Pong</li>");
    } else{
        $("ul").append("<li>" + i + "</li>");
  }


$(document).ready(function() {



});
