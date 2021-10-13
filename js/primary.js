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

function loafhide() {
  document.getElementById("loader").style.opacity = "0";
  console.log("Loaf hidden")
}

function loafshow() {
  document.getElementById("loader").style.opacity = "1";
  console.log("Loaf shown")
}

function borger() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
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
  evt.currentTarget.className += " active";
  document.getElementById("loader").style.zIndex = "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
  loafhide()
}
//document.getElementById("indexPage").click(); what even is this for? i forgot
