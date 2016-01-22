describe("pingPong", function(){
  it("returns 'Ping' if a number is divisible by 3 but not 5",function(){
    expect(pingPong(6)).to.equal("Ping");
  });
});
