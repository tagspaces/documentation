import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { makeStyles } from "@material-ui/core/styles";
import MUTooltip from "@material-ui/core/Tooltip";
import Modal from "@material-ui/core/Modal";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Video from "./Video";

export function FeatureList({ data, featureId }) {
  // var(--ifm-color-secondary-darker)
  return (
    <div style={{ marginBottom: 50, marginLeft: 30, marginRight: 30 }}>
      {data.title && (
        <h2>
          {data.title}
          <a
            className="hash-link"
            href={"#" + featureId}
            title="Direct link to heading"
          />
        </h2>
      )}
      {data.description && <div>{data.description}</div>}
      <Spacer height={10} />
      <ul className="list-unstyled">
        {data.items &&
          data.items.length > 0 &&
          data.items.map((item, idx) => (
            <li key={idx}>
              <span className="checkbox" />
              {item}
            </li>
          ))}
      </ul>
      {data.actionButtonLink && data.actionButtonTitle && (
        <Link
          className="button button--outline button--primary"
          to={useBaseUrl(data.actionButtonLink)}
        >
          {data.actionButtonTitle}
        </Link>
      )}
    </div>
  );
}

export function FeatureCard({ data }) {
  return (
    <div className="col col--4">
      <h3 className="feature-title">
        {data.icon}
        &nbsp;{data.title}
      </h3>
      <p>{data.description}</p>
      <Link to={data.actionButtonLink}>{data.actionButtonTitle}</Link>
    </div>
  );
}

export function FeatureImage({ data }) {
  const { imageAlt, imageUrl, imageHref } = data;
  return <FullScreenImage caption={imageAlt} src={imageUrl} link={imageHref} />;
}

export function Spacer({ height, id }) {
  const h = height || 50;
  return <div style={{ height: h }} id={id} />;
}

export function FAQ({ data }) {
  return (
    <>
      <div id={data.id}>
        <Spacer height={50} />
        <strong>{data.question}</strong>
      </div>
      <div>
        <Spacer height={10} />
        {data.answer}
      </div>
    </>
  );
}

const useStylesBootstrap = makeStyles((theme) => ({
  tooltip: {
    fontSize: 14,
    backgroundColor: "#59595a",
  },
  //  arrow: {},
}));

export function Tooltip(props) {
  const classes = useStylesBootstrap();
  return (
    <MUTooltip classes={classes} arrow placement="top" {...props}></MUTooltip>
  );
}

export function ProFeature() {
  return (
    <MUTooltip
      arrow
      interactive
      title={
        <>
          This feature is available in the{" "}
          <a href="/products/pro/">Pro version</a>.
        </>
      }
    >
      <profeature />
    </MUTooltip>
  );
}

export function EntFeature() {
  return (
    <MUTooltip
      arrow
      title="This feature is available in the Enterprise version"
    >
      <entfeature />
    </MUTooltip>
  );
}

export function CenteredImage(props) {
  const { caption, src, showCaption = false, maxWidth = "100%" } = props;

  return (
    <figure style={{ textAlign: "center" }}>
      <img
        alt={caption}
        src={src}
        loading="lazy"
        style={{ width: "100%", maxWidth: maxWidth }}
        className="img-responsive img-rounded center-block"
      />
      {showCaption && (
        <figcaption style={{ fontSize: "small" }}>{caption}</figcaption>
      )}
    </figure>
  );
}

export function FullScreenImage(props) {
  const { caption, src, showCaption = false, maxWidth = "100%", link } = props;

  const [open, setOpen] = React.useState(false);

  if (!src) {
    return <></>;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const image = showCaption ? (
    <figure style={{ textAlign: "center" }}>
      <img
        alt={caption}
        loading="lazy"
        src={src}
        style={{ width: "100%", maxWidth, marginTop: 30 }}
        className="img-shadow img-rounded"
      />
      {showCaption && (
        <figcaption style={{ fontSize: "small" }}>{caption}</figcaption>
      )}
    </figure>
  ) : (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <img
        src={src}
        loading="lazy"
        style={{
          marginTop: 30,
          width: "100%",
          maxWidth,
        }}
        className="img-shadow img-rounded"
        alt={caption}
      />
    </div>
  );

  return link ? (
    <>
      <Link
        to={link}
        style={{
          marginBottom: 50,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {image}
      </Link>
    </>
  ) : (
    <>
      <span
        onClick={handleOpen}
        style={{
          marginBottom: 50,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          cursor: "zoom-in",
        }}
      >
        {image}
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        <DialogContent
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconButton
            title="Use ESC to close"
            aria-label="close"
            style={{
              position: "absolute",
              color: "white",
              right: 5,
              top: 5,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <img
            // title="Click to close"
            src={src}
            className="img-rounded"
            style={{
              maxHeight: "90%",
              maxWidth: "90%",
              cursor: "zoom-out",
            }}
            alt={caption}
          />
        </DialogContent>
      </Modal>
    </>
  );
}

export function CenteredVideo(props) {
  const {
    caption,
    src,
    posterUrl,
    showCaption = false,
    maxWidth = 700,
    autoPlay = true,
  } = props;

  return (
    <figure style={{ textAlign: "center", margin: 0 }}>
      <video
        src={src}
        poster={posterUrl}
        autoPlay={autoPlay}
        loop
        controls
        className="img-responsive center-block img-shadow img-rounded"
        style={{ width: "100%", maxWidth }}
      ></video>
      {showCaption && (
        <figcaption style={{ fontSize: "small" }}>{caption}</figcaption>
      )}
    </figure>
  );
}

export function TOC(props) {
  const { items, hideFirst } = props;
  const tocItems = [];
  for (let index in items) {
    tocItems.push(
      // color: "#b6eadb",
      <li>
        <span className="checkbox" />
        <Link to={"#" + index}>&nbsp;{items[index].title}</Link>
      </li>
    );
  }
  hideFirst && tocItems.shift();
  return tocItems ? <ul className="list-unstyled">{tocItems}</ul> : <></>;
}

export function FeatureBlock(props) {
  const { features, featureId, swapped, oneColumn, customVisualEl } = props;

  let customElement = customVisualEl;
  if (features[featureId].videoUrl) {
    const { visualCaption } = features[featureId];
    customElement = (
      <CenteredVideo
        caption={visualCaption || visualCaption}
        src={features[featureId].videoUrl}
        posterUrl={features[featureId].posterUrl}
        showCaption={visualCaption}
      />
    );
  }

  if (features[featureId].youtubeId) {
    const { visualCaption, trackingId, youtubeId, posterUrl } =
      features[featureId];
    customElement = (
      <Video
        trackingId={trackingId || trackingId}
        title={visualCaption || visualCaption}
        youtubeId={youtubeId}
        posterUrl={posterUrl || posterUrl}
        height={400}
      />
    );
  }

  const twoColumn = swapped ? (
    <div className="row">
      <div className="col col--6 vertical-center">
        {customElement ? (
          customElement
        ) : (
          <FeatureImage data={features[featureId]} />
        )}
      </div>
      <div className="col col--6 vertical-center">
        <FeatureList data={features[featureId]} featureId={featureId} />
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col col--6 vertical-center">
        <FeatureList data={features[featureId]} featureId={featureId} />
      </div>
      <div className="col col--6 vertical-center">
        {customElement ? (
          customElement
        ) : (
          <FeatureImage data={features[featureId]} />
        )}
      </div>
    </div>
  );
  return (
    <>
      <Spacer height={oneColumn ? 20 : 100} id={featureId} />
      {oneColumn ? (
        <div className="row">
          <div className="col">
            {features[featureId].title && <h2>{features[featureId].title}</h2>}
            {features[featureId].description && (
              <p>{features[featureId].description}</p>
            )}
            {customElement && customElement}
          </div>
        </div>
      ) : (
        twoColumn
      )}
    </>
  );
}
