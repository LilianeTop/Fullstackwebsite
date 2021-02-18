import "./PhotoForm.css";
import React, {Component} from 'react';

export default class PhotoForm extends Component {
    //do we need props in our constructor and where do they come from? it still works without the props
    //TODO: how to submit the form to the DB I have installed axios but do not know how it works. It seems that the setState will create an updated Object which needs to be send via
    // an API to the db? as a POST request? I would think that the artpieceInfo should contain all info that will be submitted to the db?
    //TODO: style this form its a mess
    //TODO: how does it work if instead to upload the images itself to the DB I use the pathName of the chosen File and use a Filesystem how does that work?
//TODO: validation you have to choose at least a theme or color gitand upload am image
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: "",
            description: "",
            sort: "photo",
            specials: "",
            themes: [],
            colors: [],
            //artpieceInfo: [{}]//an array of object? with all info of the setState?
        };
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.renderSpecials = this.renderSpecials.bind(this)
        this.renderColors = this.renderColors.bind(this)
        this.renderThemes = this.renderThemes.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.changeTheme = this.changeTheme.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.changeSpecial = this.changeSpecial.bind(this)

    }

    //TODO: how to upload to the db? which API to use?
    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.sort)
        console.log(this.state.special)
        console.log(this.state.description)
        console.log(this.state.selectedFile)
        console.log(this.state.themes)
        console.log(this.state.colors)


    }

    changeTheme(event){
        const tempThemes = this.state.themes;
        const themesTemp = {id: event.target.id, name: event.target.name, status: event.target.checked}

        if(!event.target.checked){
            tempThemes.splice(this.id, 1);
        } else {
            tempThemes.push(themesTemp);
        }

        this.setState({
            themes : tempThemes
        })
    }

    changeColor(event){
        const tempColors = this.state.colors;
        const colorsTemp = {id: event.target.id, name: event.target.name, status: event.target.checked}

        if(!event.target.checked){
            tempColors.splice(this.id, 1);
        } else {
            tempColors.push(colorsTemp);
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
            this.setState( {[name]: value, specials: null})
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
                        defaultChecked={"photo"}
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
                <p>Chosen type: {this.state.sort} </p>
                <p>Chosen special: {this.state.specials}</p>
                <p>Description is: {this.state.description}</p>
                <p>Chosen file: {this.state.selectedFile}</p>
                <p>Chosen themes are: </p>
                {this.state.themes.map( theme => {
                    return (
                        <p key={theme.name}>{theme.name}</p>
                    )
                })}
                <hr />
                <p>Kies de thema's</p>
                {this.renderThemes()}
                <p>Chosen colors are: </p>
                {this.state.colors.map( color => {
                    return (
                        <p key={color.name}>{color.name}</p>
                    )
                })}
                <hr />
                <p>Kies de kleuren:</p>
                { this.renderColors() }
                <hr />
                <p>klik op kies bestand</p>
                <input type='file'
                       name='selectedFile'
                       onChange={this.handleChange}
                />
                <br />
                <button type='submit'>Verzenden</button>
            </form>

        )
    };


    //FIXME: if button clicked it does turn blue
    // renderSpecials() {
    //     const specialsList = ['Camera & Kwast', 'Boxbeeld', 'Geënsceneerd'];
    //     return specialsList.map((special) => {
    //         return (
    //                 <label> {special}
    //                 <input
    //                     type='radio'
    //                     name='specials'
    //                     value={special}
    //                     checked={this.state.specials === {special} }
    //                     onChange={this.changeSpecial}
    //                 />
    //                 </label>
    //         )
    //     })
    // }

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
        return themes.map((theme, i) => {
            return (
                    <label key={i}> {theme}
                    <input
                        type='checkbox'
                        name={theme}
                        onChange={this.changeTheme}
                        // checked={this.state.themes[theme]}
                        value={this.state.themes[theme]}/>
                    </label>
            )
        })
    }


    renderColors() {
        const colors = ['Blauw', 'Geel', 'Groen', 'Rood', 'Oranje', 'Paars', 'Kleurrijk'];
        return colors.map((color, i) => {
            return (
                <label key={i}>
                    {color}
                    <input
                        type="checkbox"
                        name={color}
                        onChange={this.changeColor}
                        value={this.state.colors[color]}/>
                </label>
            )
        })
    }
}
