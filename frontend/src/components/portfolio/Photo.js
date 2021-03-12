import React from 'react';
import "./Photo.css";

function Photo (props) {

    return (
        <figure>
            <img className="photo" src={props.photo.selectedFile} alt={props.photo.description}/>
            <figcaption>
                {/*Text is shown so how to get the description from db?*/}
                 {props.photo.description}
            </figcaption>
        </figure>

    )
}

export default Photo;