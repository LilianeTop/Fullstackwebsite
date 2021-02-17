import "./ArtPiece.css";
import HomeCarousel from "./HomeCarousel";

//FIXME: not properly responsive lines split up and
//FIXME: the tickertape is problametic as it makes the screen too wide
const ArtPiece = () => {
  return (
    <div className="textimage">
              <HomeCarousel />
              <div className="beeldenmaker">[ Beeldenmaker ] </div>
              <div className="werkinuitvoering">[ WERK IN UITVOERING ]</div>
              <div className="kijken">[ Kijken, Zoeken, Vinden ] </div>
              <div className="schildersoog">[ Fotografeert met een Schildersoog ] </div>
              <div className="spelen">[ Spelend met de Realiteit ] </div>
    </div>

  );
}

export default ArtPiece;
