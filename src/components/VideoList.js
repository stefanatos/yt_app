import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderdVideos = videos.map((video, i) => (
    <VideoItem key={i} video={video} onVideoSelect={onVideoSelect} />
  ));
  return <div className='ui relaxed divided list'>{renderdVideos}</div>;
};

export default VideoList;
