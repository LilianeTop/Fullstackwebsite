import {Carousel} from 'react-bootstrap';
import React, {Component, useState, useEffect} from "react";
import Photo from "./Photo";
import "./ThemaCarousel.css";
import axios from "axios";


export default class ThemaCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoList: [
                {
                    idArtpiece: 0,
                    specials: "",
                    description: "",
                    selectedFile: "",
                    themes: [],
                    colors: []

                }
            ]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/showPhoto")
            .then(response => {
                const photos = response.data;
                this.setState({
                    photoList: photos})
            })
    }


    render() {
        return (
            //Warning: Each child in a list should have a unique "key" prop.
            //solved this by adding within the Carousel.Item tag the key={photo.idArtPiece}
            <Carousel className='photos'>
                {this.state.photoList.map(photo =>
                        <Carousel.Item key={photo.idArtpiece}>
                            <Photo photo={photo} />
                        </Carousel.Item>
                )};
            </Carousel>

        );

    }
}





