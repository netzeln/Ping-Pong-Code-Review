
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



$(document).ready(function() {
  $("form#getNumber").submit(function(event){
    $("ul#results").empty();
    var userInput = Math.abs(parseInt($("input#countUp").val()))
    var countValues = countUp(userInput);
    var listPrint = numberReplace(countValues);

    listPrint.forEach(function(listItem){
        $("ul#results").append("<li>" + listItem + "</li>");
      })
    $(".resultslist").show();

      event.preventDefault();
    });


});
