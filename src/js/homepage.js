window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage1 = 'Awee...Come Back!';
    var attentionMessage2 = 'Psssss....';
    var blinkEvent = null;
    var today = new Date();
    var timeInHour = today.getHours();
    console.log(timeInHour)

    if (timeInHour >= 219 || timeInHour < 5) {
        var HREF = document.getElementById('href');
        HREF.style["color"] = "#888888";
        var bodyNightTheme = document.getElementById('bodyNightTheme');
        var Showcase = document.getElementById('Showcase');
        var News = document.getElementById('News');
        bodyNightTheme.style["background-color"] = "#0F0F13";
        Showcase.style["background-color"] = "#1e1e26";
        News.style["background-color"] = "#1e1e26";
        document.documentElement.style.setProperty('--theme-day-border', '0.5px solid #16161c');
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

async function blurNavBar() {
    var NavBar = document.getElementById('NavBar');
    NavBar.style["backdrop-filter"] = "blur(75px)";
    NavBar.style["height"] = "alc(var(--theme-responsive-size)*1.75)";
    await new Promise(r => setTimeout(r, 500));
    NavBar.style["backdrop-filter"] = "blur(0px)";
    //NavBar.style["height"] = "alc(var(--theme-responsive-size)*2.25)";
}