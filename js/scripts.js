var pingPong = function(userInput){
  if(userInput % 3 === 0 && !(userInput % 5 === 0)){
    return "Ping";
  } else if(userInput % 5 === 0 && !(userInput % 3 === 0)){
    return "Pong";
  } else if (userInput % 15 === 0){
    return "Ping Pong";
  }
}
$(document).ready(function() {



});
