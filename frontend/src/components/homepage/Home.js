import "./Home.css";
import ArtPiece from "./ArtPiece";
import List from "./List";

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
