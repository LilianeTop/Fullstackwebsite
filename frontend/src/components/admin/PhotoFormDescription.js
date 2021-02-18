import React, {Component} from "react";

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
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
                <label>Geef titel of beschrijving van het werk. De ingegeven tekst is zichtbaar als ondertiteling bij de foto</label>
                <br />
                <textarea className='veld'
                          value={this.state.description}
                          name='description'
                          placeholder="Geef titel of beschrijf het werk"
                          onChange={this.handleChange}
                />
            </div>
        )
    }


}