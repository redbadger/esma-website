import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import Switcher from "./switcher";
import panel from "./panel";

const panelCss = css`
  color: var(--midnight);
  font-weight: 300;

  ul {
    padding: 0.75rem;
    list-style: circle;
    list-style-position: inside;
  }
  li::before {
    display: inline-block;
    width: 1rem;
    content: "";
  }
  p {
    padding: 0.75rem;
    font-size: 1.125rem;
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
    header {
      display: block;
    }
  }
`;

const EsmaPanel = () => (
  <section css={panelCss}>
    <header>
      <h2>ESMA Panel</h2>
      <p>
        The energy and interest for ESMA has been incredible attracting the
        support of many senior and inspirational leaders on social mobility.
      </p>
    </header>
    <Switcher />
    <ul>
      {panel.business.map((panelMember, idx) => (
        <li key={idx}>
          <strong>{panelMember.name}</strong>
          {panelMember.role}
        </li>
      ))}
    </ul>
    <p>
      Authored by Dr Catherine McGregor, the ESMA panel will also oversee the
      production of a report which summarises the key thematic recommendations
      identified by the Study Segment teams. Subject to funding, the ESMA Panel
      will distribute the Incubator Fund to licence (on a commercial basis) best
      practice materials from organisations identified by the SM Operational
      Appraisal.
    </p>
    <p>
      These materials will be provided to other Social Mobility focussed
      organisations on a Creative Commons basis, in turn, cross fertilising best
      practice across the UK and enabling exemplar initiatives/organisations to
      grow and increase impact.
    </p>
  </section>
);

export default EsmaPanel;
