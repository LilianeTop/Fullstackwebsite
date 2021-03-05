import './Admin.css';
import React, {Component} from "react";
import UploadPhoto from "./UploadPhoto";
import ChangePhoto from "./ChangePhoto";
import DeletePhoto from "./DeletePhoto";
import {Link} from "react-router-dom";

// import {connect} from "react-redux";

//FIXME: this should ONLY be accessible when logged in
class Menu extends Component {
    constructor(props) {
        super(props)
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
                        <Link to='/UploadPhoto'><button className='knop'>Uploaden</button></Link>
                        {/*TODO: create form to change photo*/}
                        <Link to='/ChangePhoto'><button className='knop'>Wijzigen</button></Link>
                        {/*TODO: create form to delete a photo*/}
                        <Link to='/DeletePhoto'><button className='knop'>Verwijderen</button></Link>

                    </div>
                    <hr/>
                    <h3>Ik wil een blogpost: </h3>
                    <div className="form-check-inline">
                        <button type='submit' className='knop'>Uploaden</button>
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