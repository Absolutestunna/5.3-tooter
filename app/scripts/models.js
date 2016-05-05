var $ = require('jquery');

function Post(){

}

Post.fetch = function(){
  return new $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts').then(function(posts){
    $(document).trigger('posts:fetched', [posts]);
    return posts;
  });
};

global.Post = Post;
// 
// Post.fetch = function(){
//   return new $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts').then(function(posts){
//     $(document).trigger('create:posts', [posts]);
//     return posts;
//   });
// };
