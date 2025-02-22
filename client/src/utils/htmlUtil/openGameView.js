export function openGameView(evt, view) {
  
  var i, gamecontent;

    gamecontent = document.getElementsByClassName("gamecontent");
    for (i = 0; i < gamecontent.length; i++) {
      gamecontent[i].style.display = "none";
    }

    document.getElementById(view).style.display = "block";
    evt.currentTarget.className += " active";


  }


