//not currently functional!!!

var quote = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";

$(function(){
    $.getJson(quote, function(a) {
  $("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")};
 )};
    
