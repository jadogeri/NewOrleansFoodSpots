
  export function w3_open(id) {
    console.log(id)
    const element = document.getElementById(id);
    console.log("element == ", element)
    if (element.style.display === 'block') {
      element.style.display = 'none';
            element.style.display = 'none';

    } else {
      element.style.display = 'block';
    }
  }


