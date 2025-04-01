
export const toggleHistoryTab = (evt, tab) => {
    let i;
    let x = document.getElementsByClassName("history");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    let activebtn = document.getElementsByClassName("historybtn");
    for (i = 0; i < x.length; i++) {
      activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " w3-dark-grey";
  
}


