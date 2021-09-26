import React from "react";

import { Paper, Typography } from "@material-ui/core";

// Explain destructuring...
const VideoDetail = ({ video: { id: { videoId }, snippet: { title, channelTitle, description } } }) => {
  // TODO - Spinner
  if (!videoId) return <div>Search to view videos...</div>;
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "auto" }}>
        <iframe
          frameBorder="0"
          height="450px"
          width="100%"
          title="Video Player"
          src={videoSrc}
          allow="fullscreen"
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h5">
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {channelTitle}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default VideoDetail;