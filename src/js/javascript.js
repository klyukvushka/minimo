function cutText(text, number){
  var cuted = text.slice(0,number);
  return cuted + "...";
}

$(document).ready(function() {
    var lettersToCut = 140;
    var contentWrapper = $('.news-content__discription');
    var contentText = contentWrapper.text();
    contentWrapper.text(cutText(contentText, lettersToCut));
    contentWrapper.append("<a href='#'>Read more</a>");
  });



