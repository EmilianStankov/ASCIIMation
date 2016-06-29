$(document).ready(function() {
  $("button#new").click(function() {
    window.name = "";
    window.frames = [];
    window.editing = false;
    $("#content").load("../html/editor.html");
  });
  $("button#browse").click(function() {
    $("#content").load("../html/browse.html");
  });
});
