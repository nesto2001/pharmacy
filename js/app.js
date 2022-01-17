function changeTab(content, active) {
  // Declare all variables
  var i, tabcontent, tablinks, areactive;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  areactive = document.getElementsByClassName("active-line");
  for (i = 0; i < areactive.length; i++){
      areactive[i].setAttribute('style', 'display: none !important');
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(content).style.display = "block";
  document.getElementById(active).setAttribute('style', 'display: flex !important');
}

