describe("countUp", function(){
  it("puts the numbers from 1 to user input into an array", function(){
    expect(countUp(3)).to.eql([1,2,3]);
  });
});

describe ("numberReplace", function(){
  it("checks the numbers in an array and replaces them with words if they are divisible by 3, 5, 15", function(){
    expect(numberReplace([1,3,5,15])).to.eql([1,"Ping","Pong","Ping Pong"])
  });
});

// describe("pingPong", function(){
//   it("returns 'Ping' if a number is divisible by 3 but not 5",function(){
//     expect(pingPong(6)).to.equal("Ping");
//   });
//
//   it("returns 'Pong' if a number is divisible by 5 but not 3", function(){
//     expect(pingPong(10)).to.equal("Pong");
//   });
//
//   it("returns 'Ping Pong' if a number is divisible by both 5 and 3", function(){
//     expect(pingPong(15)).to.equal("Ping Pong");
//   });
//
//   it("returns a number if the number is not divisible by 3 and-or 5", function(){
//     expect(pingPong(4)).to.equal(4);
//   });
// });
