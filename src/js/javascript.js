$(".news-content__discription").ready(function() {
    var lettersToCut = 140;
    var contentWrapper = $('.news-content__discription');
    var contentText = contentWrapper.text();
    contentText = contentText.substr(0, lettersToCut);
    contentWrapper.text(contentText);
    contentWrapper.append("... <a href='#'>Read more</a>");
  });
