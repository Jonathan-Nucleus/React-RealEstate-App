import React, { useState } from "react";
import "./CustomerSupport.sass";
import back from "./../../assets/icons/Mobile/back.svg";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "./../Footer/Footer";
import Typography from "@material-ui/core/Typography";
import SupportMobileNav from "./../MobileVersion/SupportMobileNav/SupportMobileNav";

const Accordion = withStyles({
  root: {
    border: "0px solid #222",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: "0px solid rgba(0, 0, 0, .125)",
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: 3,
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
      boxShadow: "0px 5px 20px #9DADDE66",
      background: "#f5f5f5",
    },
  },
  content: {},
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            className="customer-support__block-title"
            style={{ boxShadow: "none" }}
          >
            Q. REAL BUY는 어떤 회사인가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#fafbfe" }}>
          <Typography className="customer-support__block-answer">
            A. 실물자산 투자 플랫폼입니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className="customer-support__block-title">
            Q. REAL BUY는 어떤 서비스인가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#fafbfe" }}>
          <Typography className="customer-support__block-answer">
            A. ...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className="customer-support__block-title">
            Q. REAL BUY는 어떠한 투자를 하나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#fafbfe" }}>
          <Typography className="customer-support__block-answer">
            A. ...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const links = [
  {
    title: "REAL BUY",
    path: "/customer-support/common",
  },
  {
    title: "투자 상품",
    path: "/customer-support/common",
  },
  {
    title: "투자 구조",
    path: "/customer-support/common",
  },
  {
    title: "투자 방법",
    path: "/customer-support/common",
  },
  {
    title: "회원 정보",
    path: "/customer-support/common",
  },
  {
    title: "기타",
    path: "/customer-support/common",
  },
];

const CustomerSupport = () => {
  const [activeSafeIndex, setActiveSafeIndex] = useState(0);

  const handleSafetyClick = (index) => {
    setActiveSafeIndex(index);
  };

  const customerLinks = links.map((link, index) => {
    const active = index === activeSafeIndex ? "renderedLinks-active" : "";
    return (
      <span
        key={index}
        className={`investing-details__link ${active}`}
        onClick={() => handleSafetyClick(index)}
      >
        {link.title}
      </span>
    );
  });

  return (
    <>
      <div className="customer-support">
        <div className="customer-support-mobile__back">
          <img
            src={back}
            alt="back"
            className="customer-support-mobile__back-button"
          />
          <p className="customer-support-mobile__back-button_title">
            마이페이지
          </p>
        </div>
        <div className="customer-support__container">
          <p className="customer-support__title">자주하는 질문</p>

          <div className="customer-support__links" style={{ height: 40 }}>
            {customerLinks}
          </div>
          <div className="visible-for-mobile">
            <SupportMobileNav />
          </div>

          <div className="customer-support__block">
            {CustomizedAccordions()}
          </div>
        </div>
      </div>
      <Footer mode="light" />
    </>
  );
};

export default CustomerSupport;
