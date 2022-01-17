function changeTab(evt, content, active) {
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
  tablinks = document.getElementsByClassName("tab-title");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  evt.target.className += " active";
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(content).style.display = "block";
  document.getElementById(active).setAttribute('style', 'display: flex !important');
  
}

$('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })

function changeList(evt, list, line){
    var i, clist, cline, clinewrapper, cline;

    clist = document.getElementsByClassName(list);
    for (i = 0; i < clist.length; i++){
        clist[i].className = clist[i].className.replace(" sd-l-active", "");
    }

    evt.target.className += " sd-l-active";

    cline = document.getElementsByClassName(line);
    for (i = 0; i < cline.length; i++){
        cline[i].className = cline[i].className.replace(" selected-list", "");
    }

    clinewrapper = evt.target.closest('.col');

    cline=clinewrapper.querySelector("."+line);

    console.log(cline.className);

    cline.className += " selected-list";

}