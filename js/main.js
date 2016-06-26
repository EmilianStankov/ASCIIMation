$(document).ready(function() {
  $("button#new").click(function() {
    $("#content").load("../html/editor.html");
  });
  $("button#browse").click(function() {
    $("#content").load("../html/browse.html");
  });
});
