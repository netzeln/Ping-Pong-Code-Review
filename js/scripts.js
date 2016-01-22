
var countUp = function(userInput) {
  var countValues = [];
  for(var i = 1; i <= userInput; i++){
      countValues.push(i);
  }

  return countValues;
}
var pingPong = function(countValue){
  if(countValue % 3 === 0 && !(countValue % 5 === 0)){
    return "Ping";
  } else if(countValue % 5 === 0 && !(countValue % 3 === 0)){
    return "Pong";
  } else if (countValue % 15 === 0){
    return "Ping Pong";
  } else{
    return countValue;
  }
}
$(document).ready(function() {



});
