import "./style.css";
import React from "react";
// import VideoSearch from "./VideoSearch";

class SearchBar extends React.Component {
  state = { term: "" };
  Text = (e) => {
    e.preventDefault();
    this.props.userText(this.state.term);
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.Text}>
          <button className="btn btn-outline-secondary">Video Search</button>
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.setState({ term: e.target.value })}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
