import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint, screenSizes } from "../../util/mq";
import useWindowSize from "../../util/useWindowSize";

const commitmentsEntryStyles = css`
  margin-top: 5.25rem;
  font-size: 1.125rem;
  line-height: 1.875rem;
  text-align: left;

  > div {
    column-gap: 1rem;
    display: grid;
  }

  .right-shift {
    grid-template-columns: 6fr 5fr;

    .homepage-image-wrapper,
    svg {
      justify-self: end;
    }
  }

  .left-shift {
    grid-template-columns: 5fr 6fr;

    .homepage-image-wrapper,
    svg {
      justify-self: start;
    }
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .homepage-image-wrapper {
    width: 100%;
    max-width: 19rem;
    max-height: 17.75rem;
    ${mq(BreakPoint.lg)} {
      width: 100%;
      max-width: 25rem;
      max-height: 23.75rem;
    }
  }

  svg {
    max-height: 19.5rem;
    max-width: 19.5rem;
  }
`;

const commonStyles = css`
  .coming-soon {
    font-weight: 600;
    margin-top: -1.5rem;
    display: block;
    margin-bottom: 2.25rem;
  }

  p {
    margin-bottom: 2.25rem;
  }

  h3 {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
`;

const mobileStyles = css`
  margin-bottom: 3.875rem;
  h3 {
    font-size: 1.125rem;
    line-height: 2.125rem;
  }

  svg {
    max-width: 100%;
  }
`;

type CommitmentsEntryProps = {
  image: React.ReactElement;
  content: React.ReactElement;
  shiftRight: boolean;
};

const CommitmentsEntry = ({
  image,
  content,
  shiftRight,
}: CommitmentsEntryProps) => {
  const { width } = useWindowSize();

  if (width < screenSizes[BreakPoint.md]) {
    return (
      <div css={[commonStyles, mobileStyles]}>
        {content}
        {image}
      </div>
    );
  }

  return (
    <div css={[commonStyles, commitmentsEntryStyles]}>
      <div className={shiftRight ? "right-shift" : "left-shift"}>
        {!shiftRight && (
          <>
            {image}
            {content}
          </>
        )}

        {shiftRight && (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </div>
  );
};

export default CommitmentsEntry;
