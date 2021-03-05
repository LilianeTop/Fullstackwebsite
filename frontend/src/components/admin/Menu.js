import './Admin.css';
import React, {Component} from "react";
import UploadPhoto from "./UploadPhoto";
import ChangePhoto from "./ChangePhoto";
import DeletePhoto from "./DeletePhoto";
import {connect} from "react-redux";
import {showAction} from "../../actions/showAction";


class Menu extends Component {
    constructor(props) {
        super(props)
        this.renderUploadPhotoForm = this.renderUploadPhotoForm.bind(this)
        this.renderChangePhotoForm = this.renderChangePhotoForm.bind(this)
        this.renderDeletePhotoForm = this.renderDeletePhotoForm(this)
    }

    renderUploadPhotoForm() {
        return (
            <UploadPhoto/>
        );
    }

    renderChangePhotoForm() {
        return (
            <ChangePhoto/>
        );
    }

    renderDeletePhotoForm() {
        return (
            <DeletePhoto/>
        );
    }

    render() {

        return showAction ? (
            <main>
                <div className="koptekst">
                    <h1>Els, wat wil je doen?</h1>
                </div>
                <form className="formulier">
                    <h2>Ik wil een foto: </h2>
                    <div className="form-check-inline">
                        {/*FIXME: how to use the button as link to the right component/page?*/}
                        <button className='knop' onClick={this.renderUploadPhotoForm}>Uploaden</button>
                        <button className='knop' onClick={this.renderChangePhotoForm}>Wijzigen</button>
                        <button className='knop' onClick={this.renderDeletePhotoForm}>Verwijderen</button>

                    </div>
                    <hr/>
                    <h3>Ik wil een blogpost: </h3>
                    <div className="form-check-inline">
                        <button type='submit' className='knop'>Uploaden</button>
                        <button type='submit' className='knop'>Wijzigen</button>
                        <button type='submit' className='knop'>Verwijderen</button>
                    </div>
                </form>
            </main>
        ) : null;
    }

}
const mapStateToProps = (state) => ({
    show: state.show
});

const mapDispatchToProps = (dispatch) => ({
        onClick: () => dispatch({
            type: 'SHOW', payload: true
        })
    });

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
