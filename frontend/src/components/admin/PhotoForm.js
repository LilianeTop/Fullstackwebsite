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
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.renderSpecials = this.renderSpecials.bind(this)
        this.renderColors = this.renderColors.bind(this)
        this.renderThemes = this.renderThemes.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.changeTheme = this.changeTheme.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.changeSpecial = this.changeSpecial.bind(this)

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
    //FIXME: how to show alert message with chosen themes and colors?
//var headers = {
//       'Content-Type': 'application/json'
//   }
//     const summarizerData = {
//         "paragraph" : this.state.paragraph,
//         "creationDate" : "2019-03-10T00:58:23",
//         "summarizedSentences" :null
//     };
//
//     axios.post('http://localhost:8080/api/summarize',{summarizerData}, {headers})
//         .then(res => console.log(res.data))
//     console.log(summarizerData);
    onFormSubmit = e => {
        // e.preventDefault(); //this creates error code 400 otherwise nothing happens
        alert('Artpiece was submitted with description: ' + this.state.description
                + ' type of artwork is: ' + this.state.sort
                + ' special is: ' + this.state.specials);//this works

const artpieceData = {
    sort: this.state.sort,
    specials: this.state.specials,
    description: this.state.description,
    themes: this.state.themes,
    colors: this.state.colors,
    selectedFile: this.state.selectedFile

};
//FIXME: output gives the catch error  and error code 400 but what went wrong?
       axios.post("http://localhost:8080/api/addArtpiece", artpieceData)
           .then(response => {
                   if(response.data != null)
               this.setState(this.initialState)
               alert("Kunstwerk opgeslagen")
           }).catch(error => {
               alert("Something went wrong" + error);
       });
    }

    changeTheme(event){
        let tempThemes = this.state.themes;
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
//FIXME: duplicate code refactor those two methods into 1
    changeColor(event){
        let tempColors = this.state.colors;
        const color = {id: event.target.id, name: event.target.name, status: event.target.checked}
        if(!event.target.checked){
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
        if(name === 'sort' && value === 'photo') {
            this.setState({[name]: value, specials: null})
        } else {
            this.setState({
                sort: 'special',
            specials: value})
        }
    }

    render() {
        return (
            <main >
                <div  className="koptekst">
                <h1>Het uploaden van een kunstwerk</h1>
                </div>
                <form  className="formulier" onSubmit={this.onFormSubmit}>
                <h3 >Kies het type kunstwerk: </h3>
                <label key='foto'>Foto</label>
                    <input
                        type="radio"
                        name="sort"
                        value="photo"
                        checked={this.state.sort === "photo"}
                        onChange={this.changeSpecial}
                        />
                <label key='special'>Special</label>
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
                          key='beschrijving'
                       value={this.state.description}
                       name='description'
                       placeholder="Geef titel of beschrijf het werk"
                       onChange={this.handleChange}
                />
                <br />
                <hr />
                <br />
                <h3 >Kies de thema's:</h3>
                {this.renderThemes()}
                <hr />
                <br />
                <h3 >Kies de kleuren:</h3>
                { this.renderColors() }
                <hr />
                <br />
                <h3 >Kies de foto die je wilt uploaden.</h3>
                    <div  key='bestand' className="custom-file" style={{width: 250}}>
                        <input
                            type="file"
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
        const specials = ['Camera & Kwast', 'Boxbeeld', 'Geënsceneerd']
        return specials.map((special, i) =>{
            return  (
                <div key={i} className="form-check-inline">
                <label > {special} </label>
                <input
                    type='radio'
                    name='specials'
                    onChange={this.changeSpecial}
                    checked={this.state.specials[special]}
                    value={special}
                />
            </div>
            )
        })
    }

    renderThemes() {
        const themes = ['Landschap', 'Stad', 'Buiten', 'Reizen', 'Water', 'Mensen', 'Abstract', 'Industrieel', 'Scenes'];
        return themes.map((theme, i) => {
            return (
                <div key={i} className="form-check-inline">
                    <label > {theme} </label>
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
                <div key={i} className="form-check-inline">
                <label >
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
