import React, {Component} from "react";

export default class ImageURL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: ""
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    render() {
        return (
            <div>
                <p>klik op kies bestand</p>
                <input type='file'
                       name='selectedFile'
                       onChange={this.handleChange}
                />
            </div>
        )
    }

}