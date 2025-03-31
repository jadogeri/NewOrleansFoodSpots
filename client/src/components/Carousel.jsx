import React from 'react'
import Slides from './Slides'

const Carousel = () => {
  return (
    <div className="slider">
        <div className="callbacks_container">
            <ul className="rslides" id="slider">
                <Slides src={"assets/images/1.jpg"} />
                <Slides src={"assets/images/2.jpg"} />
                <Slides src={"assets/images/3.jpg"} />
                <Slides src={"assets/images/4.jpg"} />
            </ul>
        </div>
    </div>
  )
}

export default Carousel