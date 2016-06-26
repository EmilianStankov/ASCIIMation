$(document).ready(function() {
  var name_data = $(".animation_entry.selected").attr("data-title");
  var frames = [];
  $.ajax({
    url: '../php/handle_requests.php',
    data: {action: 'get', name: name_data},
    type: 'post',
    success: function(output) {
      frames = JSON.parse(output);
      $("#animation_window #play").click(function() {
        var speed = $("#speed").val();
        var n = 0;
        for(var i = 0; i < frames.length; i++) {
          setTimeout(function() {
            play_frame(frames, n);
            n++;
          }, i * speed);
        }
      });
    }
  });

  function play_frame(frames, number) {
    $("body").append(number);
    $("#player").html(frames[number]);
  }
});