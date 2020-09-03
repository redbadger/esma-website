import React from "react";
import TimelineImage from "./timeline-image";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import Arrow, { arrowHoverCss } from "../common/arrow";
import { Link } from "gatsby";
import { TimelineEntryData } from "./types";

const timelineEntryStyles = css`
  transition: all 0.333s ease-out 0s;
  :hover, :target {
    transform: translate3d(0px, -1px, 0px);
    box-shadow: rgba(0, 0, 0, 0.15) 0rem 1rem 1rem;
    .arrow {
      ${arrowHoverCss}
    }
  }

  height: 43.75rem;
  background: var(--white);
  color: var(--midnight);
  margin-bottom: 1.875rem;
  position: relative;

  .timeline-image-wrapper {
    height: 25rem;
  }

  ${mq(BreakPoint.lg)} {
    h2 {
      max-width: 60%;
    }
  }

  h2 {
    max-width: 55%;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    margin: 1.5rem;
    margin-right: 0;
    float: left;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  svg {
    float: right;
    margin: 1.5rem;
  }

  .separator {
    clear: both;
  }

  .read-more {
    cursor: pointer;
    font-weight: 600;
    text-align: left;
    width: 50%;
    margin-left: 1.5rem;
    height: 2rem;
    position: absolute;
    bottom: 1rem;
  }
`;

type TimelineEntryProps = TimelineEntryData

const TimelineEntry = ({
  title,
  imageName,
  description,
  icon,
  destination,
  anchor
}: TimelineEntryProps) => {
  const Icon = icon;
  return (
    <Link to={destination}>
      <div css={timelineEntryStyles} id={anchor}>
        <TimelineImage imageName={imageName} />
        <h2>{title}</h2>
        <Icon />
        <div className="separator" />
        <p>{description}</p>
        <div className="read-more">
          Read more
          <Arrow />
        </div>
      </div>
    </Link>
  );
};

export default TimelineEntry;
