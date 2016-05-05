 var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();
});

function hello(){
  return 'hello world';
}

module.exports = {"hello": hello};





var check = $(function(){
  var view = new PostView();

  $(document).on('create:post', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();
});

module.exports = {"func": check};
