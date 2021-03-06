import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import Switcher from "./switcher";
import { Panel } from "./panel";

const panelCss = css`
  color: var(--midnight);
  font-weight: 300;
  margin-bottom: 2rem;

  a {
    text-decoration: underline;
  }

  ul {
    padding: 0.75rem;
    list-style: none;
    list-style-position: inside;
  }

  li::before {
    display: inline-block;
    width: 0.75rem;
    content: "";
  }
  p {
    padding: 0.75rem;
    font-size: 1.125rem;
    line-height: 2.125rem;
    text-align: center;
  }
  strong {
    font-weight: 600;
  }
  strong::after {
    content: " — ";
    font-weight: 300;
  }

  header {
    display: none;
  }

  ${mq(BreakPoint.md)} {
    padding: 0 2.5rem;

    header {
      display: block;
      margin: 1.5rem 0;
    }

    .panel-members {
      display: flex;
      align-items: flex-start;
      margin-bottom: 4.5rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      display: block;
    }
  }
  ${mq(BreakPoint.lg)} {
    padding: 0 10rem;
  }
`;

const memberCss = {
  container: { display: "flex" },
  name: { flexGrow: 0, flexShrink: 0 },
  title: { flexGrow: 1 }
};

const EsmaPanel = ({ panel }: { panel: Panel }) => {
  const [panelSection, setPanelSection] = React.useState(Object.keys(panel)[0]);

  return (
    <section css={panelCss}>
      <header>
        <h2>ESMA Panel</h2>
        <p>
          The energy and interest for ESMA has been incredible attracting the
          support of many senior and inspirational leaders on social mobility.
        </p>
      </header>
      <div className="panel-members">
        <Switcher
          panel={panel}
          setter={setPanelSection}
          currentPanelSection={panel[panelSection]}
        />
        <ul>
          {panel[panelSection].members.map((panelMember, idx) => (
            <li key={idx}>
              <div style={memberCss.container}>
                <strong style={memberCss.name}>{panelMember.name}</strong>
                <span style={memberCss.title}
                  dangerouslySetInnerHTML={{ __html: panelMember.role }}
                ></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p>
        Authored by Dr Catherine McGregor, the ESMA panel will produce a guide
        which summarises key recommendations identified by the Life Stages
        teams. ESMA also hopes to raise an incubator fund to enable the sharing
        of best practice materials, and support creative and radical innovation
        that has the promise to improve people's lives across the UK.
      </p>
    </section>
  );
};

export default EsmaPanel;
