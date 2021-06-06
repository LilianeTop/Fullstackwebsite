import "./Admin.css";
import React, {Component} from 'react';
import axios from "axios";
import Menu from "./Menu";
import PreviewFile from "./FormComponents/Preview";

export default class UploadPhoto extends Component {
    //do we need props in our constructor and where do they come from? it still works without the props

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
        this.previewFile = this.previewFile.bind(this)
        this.showMenu = this.showMenu.bind(this)
        this.emptyForm = this.emptyForm.bind(this)
    }

    initialState = {
        sort: "photo",
        specials: "FOTO",
        description: "",
        themes: [],
        colors: [],
        selectedFile: "",
        showMenu: false,
        checkCount: 0,
        preview: null,

    }

    onFormSubmit = e => {
        e.preventDefault();
        if (this.state.themes.length === 0) {
            alert("Je moet tenminste één thema kiezen");
            return;
        }
        const artpieceData = {
            specials: this.state.specials,
            description: this.state.description,
            selectedFile: this.state.selectedFile,
            themes: this.state.themes,
            colors: this.state.colors
        }

        const confirmBox = window.confirm("Wil je deze foto opslaan met de volgende gegevens?" +
            "\nGekozen type kunstwerk: " + this.state.specials.toString() +
            "\nBeschrijving: " + this.state.description +
            "\nGekozen thema's: " + this.state.themes.toString() +
            "\nGekozen kleuren: " + this.state.colors.toString())
        if (confirmBox !== true) {
            return;
        }

        axios.post("https://els-enschede.herokuapp.com/api/addArtpiece", artpieceData)
            .then(response => {
                if (response.data === 'exists') {
                    this.emptyForm();
                    alert("Deze foto is al toegevoegd aan de database")
                } else if (response.data !== null) {
                    this.emptyForm();
                    alert("Foto toegevoegd aan de database!")
                }
            }).catch(error => {
                alert("Something went wrong" + error);
            }
        );

    }
    emptyForm() {
        this.setState({
            sort: "photo",
            specials: "FOTO",
            description: "",
            themes: [],
            colors: [],
            selectedFile: "",
            showMenu: false,
            checkCount: 0,
            preview: null,

        })
        document.getElementById("uploadPhotoForm").reset();

    }

    showMenu() {
        this.setState({
            showMenu: true
        })
    }

    previewFile(event) {
        this.setState({
            preview: URL.createObjectURL(event.target.files[0])
        })
        const preview = document.querySelector('img[id=preview]');
        const self = this;
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (upload) {
            preview.src = reader.result;
            self.setState({
                selectedFile: upload.target.result
            });
        };
        reader.readAsDataURL(file);
    };

    changeTheme(event) {
        const isChecked = event.target.checked;
        const themeName = event.target.value.toUpperCase();

        if (!isChecked) {
            const index = this.state.themes.findIndex((item) => item === themeName)
            this.state.themes.splice(index, 1)
        } else {
            this.state.themes.push(themeName)
        }

        this.setState({
            themes: this.state.themes,
            checkCount: this.state.themes.length
        })
    }

//FIXME: duplicated code
    changeColor(event) {
        const isChecked = event.target.checked;
        const color = event.target.value.toUpperCase();

        if (isChecked) {
            this.state.colors.push(color)
        } else {
            const index = this.state.colors.findIndex((item) => item === color)
            this.state.colors.splice(index, 1)
        }

        this.setState({
            colors: this.state.colors
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    changeSpecial(event) {
        const {name, value} = event.target
        if (name === 'sort' && value === 'photo') {
            this.setState({sort: 'photo', specials: 'FOTO'});
        } else {
            this.setState({
                sort: 'special'
            })
            switch (value) {
                case 'Camera & Kwast':
                    this.setState({
                        specials: 'CAMERAKWAST'
                    });
                    break;
                case 'Boxbeeld':
                    this.setState({
                        specials: 'BOXBEELD'
                    });
                    break;
                case 'Geënsceneerd':
                    this.setState({
                        specials: 'GEENSCENEERD'
                    });
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        if (this.state.showMenu) {
            return <Menu/>
        } else
            return (
                <main>
                    <div className="koptekst">
                        <h1>Het toevoegen van een foto aan de database.</h1>
                    </div>
                    <form id="uploadPhotoForm" className="formulier" onSubmit={this.onFormSubmit}>
                        <h3>Kies de foto die je wilt toevoegen.</h3>
                        <div key='bestand'
                             className="custom-file bestand"
                             style={{width: 250}}>
                            <input
                                type="file"
                                className="custom-file-input"
                                id="customFileLangHTML"
                                name='preview'
                                accept=".jpeg, .png, .jpg"
                                onChange={this.previewFile}
                                required
                            />
                            <label className="custom-file-label" htmlFor="customFileLangHTML"
                                   data-browse="Bestand kiezen">Voeg je foto toe</label>

                            <img id="preview" name="preview" src={this.state.preview} height="150" alt=""/>
                            <br/>
                        </div>

                        <hr/>
                        <h3>Kies het type kunstwerk: </h3>
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
                        <hr/>
                        <br/>
                        <h3>De ingegeven tekst is zichtbaar als ondertiteling bij de foto.</h3>
                        <textarea className='beschrijvingsveld'
                                  key='beschrijving'
                                  value={this.state.description}
                                  name='description'
                                  placeholder="Geef titel of beschrijf het werk"
                                  onChange={this.handleChange}
                        />
                        <br/>
                        <hr/>
                        <br/>
                        <h3>Kies de thema's:</h3>
                        {this.renderThemes()}
                        <hr/>
                        <br/>
                        <h3>Kies de kleuren:</h3>
                        {this.renderColors()}
                        <hr/>
                        <button className='knop' type='submit'>Toevoegen</button>
                    </form>
                    <button className='terugknop' type='button' onClick={this.showMenu}>Terug naar Menu</button>

                </main>
            )
    };

    renderSpecials() {
        const specials = ['Camera & Kwast', 'Boxbeeld', 'Geënsceneerd']
        return specials.map((special, i) => {
            return (
                <div key={i} className="form-check-inline">
                    <label> {special} </label>
                    <input
                        type='radio'
                        name='specials'
                        onChange={this.changeSpecial}
                        checked={this.state.specials[special]}
                        value={special}
                        required
                    />
                </div>
            )
        })
    }

    renderThemes = () => {
        const themes = ['Landschap', 'Stad', 'Buiten', 'Reizen', 'Water', 'Mensen', 'Abstract', 'Industrie', 'Scenes'];

        return themes.map((theme, i) => {
            return (
                <div key={i} className="form-check-inline">
                    <label htmlFor="chosenThemes"> {theme} </label>
                    <input
                        id="chosenThemes"
                        type='checkbox'
                        name="theme"
                        onClick={this.changeTheme}
                        value={theme}
                    />
                </div>
            )
        })
    }


    renderColors() {
        const colors = ['Blauw', 'Geel', 'Groen', 'Rood', 'Oranje', 'Bruin', 'Kleurrijk'];
        return colors.map((color, i) => {
            return (
                <div key={i} className="form-check-inline">
                    <label>
                        {color}</label>
                    <input
                        type="checkbox"
                        name='color'
                        onClick={this.changeColor}
                        value={color}

                    />
                </div>
            )
        })
    }
}
