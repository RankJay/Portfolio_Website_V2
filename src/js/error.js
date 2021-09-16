window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage1 = 'Awee...Come Back!';
    var attentionMessage2 = 'Psssss....';
    var blinkEvent = null;
  
    document.addEventListener('visibilitychange', function(e) {
      var isPageActive = !document.hidden;
  
      if(!isPageActive){
        blink();
      }else {
        document.title = pageTitle;
        clearInterval(blinkEvent);
      }
    });
  
    function blink(){
      blinkEvent = setInterval(function() {
        if(document.title === attentionMessage1){
          document.title = attentionMessage2;
        }else {
          document.title = attentionMessage1;
        }
      }, 100);
    }
};