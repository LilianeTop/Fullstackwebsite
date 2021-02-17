import "./Home.css";
import ArtPiece from "./ArtPiece";
import List from "../portfolio/List";

const Home = () => {
  return (
    <div>
      <ArtPiece />
      <p className="thema">Thema's</p>
      <List />

    </div>

  );
}



export default Home;
