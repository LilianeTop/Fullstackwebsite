import "./List.css";
import Foto from "./Foto";

const List = (props) => {
  return (
    <div>
        <h2> {props.title} </h2>
          <div className = "list">
            <Foto picture="/img/VerborgenCitroenen.jpg" alt="Landschap"/>
            <Foto picture="/img/mensen3Mannen.jpg" alt="Mensen"/>
            <Foto picture="/img/Industrieel.jpg" alt="Industrie"/>
            <Foto picture="/img/Reizen.jpg" alt="Reizen"/>
            <Foto picture="/img/Abstract.jpg" alt="Abstract"/>
            <Foto picture="/img/Scenes.jpg" alt="Scenes"/>
            <Foto picture="/img/Natuur.jpg" alt="Water"/>
            <Foto picture="/img/Buiten.jpg" alt="Buiten"/>
            <Foto picture="/img/Stad.jpg" alt="Stad"/>
          </div>
    </div>
);
}

export default List;
