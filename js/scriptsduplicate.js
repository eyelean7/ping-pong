//Back-End
function pingPong(userNumber) {
  //loop through each number
  for (var i=1; i<=userNumber; i++) {
    // determine which are divisible by 3, 5, and both
    if (i%15 === 0) {
      $("#output").append("<li><span class='word'>ping-pong</span></li>");
    }
    else if (i%5 === 0) {
      $("#output").append("<li><span class='word'>pong</span></li>");
    }
    else if (i%3 === 0) {
      $("#output").append("<li><span class='word'>ping</span></li>");
    }
    else {
      $("#output").append("<li>"+i+"</li>");
    }
  }//end loop
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
  $("ul").click(function() {
    $(".word").animate({
      marginLeft: "+=50px",
    }, 1000);
    $(".word").animate({
      marginLeft: "-=50px",
    }, 1000);
  });
});
