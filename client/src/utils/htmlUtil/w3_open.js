
  export function w3_open() {
    const mySidebar = document.getElementById("mySidebar");
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
