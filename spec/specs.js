describe("pingPong", function(){
  it("returns 'Ping' if a number is divisible by 3 but not 5",function(){
    expect(pingPong(6)).to.equal("Ping");
  });

  it("returns 'Pong' if a number is divisible by 5 but not 3", function(){
    expect(pingPong(10)).to.equal("Pong");
  });

  it("returns 'Ping Pong' if a number is divisible by both 5 and 3", function(){
    expect(pingPong(15)).to.equal("Ping Pong");
  });
});
