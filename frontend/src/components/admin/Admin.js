import "./Admin.css";
import UploadPhoto from "./UploadPhoto";
import ChangePhoto from "./ChangePhoto";
import DeletePhoto from "./DeletePhoto";
import LoginScreen from "./LoginScreen";
import Menu from "./Menu";
import {Route} from "react-router-dom";


const Admin = () => {
    return (
        <div>
            <LoginScreen />
            <br />
            <br />
            {/*<Menu />*/}
            <br />
            <br />
            <UploadPhoto />
            {/*<ChangePhoto />*/}
            {/*<DeletePhoto />*/}
        </div>

    )
}

export default Admin;