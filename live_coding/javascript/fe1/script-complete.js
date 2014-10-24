var resourceUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
var fakeResultFileName = 'result.json';
var parameters = {
  userId : 608161934,
  numTweets: 10
};
var tweetArray = [];

function getUserIdParam(uid) {
  if (uid) {
    return '?user_id=' + uid;
  }
};

function formatDate(date) {
  return new Date(date).toUTCString();
}

function setValuesForObject(values) {
  var obj = {};

  if (values) {
    obj.username = values.user.name;
    obj.profilePic = values.user.profile_image_url;
    obj.date = formatDate(values.created_at);
    obj.tweet = values.text;
  }

  tweetArray.push(obj);
}

function parseTweets(data) {
  $.each(data, function (key, val) {
    constructHtml(setValuesForObject(val));
  });
}

function constructHtml(obj) {
  console.log(tweetArray);
  $.each(tweetArray, function (key, val) {
    $("ul").append(
      '<li class="tweet-container"><img src="' + val.profilePic + '"><h2 class="username">' + val.username + '</h2>' +
      '<p class="date"><em>' + val.date + '</em></p>' +
      '<h3 class="tweet-body">' + val.tweet + '</h3>' +
      '</li>'
    );
  });
}

function getTweets(url, id) {
  $.get(getUserIdParam(id), function(data) {
    parseTweets(data);
  });
};

getTweets(fakeResultFileName, parameters.userId);

$("ul").delegate('li', 'click', function removeTweet() {
  $("li").each(function () {
    $(this).removeClass('selected-tweet');
  });

  $(this).addClass('selected-tweet');
});

$("#load-more").click(function loadMoreTweets() {
  getTweets(fakeResultFileName, parameters.userId);
});
