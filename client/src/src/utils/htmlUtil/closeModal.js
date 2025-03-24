
export const closeModal = (id)=>{
  const element = document.getElementById(id);
  element.style.display='none';
  return element;
}