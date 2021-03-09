import React, {useState, useEffect} from 'react';

function Photo(props) {

    // useEffect(() => {
    //     fetchPhotos();
    // }, []);

    // const [photo, setphoto] = useState({});

    // const fetchPhoto = async () => {
    // };

    // return (
    //     <div>
    //         <figure>
    //             <img className='photo' key={props.idArtpiece} src={props.selectedFile} alt={props.description}/>
    //             <br/>
    //         </figure>
    //         <figcaption>
    //             <h1>Text</h1>
    //             {/*Text is shown so how to get the description from db?*/}
    //             <h1>{props.description}</h1>
    //         </figcaption>
    //     </div>
    // )
// }


// const Photo = (props) => {
//
    return (

        //FIXME: how to show description? and how to display underneath photo?
        //FIXME how to show photo
        <div>
            <figure>
                <img className='photo' key={props.idArtpiece} src={props.selectedFile} alt={props.description}/>
                <br/>
            </figure>
            <figcaption>
                {/*Text is shown so how to get the description from db?*/}
                <h3>Beschrijving van foto is: {props.description}</h3>
            </figcaption>
        </div>
    )
}
export default Photo;