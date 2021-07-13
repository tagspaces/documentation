import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { makeStyles } from "@material-ui/core/styles";
import MUTooltip from "@material-ui/core/Tooltip";


export function Tooltip(props) {
  const classes = useStylesBootstrap();
  return <MUTooltip classes={classes} arrow placement="top" {...props}></MUTooltip>;
}

export function ProFeature() {
  return (
    <MUTooltip
      arrow
      interactive
      title={
        <>
          This feature is available in the <a href="https://www.tagspaces.org/products/pro">Pro version</a>.
        </>
      }
    >
      <profeature />
    </MUTooltip>
  );
}

export function EntFeature() {
  return (
    <MUTooltip arrow title="This feature is available in the Enterprise version">
      <entfeature />
    </MUTooltip>
  );
}

export function CenteredImage(props) {
  const { caption, src, showCaption = false } = props;

  return (
    <figure>
      <img alt={caption} src={src} className="img-responsive center-block" />
      {showCaption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function CenteredVideo(props) {
  const { caption, src, showCaption = false } = props;

  return (
    <figure>
      <video
        src={src}
        autoPlay="true"
        loop="true"
        className="img-responsive center-block"
        style={{ maxWidth: 700 }}
      ></video>
      {showCaption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
