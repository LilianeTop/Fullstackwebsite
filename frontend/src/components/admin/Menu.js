import './Admin.css';
import React, {Component} from "react";
// import { LinkContainer  } from "react-router-bootstrap";
// import { Route } from "react-router-dom";
import UploadPhoto from "./UploadPhoto";


export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.renderUploadPhotoForm = this.renderUploadPhotoForm.bind(this);


    }

    renderUploadPhotoForm() {
            return (
                <UploadPhoto />
            );


    }


    render(){
        return(
            <main>
                <div className="koptekst">
                    <h1>Els, wat wil je doen?</h1>
                </div>
                <form className="formulier">
                    <h2 >Ik wil een foto: </h2>
                    <div className="form-check-inline">
                        {/*FIXME: how to use the button as link to the right component/page?*/}
                        <button className='knop' onClick={this.renderUploadPhotoForm}>Uploaden</button>
                        <a href="./ChangePhoto"><button className='knop'>Wijzigen</button></a>
                        <a href="./DeletePhoto"><button  className='knop'>Verwijderen</button></a>

                    </div>
                    <hr />
                    <h3 >Ik wil een blogpost: </h3>
                    <div className="form-check-inline">
                        <button type='submit' className='knop'>Uploaden</button>
                        <button type='submit' className='knop'>Wijzigen</button>
                        <button type='submit' className='knop'>Verwijderen</button>
                    </div>
                </form>
            </main>
        )
    }

}
