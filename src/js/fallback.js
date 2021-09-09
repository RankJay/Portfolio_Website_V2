window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage1 = 'Awee...Come Back!';
    var attentionMessage2 = 'Psssss....';
    var blinkEvent = null;
    var today = new Date();
    var timeInHour = today.getHours();
    console.log(timeInHour)

    if (timeInHour >= 19 || timeInHour < 5) {
        var bodyNightTheme = document.getElementById('bodyNightTheme');
        var SVGNightTheme = document.getElementById('SVGNightTheme');
        var HeadingNightTheme = document.getElementById('HeadingNightTheme');
        var DescriptionNightTheme = document.getElementById('DescriptionNightTheme');
        bodyNightTheme.style["background-color"] = "#020202";
        SVGNightTheme.style["background-color"] = "#101010";
        SVGNightTheme.style["box-shadow"] = "0px 0px 1000px #000000";
        HeadingNightTheme.style["color"] = "#ffffff";
        DescriptionNightTheme.style["color"] = "#404040";

    }
  
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