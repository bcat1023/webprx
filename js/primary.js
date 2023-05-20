var fail = 0

function idcheck() {
  if(fail === 0) {
    document.getElementById('idcheck').innerText = ' ONLINE '
    document.getElementById('idcheck').style.color = 'green';
  } else {
    console.log("Node Server timed out")
  }
}

setTimeout(() => {
  if(document.getElementById('idcheck').innerText === ' ONLINE ') {
    console.log('Node Server OKAY')
  }
  if(document.getElementById('idcheck').innerText === ' CHECKING... ') {
    document.getElementById('idcheck').innerText = ' OFFLINE ';
    document.getElementById('idcheck').style.color = 'red';
    console.log('Node Server NOT OKAY')
  }
}, 4000);


function gload() {
  var gloadvar = "False";
  if (gloadvar == "True") {
    var iframe = document.getElementById('gframe');
    iframe.src = iframe.src;
  }

  if (gloadvar == "False") {
    console.log("noload")
    gloadvar = "True"
  }
}

var loader = document.getElementById("loader")
function loafhide() {
  loader.style.opacity = "0";
  loader.style.height = "0%";
  console.log("Loaf hidden")
}

function loafshow() {
  loader.style.opacity = "1";
  loader.style.height = "";
  console.log("Loaf shown")
  if(document.getElementById('gframe').contentWindow['background'] = 1) {
    return
  } else {
    top.document.body.style.backgroundImage = 'url(/img/loader.gif)'
    var background = 1
  }
}

function borger() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
 
function prxmox(toggle) {
  var frame = document.getElementById('prx')
  if(toggle == 1) {
    frame.src = "https://replit.com/@YodaCode/fx-us-3?lite=1&outputonly=1#.replit";
  } else {
    frame.src = "about:blank"
  }
}

function openPage(evt, tab) {
  loafshow()
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  //evt.currentTarget.className += " active";
  document.getElementById("loader").style.zIndex = "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
  loafhide()
}

function backstop(toggle) {
  if(toggle == 1) {
    top.document.body.style.backgroundImage = 'url(/img/loader.gif)'
    var background = 1
  } else {
    top.document.body.style.backgroundImage = ''
    var background = `0`
  }
}

var g = document.getElementById('gframe').clientHeight
var n = document.getElementById('navbar').clientHeight

function resizeGFrame() {g = g-n;console.log(g + " " + n)};
window.onresize = resizeGFrame;