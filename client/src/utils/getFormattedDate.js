
export const getFormattedDate = () => {
  
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'}).replace(/ /g, '-');

    return formattedDate;
  
}
