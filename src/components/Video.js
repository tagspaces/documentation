import React, { useState, useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const Video = (props) => {
  const [videoStarted, startVideo] = useState(false);

  const showVideo = () => {
    startVideo(true);
    if (ExecutionEnvironment.canUseDOM && window.plausible) {
      // const event = url + "#" + currentVersion;
      window.plausible(props.trackingId || props.youtubeId);
    }
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
          title={props.title}
          className="text--center"
          style={{ position: "relative", borderRadius: 7 }}
        >
          <img src={props.posterUrl} className="img-shadow" alt={props.title} style={{ borderRadius: 7 }} />
          <svg
            className="playButton"
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: props.height || 600,
              padding: "40px calc(45% - 70px)",
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
            <circle cx="100" cy="100" r="90" fill="none" strokeWidth="15" stroke="#eaeaea" />
            <polygon points="70, 55 70, 145 145, 100" fill="#eaeaea" />
          </svg>
        </div>
      )}
    </>
  );
};

export default Video;
