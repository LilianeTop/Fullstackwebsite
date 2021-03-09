import "./List.css";
import ThemePhoto from "./ThemePhoto";

const List = (props) => {
  return (
    <div>
        {/*<h2> {props.title} </h2>*/}
          <div className = "list">
            <ThemePhoto picture="/img/VerborgenCitroenen.jpg" alt="Landschap"/>
            <ThemePhoto picture="/img/mensen3Mannen.jpg" alt="Mensen"/>
            <ThemePhoto picture="/img/Industrieel.jpg" alt="Industrie"/>
            <ThemePhoto picture="/img/Reizen.jpg" alt="Reizen"/>
            <ThemePhoto picture="/img/Abstract.jpg" alt="Abstract"/>
            <ThemePhoto picture="/img/Scenes.jpg" alt="Scenes"/>
            <ThemePhoto picture="/img/Natuur.jpg" alt="Water"/>
            <ThemePhoto picture="/img/Buiten.jpg" alt="Buiten"/>
            <ThemePhoto picture="/img/Stad.jpg" alt="Stad"/>
          </div>
    </div>
);
}

export default List;
