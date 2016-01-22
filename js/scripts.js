
var countUp = function(userInput) {
  var countValues = [];
  for(var i = 1; i <= userInput; i++){
      countValues.push(i);
  }

  return countValues;
}

var numberReplace = function(countValues){
  var inputChecks = countValues;
  var inputCheck;
  var newInputArray=[]
    inputChecks.forEach(function(inputCheck){
      if(inputCheck % 3 === 0 && !(inputCheck % 5 === 0)){
        newInputArray.push("Ping");
      } else if(inputCheck % 5 === 0 && !(inputCheck % 3 === 0)){
        newInputArray.push("Pong");
      } else if (inputCheck % 15 === 0){
        newInputArray.push("Ping Pong");
      } else{
        newInputArray.push(inputCheck);
      }

    });
    return newInputArray;
  }


//
// // var pingPong = function(countValue){
// //   if(countValue % 3 === 0 && !(countValue % 5 === 0)){
// //     return "Ping";
// //   } else if(countValue % 5 === 0 && !(countValue % 3 === 0)){
// //     return "Pong";
// //   } else if (countValue % 15 === 0){
// //     return "Ping Pong";
// //   } else{
// //     return countValue;
// //   }
// // }
// $(document).ready(function() {
//
//
//
// });
