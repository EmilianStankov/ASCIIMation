$(document).ready(function() {
  animation_frames = [];
  current_frame = 0;
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
    current_frame++;
  }

  function previous_frame() {
    save_frame();
    current_frame--;
    $("#frame").val(animation_frames[current_frame]);
  }

  function next_frame() {
    save_frame();
    current_frame++;
    $("#frame").val(animation_frames[current_frame]);
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
    $.ajax({
      url: '../php/handle_requests.php',
      data: {action: 'new', name: name_data, frames: frames_data},
      type: 'post',
      success: function(output) {
        //$('body').append(frames_data);
      }
    });
  }
});
