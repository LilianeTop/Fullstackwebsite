import "./PhotoForm.css";
import React, {Component} from 'react';
import axios from "axios";
// import Type from "./PhotoFormType";
// import Form from 'react-bootstrap/Form';
// import Themes from "./PhotoFormThemes";
// import Colors from "./PhotoFormColors";
// import ImageURL from "./PhotoFormImageURL";
// import Description from "./PhotoFormDescription";

export default class PhotoForm extends Component {
    //do we need props in our constructor and where do they come from? it still works without the props
    //TODO: how to submit the form to the DB I have installed axios but do not know how it works. It seems that the setState will create an updated Object which needs to be send via
    // an API to the db? as a POST request? I would think that the artpieceInfo should contain all info that will be submitted to the db?
    //TODO: style this form its a mess
    //TODO: how does it work if instead to upload the images itself to the DB I use the pathName of the chosen File and use a Filesystem how does that work?
    //TODO: validation you have to choose at least a theme or color and upload am image

    constructor(props) {
        super(props)
        this.state = this.initialState;
        // {
        //     sort: "photo",
        //     specials: "",
        //     description: "",
        //     themes: [],
        //     colors: [],
        //     selectedFile: "",
        //     // artpieceInfos : []
        // };
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.renderSpecials = this.renderSpecials.bind(this)
        this.renderColors = this.renderColors.bind(this)
        this.renderThemes = this.renderThemes.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.changeTheme = this.changeTheme.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.changeSpecial = this.changeSpecial.bind(this)
        this.state = this.initialState

    }

    initialState = {
        sort: "photo",
        specials: "",
        description: "",
        themes: [],
        colors: [],
        selectedFile: "",
    }
//TODO: how to upload to the db? which API  url to use?
//    componentDidMount = () => {
//        axios.get("http://localhost:8080/api/showAllPhotos")
//            .then(response => console.log(response.data));
//        // axios.post("api/addArtpiece")
//        //      .then(response => {
//        //          this.setState({ artpieceInfos : response.data})
//        //      });
//     }
    // handleSubmit = (event) => {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    //FIXME: how to show alert message with chosen themes and colors?
    onFormSubmit(e) {
        e.preventDefault()
    alert('Artpiece was submitted with description: ' + this.state.description);
//FIXME: output gives the catch error but what went wrong?
       axios.post("http://localhost:8080/api/addArtpiece", {
           sort: this.state.sort,
           specials: this.state.specials,
           description: this.state.description,
           themes: this.state.themes,
           colors: this.state.colors,
           selectedFile: this.state.selectedFile
       })
           .then((response) => {
               console.log(response.data);
           }).catch((error) => {
               console.log("Something went wrong" + error);
       });
      //FIXME: how to reset? this.setState = this.initialState;

    }

    changeTheme(event){
        const tempThemes = this.state.themes;
        const theme = {id: event.target.id, name: event.target.name, status: event.target.checked}

        if(!event.target.checked){
            const index = tempThemes.findIndex((item)=>item.name === theme.name)
            tempThemes.splice(index, 1);
        } else {
            tempThemes.push(theme);
        }

        this.setState({
            themes : tempThemes
        })
    }

    changeColor(event){

        let tempColors = this.state.colors;
        const color = {id: event.target.id, name: event.target.name, status: event.target.checked}

        if(!event.target.checked){
            const index = tempColors.findIndex((item)=>item.name === color.name)
            tempColors.splice(index, 1);
           // tempColors = tempColors.filter((item)=>item.id !== color.id)
           //  tempColors = tempColors.filter(event.target.id !== event.target.checked)
        } else {
            tempColors.push(color);
        }

        this.setState({
            colors : tempColors
        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    changeSpecial(event){
        const {name, value } = event.target
        if(name === 'sort' && value === 'photo'){
            this.setState( {[name]: value, specials: "PHOTO"})
        } else {
            this.setState({[name] : value})
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Foto
                    <input
                        type="radio"
                        name="sort"
                        value="photo"
                        checked={this.state.sort === "photo"}
                        onChange={this.changeSpecial}
                        />
                </label>
                <label>Special
                    <input
                        type="radio"
                        name="sort"
                        value="special"
                        checked={this.state.sort === "special"}
                        onChange={this.changeSpecial}
                    />
                </label>
                {this.state.sort === 'special' ? this.renderSpecials() : ""}
                <hr />
                <label>Geef titel of beschrijving van het werk. De ingegeven tekst is zichtbaar als ondertiteling bij de foto</label>
                <br />
                <textarea className='veld'
                       value={this.state.description}
                       name='description'
                       placeholder="Geef titel of beschrijf het werk"
                       onChange={this.handleChange}
                />
                <br />
                <hr />
                <h2>Entered information</h2>
                <h2>Chosen type: {this.state.sort} </h2>
                <h2>Chosen special: {this.state.specials}</h2>
                <h2>Description is: {this.state.description}</h2>
                <h2>Chosen themes are: </h2>
                {this.state.themes.map( theme => {
                    return (
                        <h2 key={theme.name}>{theme.name}</h2>
                    )
                })}
                <h2>Chosen colors are: </h2>
                {this.state.colors.map( color => {
                    return (
                        <h2 key={color.name}>{color.name}</h2>
                    )
                })}
                <h2>Chosen file: {this.state.selectedFile}</h2>

                <hr />
                <p>Kies de thema's</p>
                {this.renderThemes()}

                <hr />
                <p>Kies de kleuren:</p>
                { this.renderColors() }
                <hr />
                <p>klik op kies bestand</p>
                <input className='kiesknop' type='file'
                       name='selectedFile'
                       onChange={this.handleChange}
                       value={this.state.selectedFile}
                />
                <br />
                <button className='knop' type='submit'>Verzenden</button>
            </form>

        )
    };

    renderSpecials() {
        return (
            <div>
                <label>Camera & Kwast
                <input
                    type="radio"
                    name="specials"
                    value="Camera & Kwast"
                    checked={this.state.specials === "Camera & Kwast"}
                    onChange={this.changeSpecial}
                />
            </label>
            <label>Boxbeeld
                <input
                    type="radio"
                    name="specials"
                    value="Boxbeeld"
                    checked={this.state.specials === "Boxbeeld"}
                    onChange={this.changeSpecial}
                />
                </label>
                <label>Geënsceneerd
                    <input
                        type="radio"
                        name="specials"
                        value="Geensceneerd"
                            checked={this.state.specials === "Geensceneerd"}
                            onChange={this.changeSpecial}
                    />
                </label>
            </div>
    )
    }


    renderThemes() {
        const themes = ['Landschap', 'Stad', 'Buiten', 'Reizen', 'Water', 'Mensen', 'Abstract', 'Industrieel', 'Scenes'];
        return themes.map((theme) => {
            return (
                    <label key={theme} > {theme}
                    <input
                        type='checkbox'
                        name={theme}
                        onChange={this.changeTheme}
                        checked={this.state.themes[theme]}
                        value={this.state.themes[theme]}/>
                    </label>
            )
        })
    }


    renderColors() {
        const colors = ['Blauw', 'Geel', 'Groen', 'Rood', 'Oranje', 'Paars', 'Kleurrijk'];
        return colors.map((color, i) => {
            return (
                <label key={i} >
                    {color}
                    <input
                        type="checkbox"
                        name={color}
                        onChange={this.changeColor}
                        checked={this.state.colors[color]}
                        value={this.state.colors[color]}/>
                </label>
            )
        })
    }
}
