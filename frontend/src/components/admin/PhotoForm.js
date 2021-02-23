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
        if(!color.status){
            const index = tempColors.findIndex((item)=>item.name === color.name)
            tempColors.splice(index, 1);
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
            <main>
                <div className="koptekst">
                <h1 >Het uploaden van een kunstwerk</h1>
                </div>
                <form  className="formulier" onSubmit={this.onFormSubmit}>
                <h3>Kies het type kunstwerk: </h3>
                <label>Foto</label>
                    <input
                        type="radio"
                        name="sort"
                        value="photo"
                        checked={this.state.sort === "photo"}
                        onChange={this.changeSpecial}
                        />
                <label>Special</label>
                    <input
                        type="radio"
                        name="sort"
                        value="special"
                        checked={this.state.sort === "special"}
                        onChange={this.changeSpecial}
                    />
                {this.state.sort === 'special' ? this.renderSpecials() : ""}
                <hr />
                <br />
                <h3>De ingegeven tekst is zichtbaar als ondertiteling bij de foto.</h3>
                <textarea className='beschrijvingsveld'
                       value={this.state.description}
                       name='description'
                       placeholder="Geef titel of beschrijf het werk"
                       onChange={this.handleChange}
                />
                <br />
                <hr />
                <br />
                <h3>Kies de thema's:</h3>
                {this.renderThemes()}
                <hr />
                <br />
                <h3>Kies de kleuren:</h3>
                { this.renderColors() }
                <hr />
                <br />
                <h3>Kies de foto die je wilt uploaden.</h3>
                    <div className="custom-file" style={{width: 250}}>
                        <input type="file"
                               className="custom-file-input"
                               id="customFileLangHTML"
                               name='selectedFile'
                               onChange={this.handleChange}
                               value={this.state.selectedFile}
                        />
                        <label className="custom-file-label " htmlFor="customFileLangHTML"
                                   data-browse="Bestand kiezen">Voeg je foto toe</label>
                    </div>

                <hr />
                <button className='knop' type='submit'>Verzenden</button>
            </form>
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
                <br /><br /><br /><br />
            </main>
        )
    };

    renderSpecials() {
        return (
            <div>
                <label>Camera & Kwast</label>
                <input
                    type="radio"
                    name="specials"
                    value="Camera & Kwast"
                    checked={this.state.specials === "Camera & Kwast"}
                    onChange={this.changeSpecial}
                />
            <label>Boxbeeld</label>
                <input
                    type="radio"
                    name="specials"
                    value="Boxbeeld"
                    checked={this.state.specials === "Boxbeeld"}
                    onChange={this.changeSpecial}
                />
                <label>Geënsceneerd</label>
                    <input
                        type="radio"
                        name="specials"
                        value="Geensceneerd"
                            checked={this.state.specials === "Geensceneerd"}
                            onChange={this.changeSpecial}
                    />
            </div>
    )
    }


    renderThemes() {
        const themes = ['Landschap', 'Stad', 'Buiten', 'Reizen', 'Water', 'Mensen', 'Abstract', 'Industrieel', 'Scenes'];
        return themes.map((theme) => {
            return (
                <div className="form-check-inline">
                    <label key={theme} > {theme} </label>
                    <input
                        type='checkbox'
                        name={theme}
                        onChange={this.changeTheme}
                        checked={this.state.themes[theme]}
                        value={this.state.themes[theme]}/>
                </div>
            )
        })
    }


    renderColors() {
        const colors = ['Blauw', 'Geel', 'Groen', 'Rood', 'Oranje', 'Paars', 'Kleurrijk'];
        return colors.map((color, i) => {
            return (
                <div className="form-check-inline">
                <label key={color} >
                    {color}</label>
                    <input
                        type="checkbox"
                        name={color}
                        onChange={this.changeColor}
                        checked={this.state.colors[color]}
                        value={this.state.colors[color]}/>

                </div>
            )
        })
    }
}
