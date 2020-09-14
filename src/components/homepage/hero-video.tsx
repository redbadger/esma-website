import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Video } from "gatsby-video";

export const PureHeroVideo = ({ data }) => {
  const videos = data.file.childVideoFfmpeg;
  return (
    <Video
      autoPlay
      muted
      loop
      className="hero-image-wrapper"
      sources={[videos.webm, videos.mp4]}
    />
  );
};

const HeroVideo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "homepage-hero.mp4" }) {
        childVideoFfmpeg {
          webm: transcode(
            outputOptions: ["-crf 20", "-b:v 0"]
            maxWidth: 900
            maxHeight: 480
            fileExtension: "webm"
            codec: "libvpx-vp9"
          ) {
            width
            src
            presentationMaxWidth
            presentationMaxHeight
            originalName
            height
            fileExtension
            aspectRatio
          }
          mp4: transcode(
            maxWidth: 900
            maxHeight: 480
            fileExtension: "mp4"
            codec: "libx264"
          ) {
            width
            src
            presentationMaxWidth
            presentationMaxHeight
            originalName
            height
            fileExtension
            aspectRatio
          }
        }
      }
    }
  `);

  return <PureHeroVideo data={data} />;
};

export default HeroVideo;
