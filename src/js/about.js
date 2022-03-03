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
        var Cookie = document.getElementById('Cookie');
        var CookieHeading = document.getElementById('CookieHeading');
        var CookieDes = document.getElementById('CookieDes');
        bodyNightTheme.style["background-color"] = "#020202";
        SVGNightTheme.style["background-color"] = "#101010";
        SVGNightTheme.style["box-shadow"] = "0px 0px 1000px #000000";
        HeadingNightTheme.style["color"] = "#ffffff";
        DescriptionNightTheme.style["color"] = "#404040";
        Cookie.style['background-color'] = "#101010";
        CookieHeading.style['color'] = "#f4f7f8";
        CookieDes.style['color'] = "#797979";
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

async function cookieAccepted() {
  var Cookie = document.getElementById('Footer');
  var Footer = document.getElementById('Footer');
  Cookie.style['-webkit-animation'] = "slide-out-bottom 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
  Cookie.style['animation'] = "slide-out-bottom 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
  await new Promise(r => setTimeout(r, 500));
  Footer.style['display'] = "none";
}