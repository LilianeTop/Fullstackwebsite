import React, {Component} from "react";
import "./Admin.css";
import Menu from "./Menu";
import axios from "axios";

export default class UpdatePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        // this.onFormSubmit = this.onFormSubmit.bind(this)
        this.previewFile = this.previewFile.bind(this)
    }

    initialState = {
        allArtpieces: [],
        showMenu: false,
        checkCount: 0,
        preview: null
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
                        >
                        </div>
                        <table id="artpiecesTable">
                            <thead>{this.renderTableHeader()}</thead>
                            <tbody>{this.renderTableData()}</tbody>
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
                idArtpiece,
                selectedFile,
                adaptation,
                description,
                themes,
                colors

            } = artpiece
            return (
                <tr key={artpiece.idArtpiece}>
                    <td width={30}>{idArtpiece}</td>
                    <td width={250}><img name="preview" src={selectedFile} height="150" alt=""/>
                    </td>
                    <td width={150}>{adaptation}</td>
                    <td width={1000}>{description}</td>
                    <td width={300} >
                    {/*   FIXME: how to show a theme per line?*/}
                    {/*    {themes.toString().replaceAll(",", "\n")}*/}
                        {themes}
                    </td>
                    <td width={300}>{colors.toString().replaceAll(",","\n")}</td>
                </tr>
            )

        })
    }





    renderTableHeader() {
        return (
            <tr >
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