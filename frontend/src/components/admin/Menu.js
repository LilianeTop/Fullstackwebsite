import './Admin.css';
import React, {Component} from "react";
import UploadPhoto from "./UploadPhoto";
import ChangePhoto from "./ChangePhoto";
import DeletePhoto from "./DeletePhoto";


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showUploadPhotoForm: false,
            showChangePhotoForm: false,
            showDeletePhotoForm: false
        }
        this.showUploadPhoto = this.showUploadPhoto.bind(this)
        this.showChangePhoto = this.showChangePhoto.bind(this)
        this.showDeletePhoto = this.showDeletePhoto.bind(this)
    }

    showUploadPhoto() {
        this.setState({
            showUploadPhotoForm: true
        })
    }

    showChangePhoto() {
        this.setState({
            showChangePhotoForm: true
        })
    }

    showDeletePhoto() {
        this.setState({
            showDeletePhotoForm: true
        })
    }

    render() {
        if (this.state.showUploadPhotoForm) {
            return <UploadPhoto/>
        } else if (this.state.showChangePhotoForm) {
            return <ChangePhoto/>
        } else if (this.state.showDeletePhotoForm) {
            return <DeletePhoto/>
        } else
        return (
            <main>
                <div className="koptekst">
                    <h1>Els, wat wil je doen?</h1>
                </div>
                <div className="formulier">
                    <h2>Ik wil een foto: </h2>
                    <div className="form-check-inline">
                        <button className='knop'
                                type='button'
                                onClick={this.showUploadPhoto}
                        >
                            Toevoegen
                        </button>
                        {/*TODO: create form to change photo*/}
                        <button className='knop'
                                type='button'
                                onClick={this.showChangePhoto}
                        >
                            Wijzigen
                        </button>
                        {/*TODO: create form to delete a photo*/}
                        <button className='knop'
                                type='button'
                                onClick={this.showDeletePhoto}
                        >
                            Verwijderen
                        </button>

                    </div>
                    <hr/>
                    <h3>Ik wil een blogpost: </h3>
                    <div className="form-check-inline">
                        <button type='submit' className='knop'>Toevoegen</button>
                        <button type='submit' className='knop'>Wijzigen</button>
                        <button type='submit' className='knop'>Verwijderen</button>
                    </div>
                </div>
            </main>
        );
    }

}

export default Menu;