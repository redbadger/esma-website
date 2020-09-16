import React from "react";
import { css } from "@emotion/core";

const commitmentsEntryStyles = css`
  font-size: 1.125rem;
  line-height: 1.875rem;
  text-align: left;

  > div {
    column-gap: 11.75rem;
    display: grid;
  }

  .right-shift {
    grid-template-columns: 6fr 5fr;
  }

  .left-shift {
    grid-template-columns: 5fr 6fr;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    margin-top: 1.25rem;
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
  return (
    <div css={commitmentsEntryStyles}>
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
