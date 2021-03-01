import './Admin.css';
import React, {Component} from "react";
import axios from "axios";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onFormSubmit(event) {
        event.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:8080/api/login",
            data: {
                username: this.state.username,
                password: this.state.password
            },
            // headers: { "Content-Type": "multipart/form-data" },
        }).then(response => {
            console.log(response.data)
            if(response.data != null)
                this.setState(this.initialState)
            alert("Succesvol ingelogd")
        }).catch(error => {
            console.log("Something went wrong " + error);
            alert("Something went wrong " + error);
        });
    }

    handleChange(event){
        const {id, value} = event.target
        this.setState({
                [id] : value
        });
    }

    render() {
        return (
            <main>
                <div className="koptekst">
                    <h1>Inloggen</h1>
                </div>
                <form className="formulier" onSubmit={this.onFormSubmit}>
                    <label>Gebruikersnaam: </label>
                    <input
                        id="username"
                        type="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Wachtwoord: </label>
                    <input
                        id="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <hr />
                    <button className='knop' type='submit'>Inloggen</button>
                </form>
            </main>
        )
    }


}

