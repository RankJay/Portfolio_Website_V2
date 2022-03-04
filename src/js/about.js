window.onload = function() {

  var pageTitle = document.title;
  var attentionMessage1 = 'Awee...Come Back!';
  var attentionMessage2 = 'Psssss....';
  var blinkEvent = null;

  document.oncontextmenu = new Function("return false;")
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.onkeydown = function (e) {
    if (e.keyCode == 123) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
      alert("Just try being original for once!");
      return false;
    }
  }

  var dayMapper = {"0": "Sunday", "1": "Monday", "2": "Tuesday", "3":"Wednesday", "4": "Thursday", "5": "Friday", "6": "Saturday"}
  var MonthMapper = {"1": "January", "2": "February", "3": "March", "4": "April", "5":"May", "6": "June", "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December"};
  var today = new Date();
  var timeInHour = today.getHours();
  var timeInMinutes = today.getMinutes();
  var Day = today.getDay();

  if (timeInHour >= 19 || timeInHour < 5) {
      var HREF = document.getElementById('href');
      HREF.style["color"] = "#888888";
      // var bodyNightTheme = document.getElementById('bodyNightTheme');
      // var Showcase = document.getElementById('Showcase');
      // var News = document.getElementById('News');
      // bodyNightTheme.style["background-color"] = "#0F0F13";
      // Showcase.style["background-color"] = "#1e1e26";
      // News.style["background-color"] = "#1e1e26";
      // document.querySelector('meta[itemprop="image"]').setAttribute(content="");
      document.documentElement.style.setProperty('--theme-responsive-color', 'rgba(255, 255, 255, 0.05)');
      document.documentElement.style.setProperty('--theme-extra-color', '#16161c');
      document.documentElement.style.setProperty('--theme-day-night-background', '#0F0F13');
      document.documentElement.style.setProperty('--theme-day-night-foreground', '#ffffff');
      document.documentElement.style.setProperty('--theme-day-night-substitute', '#333333');
      document.documentElement.style.setProperty('--theme-day-night-filter', 'invert(100%) sepia(100%) saturate(0%) hue-rotate(126deg) brightness(105%) contrast(104%)');
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

// async function blurNavBar() {
//     var NavBar = document.getElementById('NavBar');
//     NavBar.style["backdrop-filter"] = "blur(75px)";
//     NavBar.style["height"] = "calc(var(--theme-responsive-size)*1.75)";
//     await new Promise(r => setTimeout(r, 500));
//     NavBar.style["backdrop-filter"] = "blur(0px)";
//     //NavBar.style["height"] = "alc(var(--theme-responsive-size)*2.25)";
// }