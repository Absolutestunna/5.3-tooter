var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');

var hello = require('../app/scripts/index').hello;
var funcCheck = require('../app/scripts/index').hello;

console.log(hello);

describe('hello', function(){
  it('should say hello', function(){
    expect(hello()).to.be.equal('hello world');
  });
});


describe('create post form', function(){
  it('should trigger a create:post event on the document with the title and body', function(){
    $(document).on('create:post', function(event, obj){
      // var obj = {Title: "hi", body:"boyyeeeeee"}
      expect(obj).to.have.property("title");
      expect(obj).to.have.property("body");
      done();


    })
    // $('.input-class-name').val("Title");
    // $('.submit').('click', function(){});

  });

});
