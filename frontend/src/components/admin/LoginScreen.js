import './Admin.css';
import React, {Component} from "react";
import axios from "axios";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState;
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    initialState = {
        username: "",
        password: ""
    }

    onFormSubmit(event) {
        event.preventDefault();

        const userCredentials = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:8080/api/login",
            {
                userCredentials
            }
        ).then(() => {
            alert("Succesvol ingelogd")
            this.setState(this.initialState)
        }).catch(error => {
            alert("Something went wrong " + error);
            this.setState(this.initialState)
        });


    }

    handleChange(event) {
        const {id, value} = event.target
        this.setState({
            [id]: value
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
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Wachtwoord: </label>
                    <input
                        id="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <hr/>
                    <button className='knop' type='submit'>Inloggen</button>
                </form>
            </main>
        )
    }


}

