$(function() {
  //Back-End
  var pingpong = function(userNumber) {
    for (var i=1; i<=userNumber; i++) {
      console.log(i);
      console.log(numArray);
      // if (i%15 === 0) {
      //   numArray.push("ping-pong");
      // }
      // else if (i%5 === 0) {
      //   numArray.push("pong");
      // }
      // else if (i%3 === 0) {
      //   numArray.push("ping");
      // }
      // else {
      //   numArray.push(i);
      // }
    }
  }
//User Interface

  $("form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input").val();
  });
});
