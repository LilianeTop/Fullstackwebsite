import React from 'react';


const Photo = (props) => {

    const { photo } = props

    return (

        //FIXME: how to show description?
        <figure >
            <img className='photo'  src={photo.imagePath} alt={""}/>
            <br />
            <figcaption>
                {photo.description}
            </figcaption>

        </figure>
)
}
export default Photo;