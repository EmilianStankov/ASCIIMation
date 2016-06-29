$(document).ready(function() {
  var name_data = $(".animation_entry.selected").attr("data-title");
  var frames = [];
  $.ajax({
    url: '../php/handle_requests.php',
    data: {action: 'get', name: name_data},
    type: 'post',
    success: function(output) {
      frames = JSON.parse(output);
      $("#animation_window #play").click(play);

      $("#animation_window #edit").click(function() {
        edit(name_data, frames)
      });
    }
  });

  function play_frame(frames, number) {
    $("div#player").html(frames[number]);
  }

  function play() {
    var speed = $("input#speed").val();
    var n = 0;
    for(var i = 0; i < frames.length; i++) {
      setTimeout(function() {
        play_frame(frames, n);
        n++;
      }, i * speed);
    }
  }

  function edit(name, frames) {
    window.name = name;
    window.frames = frames;
    window.editing = true;
    $("#content").load("../html/editor.html");
  }

  $("#noise").css('top', $("#player").offset().top);
  $("#noise").css('left', $("#player").offset().left);
});
