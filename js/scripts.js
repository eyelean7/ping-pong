//Back-End
function pingPong(userNumber) {
  numArray = [1, 2, 3];
  for (var i=1; i<=userNumber; i++) {

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
  return numArray;
}

//User Interface
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#number").val();
    var result = pingPong(userNumber);
    $("#output").text(result);
  });
});
