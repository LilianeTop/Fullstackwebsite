import "./Admin.css";
import PhotoForm from "./PhotoForm";
import LoginScherm from "./LoginScherm";
import YoutubeForm from "./YoutubeForm";
import RadioButtons from "./RadioButtons";
import ArtpieceUploadForm from "./ArtpieceUploadForm";


const Admin = () => {
    return (
        <div>
            <LoginScherm />

            <PhotoForm />
            {/*<ArtpieceUploadForm />*/}

        </div>

    )
}

export default Admin;