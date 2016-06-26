$.ajax({
  url: '../php/handle_requests.php',
  data: {action: 'new', name: 'sssdad', frames: 'asfasfafasfasfas~#frame#~asfkjakjsfkjasf'},
  type: 'post',
  success: function(output) {
    //$('body').append(output);
  }
});

$.ajax({
  url: '../php/handle_requests.php',
  data: {action: 'edit', name: 'assssdad', frames: 'asfasfafasfasfas~#frame#~asfkjakjsfkjasf'},
  type: 'post',
  success: function(output) {
    //$('body').append(output);
  }
});

$.ajax({
  url: '../php/handle_requests.php',
  data: {action: 'get', name: 'sssdad'},
  type: 'post',
  success: function(output) {
    //$('body').append(output);
  }
});

$.ajax({
  url: '../php/handle_requests.php',
  data: {action: 'getAll'},
  type: 'post',
  success: function(output) {
    //$('body').append(output);
  }
});
