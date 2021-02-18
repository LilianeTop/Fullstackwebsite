import React, {Component} from 'react';

export default class Colors extends Component{
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }

        this.renderColors = this.renderColors.bind(this)
        this.changeColor = this.changeColor.bind(this)
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

    renderColors() {
        const colors = ['Blauw', 'Geel', 'Groen', 'Rood', 'Oranje', 'Paars', 'Kleurrijk'];
        return colors.map((color, i) => {
            return (
                <label key={i} >
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

    render() {
        return (
            <div>
                <p>Kies de kleuren:</p>
                { this.renderColors() }
            </div>
        )
    }
}