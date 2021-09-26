import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="Videos_card" onClick={() => {onVideoSelect(video)}}>
      <div className="vid_thumbnail" >
        <img
        id="vd_imgs"
          height="150"
          width="250"
          src={video.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="vid_title">
        <b>{video.snippet.title}</b>
      </div>

    </div>
  );
}

export default VideoItem;
