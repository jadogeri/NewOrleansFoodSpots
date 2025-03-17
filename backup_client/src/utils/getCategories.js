
export const getCategories = (categories) => {
    let categoriesList = "";
    categories?.forEach((category, index)=>{
        if(index !== categories.length - 1){

            categoriesList = categoriesList + category.title + ", ";

        }else{

            categoriesList = categoriesList +  category.title;

        }      

    })

    return categoriesList;
  
}

