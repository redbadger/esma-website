import React from "react";
import { css } from "@emotion/core";
import Button from "../common/button";
import BulbIcon from "../../svg/lightbulb.svg";
import { Colors } from "../../util/colors";

const timelineEntryAdditionalStyles = css`
  height: 43.75rem;
  background: ${Colors.taupe};
  border: 0.3125rem solid ${Colors.white};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    color: ${Colors.midnight};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 1.25rem;
  }

  button {
    margin-top: 1rem;
    width: 10rem;
    line-height: 1.875rem;
  }

  svg {
    margin-bottom: 1.5rem;
  }
`;

const TimelineEntryAdditional = () => {
  return (
    <div css={timelineEntryAdditionalStyles}>
      <BulbIcon />
      <h2>Why social mobility is better for everyone</h2>
      <p>
        For decades, research on educational inequality has concentrated on the
        school sector where there has been a striking and persistent attainment
        gap between children from lower and higher socio-economic groups.
      </p>

      <p>
        In more recent years, the evidence base has grown to expose the
        reproduction of inequality in higher education and the labour market.
      </p>

      <p>
        This has heightened the need for joined-up, cross-sector and
        collaborative approaches to respond to the scale of the challenge.
      </p>
      <Button label="Read research" variant="dark" onClick={() => {}} />
    </div>
  );
};

export default TimelineEntryAdditional;
