import "./Portfolio.css";
import ThemaCarousel from "./ThemaCarousel";


const Portfolio = (props) => {
        return (
            <div>
                <h1>Laat alle beelden zien met: {props.themes} </h1>
                <ThemaCarousel />
            </div>
        );


}

export default Portfolio;
