import React, { useState } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import PropTypes from "prop-types";
import { Colors } from "../../util/colors";

const cssPills = css`
    ${tw`container`}
`
const cssPill = css`
    background-color: ${Colors.taupe};
    ${tw`md:rounded-full md:border-2 md:inline-block md:border-black md:border-solid md:m-1 px-2 py-1`}
`

const Pill = ({ name, href }, idx) => (
    <li css={cssPill} key={idx}><a href={href}>{name}</a></li>
)

const Pills = ({ pills }) => {
    const [isOpen, setOpen] = useState(false);

    const buttonChar = isOpen ? "↑" : "↓";

    const cssContent = css`
        ::after {
            content: "${buttonChar}";
            position: absolute;
            right: 0;
        }
        ${tw`md:hidden`}
    `

    return <div css={cssPills}>
        <h2 css={cssContent} onClick={() => setOpen(!isOpen)}>Contents</h2>
        <ol css={[!isOpen && tw`hidden`, tw`md:block`]}>
            {pills.map(Pill)}
        </ol>
    </div>
};

Pills.propTypes = {
  pills: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, href: PropTypes.string }).isRequired),
};

export default Pills;
