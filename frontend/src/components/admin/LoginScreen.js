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
        alert("Inside onFormSubmit before axios " +
            this.state.username + " " + this.state.password)//works
//FIXME: the problem lies here but I have no idea what it is
        axios({
            method: "post",
            url: "http://localhost:8080/api/login",
            data: {
                username: this.state.username,
                password: this.state.password
            }
            // headers: { "Content-Type": "multipart/form-data" },
        }).then(response => {
            alert("Succesvol ingelogd" + response.data)
        }).catch(error => {
            if (error.request) {

                alert("it's the request")

            } if (error.response) {

                alert("it's the response")

            } if (error.message) {

                alert("it's the message")

            }
            // console.log("Something went wrong " + error);
            // alert("Something went wrong " + error + this.username);//returns undefined
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

