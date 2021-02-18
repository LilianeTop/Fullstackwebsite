import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
state = {searchWord: ""};

change = (event) => {
  this.setState({searchWord: event.target.value});

}

search = (event) => {
  event.preventDefault();
  this.props.code(this.state.searchWord);
}


  render(){
    return (
      <form onSubmit={this.search}>
        <input onChange={this.change} type="text" placeholder="Zoek per onderwerp!" />
      </form>
    );
  }
}

export default SearchBar;
