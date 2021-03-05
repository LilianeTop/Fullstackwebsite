import "./Admin.css";
import LoginScreen from "./LoginScreen";
import Menu from "./Menu";

const Admin = () => {
    return (
        <div>
            <LoginScreen />
            <br />
            <br />
            <Menu />
            <br />
            <br />
            {/*<UploadPhoto />*/}
            {/*<ChangePhoto />*/}
            {/*<DeletePhoto />*/}
        </div>

    )
}

export default Admin;