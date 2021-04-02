import React, {Component} from "react";
import "./Admin.css";
import Menu from "./Menu";
import axios from "axios";

export default class UpdatePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        // this.onFormSubmit = this.onFormSubmit.bind(this)

    }

    initialState = {
        allArtpieces: [
            // {
            //     specials: "",
            //     description: "",
            //     themes: [],
            //     colors: [],
            //     selectedFile: "",
            //     showMenu: false,
            //     checkCount: 0,
            //     preview: null
            // }
        ]
    }
    componentDidMount() {
        //FIXME: create a method in the controller to fetch all artpieces
        axios.get("http://localhost:8080/api/showPhoto")
            .then(response => {
                const artpieces = response.data;
                this.setState({
                    allArtpieces: artpieces
                })
            })
    }

    render() {
        if (this.state.showMenu) {
            return <Menu/>
        } else
            return (
                <main>
                    <div className="koptekst">
                        <h1>Het wijzigen van een foto in de database.</h1>
                    </div>
                    <form id="updatePhotoForm" className="formulier" onSubmit={this.onFormSubmit}>
                        <h3>Selecteer de foto die je wilt wijzigen.</h3>
                        <div key='bestand'
                             className="custom-file bestand"
                             style={{width: 250}}>
                        </div>
                        {/*TODO: formatting table*/}
                        <table id='artpieces'>
                            <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                            </tbody>

                        </table>
                        <hr/>
                        <button className='knop' type='submit'>Selecteer</button>
                    </form>
                    <button className='terugknop' type='button' onClick={this.showMenu}>Terug naar Menu</button>
                </main>
            )
    }

    renderTableData() {
        return this.state.allArtpieces.map((artpiece, index) => {
            const {
                id,
                specials,
                description,
                themes,
                colors,
                selectedFile
            } = artpiece
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{specials}</td>
                    <td>{description}</td>
                    <td>{themes}</td>
                    <td>{colors}</td>
                    <td>{selectedFile}</td>
                </tr>
            )

        })
    }

    renderTableHeader() {
        return (
            <tr>
                <td>Id</td>
                <td>Preview</td>
                <td>Type</td>
                <td>Beschrijving</td>
                <td>Thema's</td>
                <td>Kleuren</td>
            </tr>
        )
    }
}