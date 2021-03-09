import './Admin.css';
import React, {Component} from "react";
import UploadPhoto from "./UploadPhoto";
import ChangePhoto from "./ChangePhoto";
import DeletePhoto from "./DeletePhoto";
import {Link, Redirect, Route} from "react-router-dom";


//FIXME: this should ONLY be accessible when logged in
class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
        this.showPhotoForm = this.showPhotoForm.bind(this)
    }
    showPhotoForm(){
    return <UploadPhoto />
    }
    render() {
            return (
                <main>
                    <div className="koptekst">
                        <h1>Els, wat wil je doen?</h1>
                    </div>
                    <div className="formulier">
                        <h2>Ik wil een foto: </h2>
                        <div className="form-check-inline">
                            <button className='knop'
                                    type='submit'
                                    onClick={this.showPhotoForm}>
                                Toevoegen
                        </button>
                        {/*TODO: create form to change photo*/}
                        <Link to='/ChangePhoto'>
                            <button className='knop'>Wijzigen</button>
                        </Link>
                        {/*TODO: create form to delete a photo*/}
                        <Link to='/DeletePhoto'>
                            <button className='knop'>Verwijderen</button>
                        </Link>

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

    // const mapStateToProps = (state) => ({
    //     show: state.show
    // });
    //
    // const mapDispatchToProps = (dispatch) => ({
    //         onClick: () => dispatch({
    //             type: 'SHOW', payload: true
    //         })
    //     });
    //
    // export default connect(mapStateToProps, mapDispatchToProps)(Menu);
    export default Menu;