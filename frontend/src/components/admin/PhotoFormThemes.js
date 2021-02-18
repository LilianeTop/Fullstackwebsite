import React, {Component} from "react";

export default class Themes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: []
        }
        this.renderThemes = this.renderThemes.bind(this)
        this.changeTheme = this.changeTheme.bind(this)

    }
    changeTheme(event){
        const tempThemes = this.state.themes;
        const themesTemp = {id: event.target.id, name: event.target.name, status: event.target.checked}

        if(!event.target.checked){
            tempThemes.splice(this.id, 1);
        } else {
            tempThemes.push(themesTemp);
        }

        this.setState({
            themes : tempThemes
        })
    }
    renderThemes() {
        const themes = ['Landschap', 'Stad', 'Buiten', 'Reizen', 'Water', 'Mensen', 'Abstract', 'Industrieel', 'Scenes'];
        return themes.map((theme, i) => {
            return (
                <label key={i} > {theme}
                    <input
                        type='checkbox'
                        name={theme}
                        onChange={this.changeTheme}
                        // checked={this.state.themes[theme]}
                        value={this.state.themes[theme]}/>
                </label>
            )
        })
    }

    render() {
        return(
            <div>
                <p>Kies de thema's</p>
                {this.renderThemes()}
            </div>
        )
    }

}