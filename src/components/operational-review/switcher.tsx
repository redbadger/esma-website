import React from "react";
import { css } from "@emotion/core";
import { Panel, PanelSection } from "./panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const switcherCss = css`
  margin-top: 1.5rem;
  width: 100%;
  box-shadow: 0 0 0.25rem 0.0625rem rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 1.125rem;

  cursor: pointer;

  ul {
    padding: 0;
    display: none;
    list-style: none;
  }
  li {
    padding: 0.75rem;
  }
  li ::before {
    display: none;
  }
  ul.open {
    display: block;
  }

  .preview {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    box-shadow: 0 0 0.25rem 0.0625rem rgba(0, 0, 0, 0.2);
  }

  .icon {
    float: right;
    padding: 0 0.5em;
    transition: 0.6s transform ease-in-out;
    transform: rotate(180deg);
  }
  .icon.open {
    transform: rotate(-360deg);
  }
`;

const Switcher = ({
  setter,
  panel,
  currentPanelSection,
}: {
  setter: (x: string) => void;
  panel: Panel;
  currentPanelSection: PanelSection;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div css={switcherCss}>
      <div className="preview" onClick={() => setIsOpen(!isOpen)}>
        <h3>{currentPanelSection.name}</h3>
        <span className={["icon", isOpen ? "open" : ""].join(" ")}>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <ul className={isOpen ? "open" : ""}>
        {Object.keys(panel).map(key => (
          <li
            key={key}
            onClick={() => {
              setter(key);
              setIsOpen(false);
            }}
          >
            {panel[key].name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Switcher;
