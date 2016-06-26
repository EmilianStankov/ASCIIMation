$(document).ready(function() {
  animations = $.ajax({
    url: '../php/handle_requests.php',
    data: {action: 'getAll'},
    dataType: 'json',
    type: 'post',
    success: function(output) {
      for(var i = 0; i < output.length; i++) {
        $("#animations_list").append("<div class='animation_entry' data-title='"+output[i]+"'>"+output[i]+"</div>");
      }
      $(".animation_entry").click(function() {
        $(".animation_entry").removeClass('selected');
        $(this).addClass('selected');
        $("#animation_window").load("../html/player.html");
      });
    }
  });
});
