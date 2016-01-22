describe("pingPong", function(){
  it("returns 'Ping' if a number is divisible by 3 but not 5",function(){
    expect(pingPong(6)).to.equal("Ping");
  });

  it("returns 'Pong' if a number is divisible by 5 but not 3", function(){
    expect(pingPong(10)).to.equal("Pong");
  });
});
