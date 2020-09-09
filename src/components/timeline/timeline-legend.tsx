import React from "react";
import { TimelineLegendData } from "./types";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import slugify from "slugify";
import { Link } from "gatsby";

const containerStyles = css`
  background-color: white;
  height: 4.5rem;
  bottom: 12rem;
  position: relative;
  margin-bottom: 5rem;

  padding-left: 2rem;
  padding-right: 2rem;

  ${mq(BreakPoint.md)} {
    bottom: 9rem;
  }
  ${mq(BreakPoint.xl)} {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;

const timelineLegendStyles = css`
  display: flex;
  width: 1px;
  height: 14.5rem;
  color: var(--midnight);
  border-left: 1px solid var(--light-grey);
  bottom: -2.5rem;
  justify-content: space-between;
  position: relative;

  flex-direction: column;

  ${mq(BreakPoint.md)} {
    bottom: -3.5rem;
    border-top: 1px solid var(--light-grey);
    flex-direction: row;
    width: 94%;
    margin-left: 3%;
    height: 1px;
  }
`;

const entryWrapperStyles = css`
  border: 1px solid;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50px;
  display: flex;
  background-color: var(--white);
  position: relative;
  align-items: center;
  border-color: var(--highlight-color);

  left: -1.125rem;

  ${mq(BreakPoint.md)} {
    left: 0;
    justify-content: center;
    bottom: 1.5rem;
    flex-direction: column;
    width: 3rem;
    height: 3rem;
  }

  svg {
    min-width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;

    ${mq(BreakPoint.md)} {
      margin-left: 0;
      margin-top: 3rem;
      min-height: 3rem;
      width: 1.5rem;
    }
    ${mq(BreakPoint.lg)} {
      margin-top: 1.5rem;
    }
  }

  span {
    white-space: nowrap;
    position: relative;
    left: 2.5rem;
    font-weight: 600;

    ${mq(BreakPoint.md)} {
      left: 0;
      bottom: -2rem;
      white-space: unset;
    }

    ${mq(BreakPoint.lg)} {
      white-space: nowrap;
    }
  }
`;

type TimelineLegendProps = {
  entries: TimelineLegendData[];
};

const TimelineLegend = ({ entries }: TimelineLegendProps) => {
  return (
    <div css={containerStyles}>
      <div css={timelineLegendStyles}>
        {entries.map((entry, i) => {
          const titleSlug = slugify(entry.title, { lower: true });
          const link = `/issues-chronology/${titleSlug}/`;
          const Icon = entry.icon;
          return (
            <Link key={i} to={link} className={titleSlug}>
              <div key={i} css={entryWrapperStyles}>
                <Icon />
                <span>{entry.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineLegend;
