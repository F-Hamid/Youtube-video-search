import React from "react";
import SearchBar from "./SearchBar";

class VideoSearch extends React.Component {
  
  userSearch = (term) => {
    this.props.onTermSubmit(term);
  };
  render() {
    return <SearchBar userText={this.userSearch} />;
  }
}

export default VideoSearch;
