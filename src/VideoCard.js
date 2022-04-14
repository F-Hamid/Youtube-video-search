import React from "react";
import VideoRender from "./VideoRender";

const VideoCard = (props) => {
  const videos = props.results.map((video) => {
    return (
      <VideoRender
        onVidoSelect={props.onVidoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return <div className=" ui relaxed divided list">{videos}</div>;
};

export default VideoCard;
