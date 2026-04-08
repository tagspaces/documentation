import React from "react";
import Carousel from "react-material-ui-carousel";
import { Spacer, CenteredImage, FullScreenImage } from "@site/src/components/CommonBlocks";
import { useColorMode } from "@docusaurus/theme-common";

export default function ImageSlider(props) {
  const { items, height = 480, width = "100%", showCaption = false, sidePadding = "0" } = props;

  if (!items || items.length < 1) {
    return;
  }

  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  // https://github.com/Learus/react-material-ui-carousel#props  className="carouselStyling"
  return (
    <div style={{ width, margin: "0 auto", padding: "0 " + sidePadding + "px" }}>
      <Carousel
        navButtonsAlwaysVisible={false}
        height={height}
        indicatorContainerProps={{
          style: {
            marginTop: 35,
          },
        }}
      >
        {items.map((item, i) => (
          <FullScreenImage
            key={item.imageUrl}
            showCaption={showCaption}
            loading="eager"
            caption={item.imageAlt}
            src={isDarkTheme && item.imageDarkUrl ? item.imageDarkUrl : item.imageUrl}
          />
        ))}
      </Carousel>
    </div>
  );
}
