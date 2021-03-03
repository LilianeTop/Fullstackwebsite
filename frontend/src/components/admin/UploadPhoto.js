import "./Admin.css";
import React, {Component} from 'react';
import axios from "axios";
import themeItems from "./themeItems";
// import Type from "./PhotoFormType";
// import Form from 'react-bootstrap/Form';
// import Themes from "./PhotoFormThemes";
// import Colors from "./PhotoFormColors";
// import ImageURL from "./PhotoFormImageURL";
// import Description from "./PhotoFormDescription";

export default class UploadPhoto extends Component {
    //do we need props in our constructor and where do they come from? it still works without the props
    //TODO: how to submit the form to the DB I have installed axios but do not know how it works. It seems that the setState will create an updated Object which needs to be send via
    // an API to the db as a POST request.
    //TODO: how does it work if instead to upload the images itself to the DB I use the pathName of the chosen File and use a Filesystem how does that work?
    //TODO: validation you have to choose at least a theme or a color and upload an image

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
        'sort': "photo",
        'specials': "FOTO",
        'description': "",
        "themes": [],
        // 'themes': {
        //     'Landschap': false,
        //     'Stad': false,
        //     'Buiten': false,
        //     'Reizen': false,
        //     'Water': false,
        //     'Mensen': false,
        //     'Abstract': false,
        //     'Industrieel': false,
        //     'Scenes': false
        // },
        'colors': [],
        // 'colors': {
        //     'Blauw': false,
        //     'Geel': false,
        //     'Groen': false,
        //     'Rood': false,
        //     'Oranje': false,
        //     'Paars': false,
        //     'Kleurrijk': false
        // },
        'selectedFile': "",
    }


    //FIXME: how to show alert message with chosen themes and colors?
//FIXME: creates code status 500 and after changing the controller back to code 400
//     onFormSubmit(event){
//         event.preventDefault();
//
//         let bodyFormData = new FormData();
//         bodyFormData.append("sort", this.state.sort)
//         bodyFormData.append("specials", "this.state.specials")
//         bodyFormData.append("description", "this.state.description")
//         bodyFormData.append("themes", JSON.stringify(this.state.themes))
//         bodyFormData.append("colors", JSON.stringify(this.state.colors))
//         bodyFormData.append("selectedFile", "this.state.selectedFile" )
//
//         console.log("Type kunstwerk: " + this.state.sort + " " +
//         "\nAdaptatie: " + this.state.specials +
//         "\nBeschrijving: " + this.state.description +
//         "\nGekozen bestand: " + this.state.selectedFile)
//         console.log("gekozen kleuren", this.state.colors)
//         console.log("gekozen thema's", this.state.themes)//this works
//
//
//         axios({
//             method: "post",
//             url: "http://localhost:8080/api/addArtpiece",
//             data: bodyFormData,
//             headers: { "Content-Type": "multipart/form-data" },
//         }).then(response => {
//             console.log(response.data)
//             if(response.data != null)
//                 this.setState(this.initialState)
//             alert("Kunstwerk opgeslagen")
//         }).catch(error => {
//             console.log("Something went wrong " + error);
//             alert("Something went wrong " + error);
//         });
//     }
//FIXME: creates a code status 400
    onFormSubmit = e => {

        e.preventDefault(); //this creates error code 400 otherwise nothing happens
        console.log("gekozen kleuren", this.state.colors)//this works
        console.log("gekozen thema's", this.state.themes)//this works
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
        }
        alert("op te slaan kunstwerk: " + artpieceData.sort + " " + artpieceData.specials
            + " " + artpieceData.description
            + " " + artpieceData.themes)
//FIXME: output gives the catch error  and error code 400 but what went wrong?
       axios.post("http://localhost:8080/api/addArtpiece", artpieceData)
           .then(response => {
               console.log(response.data)
                   if(response.data != null)
               this.setState(this.initialState)
               alert("Kunstwerk opgeslagen")
           }).catch(error => {
               alert("Something went wrong" + error);
       });
    }



    changeTheme(event){
        let tempThemes = this.state.themes;
        const theme = {id: event.target.id, name: event.target.value, status: event.target.checked}

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
//     changeTheme(event){
//         const val = event.target.checked;
//         const name = event.target.name;
//         let updatedThemes = Object.assign({}, this.state.themes, {[name]: val})
//         this.setState({
//             'themes': updatedThemes
//         })
//     }
//     changeColor(event){
//         const val = event.target.checked;
//         const name = event.target.name;
//         let updatedColors = Object.assign({}, this.state.colors, {[name]: val})
//         this.setState({
//             'colors': updatedColors
//         })
//     }

    changeColor(event){
        let tempColors = this.state.colors;
        const color = {id: event.target.id, name: event.target.value, status: event.target.checked}
        //FIXME: is line 172 the same as line 170?
        // const color = {id : target.id, name: target.value, status: target.checked} = event; or
        //const {id: id, name: value, status: checked} = event.target; //does this work? TODO: try out refactor code below
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
        this.setState({[name]: value})
        //this.setState({[event.target.name] : event.target.value})
    }

    changeSpecial(event){
        //FIXME: name is always sort so can we remove line 191 and change name to sort on line 192?
        const {name, value } = event.target
        if(name === 'sort' && value === 'photo') {
            this.setState({[name]: value, specials: 'FOTO'})
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
                <h1>Het uploaden van een foto</h1>
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
                <button className='knop' type='submit'>Uploaden</button>
            </form>

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
                        name="theme"
                        onChange={this.changeTheme}
                        checked={this.state.themes[theme]}
                        value={theme}/>
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
                        name='color'
                        onChange={this.changeColor}
                        checked={this.state.colors[color]}
                        value={color}

                    />
                </div>
            )
        })
    }
}
