function pingPong (userNumber) {
  newNum = userNumber-1;
  return newNum;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#number").val();
    var result = pingPong(userNumber);
    $("#output").text(result);
  });
});
