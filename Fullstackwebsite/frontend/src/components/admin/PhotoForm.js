import "./PhotoForm.css";
import React, {Component} from 'react';
import { useFormik } from "formik";

export default class PhotoForm extends Component {
    //every class needs a constructor to initialize the variables
    //always start with a call to super
    //state only applies to classbased components?
    //setstate is to change the state
    //state is always an object
    //to setState you need to bind it to its state
    //do we need props in our constructor and where do they come from?
    //each class must have a render() function which contains the return
    //TODO: if a theme is selected it should be added to the array themes[] how?
    //TODO: how to display the chosen themes as I did with the description at the bottom of the render() function
    //TODO: can I use the handleChange() function to add the themes and colors to their respective arrays?
    //TODO: how to submit the form to the DB I have installed axios but do not know how it works. It seems that the setState will create an updated Object which needs to be send via
    // an API to the db? as a POST request? I would think that the artpieceInfo should contain all info that will be submitted to the db?
    //TODO: style this form its a mess
    //TODO: how does it work if instead to upload the images itself to the DB I use the pathName of the chosen File and use a Filesystem how does that work?

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: "",
            description: "",
            sort: "",
            specials: "",
            // themes: {
            //     Landschap: false,
            //     Stad: false,
            //     Buiten: false,
            //     Reizen: false,
            //     Water: false,
            //     Mensen: false,
            //     Abstract: false,
            //     Industrieel: false,
            //     Scenes: false,
            // },

            themes: [],

            colors: [],

            //artpieceInfo: []//an array of object? with all info of the setState?
        };
        this.handleChange = this.handleChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.renderSpecials = this.renderSpecials.bind(this)
        this.renderColors = this.renderColors.bind(this)

    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.sort)
        console.log(this.state.special)
        console.log(this.state.description)
        console.log(this.state.selectedFile)
        console.log(this.state.themes)
        console.log(this.state.colors)


    }
    handleChange(event){
        // const {name, value, type, checked} = event.target
        // type === 'checkbox' ?
        //     this.setState({[name]: checked})
        //     : this.setState({[name] : value})
        //FIXME: does this alternative solution work better?
        const value = event.target.type === 'checkbox' ? event.target.checked :
            event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });

    }

    render() {
        return (
            <main>
            <form onSubmit={this.onFormSubmit}>
                <label>Foto</label>
                    <input
                        type="radio"
                        name="sort"
                        value="photo"
                        checked={this.state.sort === "photo"}
                        onChange={this.handleChange}
                        />
                        <br />
                <label>Special</label>
                    <input
                        type="radio"
                        name="sort"
                        value="special"
                        checked={this.state.sort === "special"}
                        onChange={this.handleChange}
                    />
                {this.state.sort === 'special' ? this.renderSpecials() : ""}
                <br />
                <textarea
                       value={this.state.description}
                       name='description'
                       placeholder="Beschrijf het werk"
                       onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="Landschap"
                        onChange={this.handleChange}
                        checked={this.state.Landschap}
                        /> Landschap
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Stad"
                        onChange={this.handleChange}
                        checked={this.state.Stad}
                    /> Stad
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Buiten"
                        onChange={this.handleChange}
                        checked={this.state.Buiten}
                    /> Buiten
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Reizen"
                        onChange={this.handleChange}
                        checked={this.state.Reizen}
                    /> Reizen
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Water"
                        onChange={this.handleChange}
                        checked={this.state.Water}
                    /> Water
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Mensen"
                        onChange={this.handleChange}
                        checked={this.state.Mensen}
                    /> Mensen
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Abstract"
                        onChange={this.handleChange}
                        checked={this.state.Abstract}
                    /> Abstract
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Industrieel"
                        onChange={this.handleChange}
                        checked={this.state.Industrieel}
                    /> Industrieel
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Scenes"
                        onChange={this.handleChange}
                        checked={this.state.Scenes}
                    /> Scenes
                </label>
                <p>Kies de kleuren:</p>
                { this.renderColors() }
                <p>klik op kies bestand</p>
                <input type='file'
                       name='selectedFile'
                       onChange={this.handleChange}

                />
                <br />
                <button type='submit'>Verzenden </button>
            </form>
            <hr />
            <h2>Entered information</h2>
                <p>Chosen type: {this.state.sort} </p>
                <p>Chosen special: {this.state.specials.name}</p>
                <p>Description is: {this.state.description}</p>
                <p>Chosen file: {this.state.selectedFile}</p>
                {/*<p>Chosen themes are: {this.state.themes}</p>*/}

                {/*<p>Colors are: {this.state.colors[this.value]}</p>*/}
            </main>
        )
    };


    renderSpecials() {
        const specialsList = ['Camera & Kwast', 'Boxbeeld', 'Geënsceneerd']
        return <div>
            <p>Maak een keuze: </p>
            {specialsList.map((special, i) => { return (
                <label key={i} >
                {special}
                <input
                type='radio'
                name={special}
                onChange={ this.handleChange}
                checked={this.state.specials[special]}
                value={ this.state.specials[special] } />
                </label>
                )
            })}
        </div>

    }


    renderColors(){
        const colors = ['Blauw', 'Geel', 'Groen', 'Rood', 'Oranje', 'Paars', 'Kleurrijk'];
        return colors.map((color, i) => {
            return (
                <label key={i}>
                    {color}
                    <input
                        type="checkbox"
                        name={color}
                        onChange={this.handleChange}
                        value={this.state.colors[color]}/>
                </label>
            )
        })
    }



}
