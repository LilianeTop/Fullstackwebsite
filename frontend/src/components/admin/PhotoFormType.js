import React, {Component} from "react";

export default class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: "photo",
            specials: ""
        }

        this.renderSpecials = this.renderSpecials.bind(this)
        this.changeSpecial = this.changeSpecial.bind(this)

    }
    changeSpecial(event){
        const {name, value } = event.target
        if(name === 'sort' && value === 'photo'){
            this.setState( {[name]: value, specials: null})
        } else {
            this.setState({[name] : value})
        }
    }
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

    render() {
        return(
            <div>
                <label>Foto
                    <input
                        type="radio"
                        name="sort"
                        value="photo"
                        checked={this.state.sort === "photo"}
                        onChange={this.changeSpecial}
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
            </div>
        )
    }
}

