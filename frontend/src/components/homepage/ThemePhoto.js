import "./ThemePhoto.css";


const ThemePhoto = (props) => {
  return  (
    <figure>
    <img key={props.id} src={props.picture} alt={props.alt}/>
    <figcaption>{props.alt}</figcaption>
    </figure>
  );
}

export default ThemePhoto;
