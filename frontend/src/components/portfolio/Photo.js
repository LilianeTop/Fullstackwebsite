import React from 'react';


const Photo = (props) => {

    const { photo } = props
    console.log(photo)

    return (

        //FIXME: how to show description?
        <figure >
            <h3>{photo.description}</h3>
            <img className='photo'  src={photo.imagePath} alt={""}/>
            <br />
            <figcaption>
                {photo.description}
            </figcaption>

        </figure>
)
}
export default Photo;