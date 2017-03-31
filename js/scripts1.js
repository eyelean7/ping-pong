function pingPong (userNumber) {
  var result = userNumber;
  return result;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#number").val();
    var result = pingPong(userNumber);
    $("#output").text(result);
  });
});
