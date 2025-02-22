export function closeAllViews() {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("gamecontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

  }


