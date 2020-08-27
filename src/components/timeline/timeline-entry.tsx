import React from "react";
import TimelineImage from "./timeline-image";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const timelineEntryStyles = css`
  transition: all 0.333s ease-out 0s;
  :hover {
    transform: translate3d(0px, -1px, 0px);
    box-shadow: rgba(0, 0, 0, 0.15) 0rem 1rem 1rem;
    .arrow {
      width: 2.5rem;
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

  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .arrow {
    display: inline-block;
    height: 0.75rem;
    margin-left: 0.5rem;
    position: relative;
    transition: width 0.2s ease;
    vertical-align: middle;
    width: 2rem;

    &::after {
      border-right: 0.125rem solid var(--midnight);
      border-top: 0.125rem solid var(--midnight);
      content: "";
      display: block;
      height: 0.625rem;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 0.625rem;
    }

    &::before {
      border-bottom: 0.125rem solid var(--midnight);
      content: "";
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }
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

interface Props {
  title: string;
  imageName: string;
  description: string;
  icon: React.ElementType;
}

const TimelineEntry = ({ title, imageName, description, icon }: Props) => {
  const Icon = icon;
  return (
    <a href="#">
      <div css={timelineEntryStyles}>
        <TimelineImage imageName={imageName} />
        <h2>{title}</h2>
        <Icon />
        <div className="separator" />
        <p>{description}</p>
        <div className="read-more">
          Read more
          <span className="arrow" />
        </div>
      </div>
    </a>
  );
};

export default TimelineEntry;
