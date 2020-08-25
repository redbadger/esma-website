import React, { useState } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import PropTypes from "prop-types";
import { Colors } from "../../util/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const cssPills = css`
    ${tw`container`}
`

const Pill = ({ name, href, isActive }, key, css) => (
    <li css={css} key={key}><a href={href}>{name}</a></li>
)

const Pills = ({ pills, colorActive }) => {
    const [isOpen, setOpen] = useState(false);

    const icon = isOpen ? faChevronUp : faChevronDown;

    const cssContent = css`
        .icon {
            float: right;
            padding: 0 0.5em;
        }
        ${tw`md:hidden select-none`}
    `
    let cssPill = css`
        font-size: 16px;
        font-weight: 600;
        border-color: ${colorActive};
        ${tw`md:inline-block md:rounded-full md:border md:border-solid md:m-1 md:p-2`}
        ${tw`border-0 select-none bg-white`}
    `

    let cssActive = css`
        background-color: ${colorActive};
    `

    return <div css={cssPills}>
        <h2 css={cssContent} onClick={() => setOpen(!isOpen)}>Contents<span className="icon"><FontAwesomeIcon icon={icon} /></span></h2>
        <ol css={[!isOpen && tw`hidden`, tw`md:block`]}>
            {pills.map((p, i) => Pill(p, i, [cssPill, p.isActive && cssActive] ))}
        </ol>
    </div>
};

Pills.propTypes = {
  pills: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, href: PropTypes.string }).isRequired),
  colorActive: PropTypes.string.isRequired
};

export default Pills;
