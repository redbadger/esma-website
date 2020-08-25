import React, { useState } from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { mq, BreakPoint } from "../../util/mq";

const withPrefixes = (style) => `
    ${style}
    -webkit-${style}
    -moz-${style}
    -ms-${style}
`

const cssPills = css`
    ${withPrefixes`box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);`}
    ${mq(BreakPoint.md)} {
        ${withPrefixes`box-shadow: none;`}
    }
`

const Pill = ({ name, href }, key, css) => (
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
        font-size: 1.25em;
        font-weight: 600;
        color: var(--midnight);
        padding: 12px;

        ${mq(BreakPoint.md)} {
            display: none;
            ${withPrefixes`user-select: none;`}
            padding: 12px 0;
        }
    `
    let cssPill = css`
        ${withPrefixes`user-select: none;`}
        padding: 8px 12px;
        background-color: var(--white);
        border-top: solid 1px var(--light-grey);

        ${mq(BreakPoint.md)} {
            display: inline-block;
            border-radius: 9999px;
            border: solid 1px ${colorActive};
            margin: 4px;
            padding: 8px;
        }
    `

    let cssActive = css`
        ${mq(BreakPoint.md)} {
            background-color: ${colorActive};
        }
    `

    let cssList = css`
        display: ${isOpen ? "block" : "none"};

        ${mq(BreakPoint.md)} {
            display: block;
        }
    `

    return <div css={cssPills}>
        <div css={cssContent} onClick={() => setOpen(!isOpen)}>Contents<span className="icon"><FontAwesomeIcon icon={icon} /></span></div>
        <ol css={cssList}>
            {pills.map((p, i) => Pill(p, i, [p.isActive && cssActive, cssPill] ))}
        </ol>
    </div>
};

Pills.propTypes = {
  pills: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, href: PropTypes.string }).isRequired),
  colorActive: PropTypes.string.isRequired
};

export default Pills;
