

// Used to toggle the menu on small screens when clicking on the menu button
export function myFunction() {
  let x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
let modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



  // Used to toggle the menu on small screens when clicking on the menu button
  export function block() {
    document.getElementById('ticketModal').style.display='block'

  }

  export function none() {
    document.getElementById('ticketModal').style.display='none'

  }