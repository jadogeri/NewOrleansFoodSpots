export const getPhotos = (photos) => {
    console.log(photos)
    const photosList = []
    photos?.forEach((photo)=>{
        photosList.push({
          original : photo,
          thumbnail : photo
        })
      })

  return  photosList
}



