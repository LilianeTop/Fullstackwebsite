import React from 'react';

function Photo (props) {
    console.log("props")

    console.log(props)
    console.log("props.photo")
    console.log(props.photo)

    return (
        <figure>
            <img key={props.id} src={props.photo.selectedFile} alt={props.description}/>
            <figcaption>
                {/*Text is shown so how to get the description from db?*/}
                Beschrijving van foto is: {props.alt}
            </figcaption>
        </figure>

    )
}

export default Photo;