import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import Switcher from "./switcher";

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
      <li>
        <strong>Andrew Garard</strong>
        Group General Counsel and Director of Corporate Affairs, Meggitt plc
      </li>
      <li>
        <strong>David Ampaw</strong>
        Partner, DLA Piper & PRIME Board member
      </li>
      <li>
        <strong>Dr Tony Munton</strong>
        Managing Director theRTK
      </li>
      <li>
        <strong>Hollie Crompton</strong>
        Social Mobility Operations Lead, PwC
      </li>
      <li>
        <strong>Jeanie York</strong>
        CTIO, Virgin Media
      </li>
      <li>
        <strong>John Godfrey</strong>
        Commercial Director, Red Badger
      </li>
      <li>
        <strong>Joe Seddon</strong>
        Founder and CEO, Zero Gravity Tech
      </li>
      <li>
        <strong>Katherine Ainely</strong>
        Managing Director Ventures, BT
      </li>
      <li>
        <strong>Katie Perrior</strong>
        former Downing Street Director of Communications
      </li>
      <li>
        <strong>Kirsty Cooper</strong>
        General Counsel and Company Secretary, Aviva Plc & Insurance and
        Pensions Champion, Government Dormant Assets Scheme
      </li>
      <li>
        <strong>Raphael Mokades</strong>
        Founder & CEO, Rare Recruitment
      </li>
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
