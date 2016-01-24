

var pingPong = function(i){

  if(i % 3 === 0 && !(i % 5 === 0)){
    return "Ping";
  } else if(i % 5 === 0 && !(i % 3 === 0)){
    return "Pong";
  } else if (i % 15 === 0){
    return "Ping Pong";
  } else{
    return i;
  }
}
$(document).ready(function() {
  $("form#getNumber").submit(function(event){

    var userInput = Math.abs(parseInt($("input#countUp").val()))
    $("ul#results").empty();
    for(var i = 1; i <= userInput; i++){
      $("ul#results").append("<li>" + pingPong(i) +"</li>");
}


    // for(var i = 1; i <= userInput; i++){
    //   if(i % 3 === 0 && !(i % 5 === 0)){
    //       $("ul#results").append("<li>Ping</li>");
    //   } else if(i % 5 === 0 && !(i % 3 === 0)){
    //       $("ul#results").append("<li>Pong</li>");
    //   } else if (i % 15 === 0){
    //       $("ul#results").append("<li>Ping Pong</li>");
    //   } else{
    //       $("ul#results").append("<li>" + i + "</li>");
    //   }
    // }
    $(".resultslist").show();

      event.preventDefault();
    });
});
