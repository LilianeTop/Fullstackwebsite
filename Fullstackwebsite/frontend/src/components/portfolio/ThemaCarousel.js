import {Carousel} from 'react-bootstrap';
import React, {useEffect, useState} from "react";
import Photo from "./Photo";
import "./ThemaCarousel.css";

const initialState = {
    isLoading: true,
    photos: []
}
const ThemaCarousel = () => {

    const [data, setData] = useState(initialState)
    const getData = async () => {
        const response = await fetch('/api/showPhoto');
        const body = await response.json()
        setData({photos: body, isLoading: false})
    }

    useEffect(() => {
            getData()},
        [])

    return (

        <Carousel className='photos'>
            <Carousel.Item >
                {data.photos.map(photo =>
                    // <Photo key={photo.id} photo={photo.imagePath} alt={""}/>
                    <Photo key={photo.id} photo={photo.imagePath} />
                )}
            </Carousel.Item>
        </Carousel>

);

}


export default ThemaCarousel;
