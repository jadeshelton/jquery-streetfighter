$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })

  .mouseleave(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-action').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1170px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left','590px');
      }
      );
  })
  .mouseup(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })
  
  function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  };

  $(document).keydown(function(event) {
    var x = event.keyCode;
    if (x == 88) {
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }
})
  .keyup(function(event) {
    var x = event.keyCode;
    if (x == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
});