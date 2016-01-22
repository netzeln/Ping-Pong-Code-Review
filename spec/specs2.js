describe("countUp", function(){
  it("puts the numbers from 1 to user input into an array", function(){
    expect(countUp([1,3,5,15)).to.eql([1,"Ping","Pong", "Ping Pong"]);
  });
});
