import React, { useState, useEffect } from "react";

const VideoYT = (props) => {
  const [videoStarted, startVideo] = useState(false);

  const showVideo = () => {
    startVideo(true);
  };

  return (
    <>
      {videoStarted ? (
        <iframe
          title={props.title}
          style={{
            borderRadius: 7,
            width: "100%",
            height: props.height || 600,
            marginBottom: 20,
          }}
          src={
            "https://www.youtube-nocookie.com/embed/" +
            props.youtubeId +
            "?autoplay=1&rel=0&cc_load_policy=1&modestbranding=1"
          }
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          onClick={showVideo}
          title={"Click to play YouTube video: " + props.title}
          className="text--center"
          style={{ position: "relative", borderRadius: 7, marginBottom: 20 }}
        >
          <img
            src={props.posterUrl}
            className="img-shadow"
            alt={props.title}
            style={{ borderRadius: 7 }}
          />
          <svg
            className="playButton"
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
              padding: "20px calc(45% - 70px)",
              position: "absolute",
              top: 0,
              left: 0,
              display: "block",
              opacity: "0.85",
              cursor: "pointer",
              transition: "opacity 150ms",
            }}
            viewBox="0 0 200 200"
            alt="Play video"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              strokeWidth="15"
              stroke="#eaeaea"
            />
            <polygon points="70, 55 70, 145 145, 100" fill="#eaeaea" />
          </svg>
        </div>
      )}
    </>
  );
};

export default VideoYT;
