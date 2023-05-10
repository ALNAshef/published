function openfiledialog() {
    document.getElementById('FileUpload').click();
  }


/*------------------------------------------------------------------------
js for changing the font size for accessibility
-------------------------------------------------------------------------*/


function plusfont(){
  var biggerTitles = document.getElementsByClassName('biggerTitle');
  for (var i = 0; i < biggerTitles.length; i++) {
    var biggerTitle = biggerTitles[i];
    biggerTitle.style.fontSize = "3.9rem";
  }

  var titleTexts = document.getElementsByClassName('titleText');
  for (var i = 0; i < titleTexts.length; i++) {
    var titleText = titleTexts[i];
    titleText.style.fontSize = "2.2rem";
    
  }

  var regtexts = document.getElementsByClassName('regtext');
  for (var i = 0; i < regtexts.length; i++) {
    var regtext = regtexts[i];
    regtext.style.fontSize = "1.55rem";
  }

  var mediumTexts = document.getElementsByClassName('mediumText');
  for (var i = 0; i < mediumTexts.length; i++) {
    var mediumText = mediumTexts[i];
    mediumText.style.fontSize = "1.45rem";
  }

  var smallTexts = document.getElementsByClassName('smallText');
  for (var i = 0; i < smallTexts.length; i++) {
    var smallText = smallTexts[i];
    smallText.style.fontSize = "1.35rem";
  }

  var tinyTexts = document.getElementsByClassName('tinyText');
  for (var i = 0; i < tinyTexts.length; i++) {
    var tinyText = tinyTexts[i];
    tinyText.style.fontSize = "1.2rem";
  }


}

function regfont(){
  var biggerTitles = document.getElementsByClassName('biggerTitle');
  for (var i = 0; i < biggerTitles.length; i++) {
    var biggerTitle = biggerTitles[i];
    biggerTitle.style.fontSize = "3.7rem";
  }

  var titleTexts = document.getElementsByClassName('titleText');
  for (var i = 0; i < titleTexts.length; i++) {
    var titleText = titleTexts[i];
    titleText.style.fontSize = "2rem";
    
  }

  var regtexts = document.getElementsByClassName('regtext');
  for (var i = 0; i < regtexts.length; i++) {
    var regtext = regtexts[i];
    regtext.style.fontSize = "1.45rem";
  }

  var mediumTexts = document.getElementsByClassName('mediumText');
  for (var i = 0; i < mediumTexts.length; i++) {
    var mediumText = mediumTexts[i];
    mediumText.style.fontSize = "1.3rem";
  }

  var smallTexts = document.getElementsByClassName('smallText');
  for (var i = 0; i < smallTexts.length; i++) {
    var smallText = smallTexts[i];
    smallText.style.fontSize = "1.2rem";
  }

  var tinyTexts = document.getElementsByClassName('tinyText');
  for (var i = 0; i < tinyTexts.length; i++) {
    var tinyText = tinyTexts[i];
    tinyText.style.fontSize = "0.9rem";
  }


}

function minusfont(){
  var biggerTitles = document.getElementsByClassName('biggerTitle');
  for (var i = 0; i < biggerTitles.length; i++) {
    var biggerTitle = biggerTitles[i];
    biggerTitle.style.fontSize = "3.5rem";
  }

  var titleTexts = document.getElementsByClassName('titleText');
  for (var i = 0; i < titleTexts.length; i++) {
    var titleText = titleTexts[i];
    titleText.style.fontSize = "1.4rem";
  }

  var regtexts = document.getElementsByClassName('regtext');
  for (var i = 0; i < regtexts.length; i++) {
    var regtext = regtexts[i];
    regtext.style.fontSize = "1.3rem";
  }

  var mediumTexts = document.getElementsByClassName('mediumText');
  for (var i = 0; i < mediumTexts.length; i++) {
    var mediumText = mediumTexts[i];
    mediumText.style.fontSize = "1.1rem";
  }

  var smallTexts = document.getElementsByClassName('smallText');
  for (var i = 0; i < smallTexts.length; i++) {
    var smallText = smallTexts[i];
    smallText.style.fontSize = "0.9rem";
  }

  var tinyTexts = document.getElementsByClassName('tinyText');
  for (var i = 0; i < tinyTexts.length; i++) {
    var tinyText = tinyTexts[i];
    tinyText.style.fontSize = "0.8rem";
  }


}

  
/*------------------------------------------------------------------------
js for change logo animation video size
the source code is from https://jsfiddle.net/AndrewL64/6pLua510/46/
-------------------------------------------------------------------------*/

var wmd = window.matchMedia("(max-width: 1200px)");
var wsm = window.matchMedia("(max-width: 800px)");
var wxs = window.matchMedia("(max-width: 600px)");
var logoBgVideo = document.getElementById("logoBgVideo");
var source = document.createElement("source");
  source.id = "videoSource";
  source.setAttribute("type", "video/mp4");
  logoBgVideo.appendChild(source);
  
  if (wxs.matches) {
    source.removeAttribute("src");
    source.setAttribute("src", "/templates/findsuri/images/logo-with-map-xxxs.mp4");
    logoBgVideo.load();
    logoBgVideo.play();
  } else if(wsm.matches){
    source.removeAttribute("src");
    source.setAttribute("src", "/templates/findsuri/images/logo-with-map-xs.mp4");
    logoBgVideo.load();
    logoBgVideo.play();
  }else if(wmd.matches){
    source.removeAttribute("src");
    source.setAttribute("src", "/templates/findsuri/images/logo-with-map-small-upper.mp4");
    logoBgVideo.load();
    logoBgVideo.play(); 
  }
  else {
    source.removeAttribute("src");
    source.setAttribute("src", "/templates/findsuri/images/logo-with-map-lg-upper.mp4");
    logoBgVideo.load();
    logoBgVideo.play();
  }

window.addEventListener("resize", function(){
    var wmd = window.matchMedia("(max-width: 1200px)");
    var wsm = window.matchMedia("(max-width: 800px)");
    var wxs = window.matchMedia("(max-width: 600px)");
    var logoBgVideo = document.getElementById("logoBgVideo");
    var source = document.getElementById("videoSource");
  
  if (wxs.matches) {
    source.removeAttribute("src");
    source.setAttribute("src", "/templates/findsuri/images/logo-with-map-xxxs.mp4");
    logoBgVideo.load();
    logoBgVideo.play();
  } else if(wsm.matches){
    source.removeAttribute("src");
    source.setAttribute("src", "/templates/findsuri/images/logo-with-map-xs.mp4");
    logoBgVideo.load();
    logoBgVideo.play();
  } else if(wmd.matches){
    source.removeAttribute("src");
    source.setAttribute("src", "/templates/findsuri/images/logo-with-map-small-upper.mp4");
    logoBgVideo.load();
    logoBgVideo.play(); 
  }else {
    source.removeAttribute("src");
    source.setAttribute("src", "/templates/findsuri/images/logo-with-map-lg-upper.mp4");
    logoBgVideo.load();
    logoBgVideo.play();
  }
});