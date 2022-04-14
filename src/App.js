import React from "react";
import Api from "./Api";
import VideoSreach from "./VideoSearch";
import VideoCard from "./VideoCard";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { results: [], selectedVideo: null };

  componentDidMount() {
    this.onSearch("Children s tories");
  }
  onSearch = async (term) => {
    const response = await Api.get("/search", {
      params: { q: term },
    });

    this.setState({
      results: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVidoSelect = (video) => {
 
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <div className="ui container">
          <VideoSreach onTermSubmit={this.onSearch} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wild column">
                <VideoCard
                  results={this.state.results}
                  onVidoSelect={this.onVidoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
