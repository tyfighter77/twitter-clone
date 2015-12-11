$(document).ready(function() {

  $('#char-count, #tweet-submit').css("display", "none");

  $('.tweet-compose').on('click', function() {
    $(this).css("height", "5em");
    $('#char-count, #tweet-submit').show("fast");
  });

  $('.tweet-compose').keyup(function() {
    var max = 140;
    var numChars = ($(this).val().length);
    var $char = $('#char-count');
    $char.val(max - numChars);
    $char.text(max - numChars);
    if ($char.val() < 10) {
      $char.css("color", "red");
    } else {
      $char.css("color", "black");
    }
    if (numChars > max) {
      $('#tweet-submit').prop("disabled", true);
    } else {
      $('#tweet-submit').prop("disabled", false);
    }
  });

  $('#tweet-submit').on('click', function() {
    $('#stream').prepend(
      '<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Your Name Here </strong><span class="username">@yournamehere</span><p class="tweet-text">' + $('.tweet-compose').val() + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div>'
    );
    $('.tweet-compose').val("");
  });

  $('.tweet-actions').css("display", "none");
  $('.tweet').hover(function() {
    $('.tweet-actions', this).css("display", "block");
  }, function() {
    $('.tweet-actions', this).css("display", "none");
  });

  $('.stats').css("display", "none");
  $('.tweet').click(function() {
      $('.stats', this).toggle();
  });


});
