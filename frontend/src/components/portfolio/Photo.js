import React from 'react';

function Photo(props) {

    return (

        //FIXME: how to show description? and how to display underneath photo?
        //FIXME how to show photo
        //return  (
        //     <figure>
        //     <img key={props.id} src={props.picture} alt={props.alt}/>
        //     <figcaption>{props.alt}</figcaption>
        //     </figure>
        //   );

        <figure>
            <img key={props.id} src={props.selectedFile} alt={props.description}/>
            <figcaption>
                {/*Text is shown so how to get the description from db?*/}
                Beschrijving van foto is: {props.alt}
            </figcaption>
        </figure>

    )
}

export default Photo;