//Back-End
function pingPong(userNumber) {
  for (var i=1; i<=userNumber; i++) {
    if (i%15 === 0) {
      $("#output").append("<li>ping-pong</li>");
    }
    else if (i%5 === 0) {
      $("#output").append("<li>pong</li>");
    }
    else if (i%3 === 0) {
      $("#output").append("<li>ping</li>");
    }
    else {
      $("#output").append("<li>"+i+"</li>");
    }
  }
}

//User Interface
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#number").val();
    var result = pingPong(userNumber);
    $("#output").hide();
    $("#output").append(result);
    $("#output").slideDown();
  });
});
