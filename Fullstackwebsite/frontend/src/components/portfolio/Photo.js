import React from 'react';


const Photo = (props) => {

    const { photo } = props
    console.log(photo)

    return (
        <div >
            {/*<h3>{photo.description}</h3>*/}
            <img className='photo' key={photo.id} src={photo} alt={""}/>
            <br />

        </div>
)
}
export default Photo;