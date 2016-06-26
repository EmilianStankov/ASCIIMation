$(document).ready(function() {
  animation_frames = [];
  current_frame = 0;
  $("#error").show();
  $("#error").text("Current frame: " + (current_frame+1));
  bind_events();
  function bind_events() {
    $("button#add_frame").click(add_frame);
    $("button#previous_frame").click(previous_frame);
    $("button#next_frame").click(next_frame);
    $("button#delete_frame").click(delete_frame);
    $("button#save").click(save);
  }

  function add_frame() {
    save_frame();
    $("#frame").val("");
    current_frame = animation_frames.length;
    $("#error").text("Current frame: " + (current_frame+1));
    $("#error").css("color", "#7DE82B");
  }

  function previous_frame() {
    save_frame();
    if(current_frame > 0) {
      current_frame--;
      $("#frame").val(animation_frames[current_frame]);
      $("#error").text("Current frame: " + (current_frame+1));
      $("#error").css("color", "#7DE82B");
    }
  }

  function next_frame() {
    save_frame();
    current_frame++;
    $("#frame").val(animation_frames[current_frame]);
    $("#error").text("Current frame: " + (current_frame+1));
    $("#error").css("color", "#7DE82B");
  }

  function delete_frame() {
    animation_frames.splice(current_frame, 1);
    $("#frame").val(animation_frames[current_frame]);
  }

  function save_frame() {
    animation_frames[current_frame] = $("#frame").val().split('\n').join('<br>').split(' ').join('&nbsp;');
  }

  function save() {
    save_frame();
    var frames_data = animation_frames.join("~#frame#~");
    var name_data = $("#name").val();
    if(name_data.length > 0) {
      $.ajax({
        url: '../php/handle_requests.php',
        data: {action: 'new', name: name_data, frames: frames_data},
        type: 'post',
        success: function(output) {
          $("#error").text("Saved successfully!");
          $("#error").css("color", "#7DE82B");
        }
      });
    } else {
      $("#error").text("Name must be at least 3 characters!");
      $("#error").css("color", "red");
    }
  }
});
