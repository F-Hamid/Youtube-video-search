import "./style.css";
import React from "react";

const VideoRender = ({ video, onVidoSelect }) => {
  return (
    <div onClick={() => onVidoSelect(video)} className="item videoitem">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="VideoThumbnail"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>{" "}
      </div>
    </div>
  );
};

export default VideoRender;
