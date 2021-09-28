import React, { useState } from "react";
import Header from "../components/header.js";
import Footer from "../components/footer";

// import { Link } from "react-router-dom";
import faqVector from "../assets/img/faqVec.svg";
// import Fade from "@mui/material/Fade";
export default function Faq() {
  const faq_list = [
    {
      id: 1,
      title: "What is MTN Police CUG service?",
      paragraph:
        "•	MTN Police CUG Service is a special voice and data package that allows Police Officers communicate for free among themselves at a flat monthly rate; payable via their individual’s airtime. •	It is packaged to facilitate communication and collaboration among the Police.",
    },
    {
      id: 2,
      title: "Who is eligible for MTN Police CUG package?",
      paragraph:
        "•	It is only open to Police officers on MTN network and approved for this service by the Nigerian Police.•	 Non MTN users need to get a new MTN sim or port existing lines to MTN to activate the service.",
    },
    {
      id: 3,
      title: "How does MTN Police CUG Service work?",
      paragraph: `•	Phone no is pre-qualified as eligible Police Officer and approved for the service by the Police Force.
      •	Activation is completed by the Officer via USSD code or SMS channel.
      •	The monthly access fee will be charged from the Officers airtime.`,
    },
    {
      id: 4,
      title: "Who can activate MTN Police CUG Service?",
      paragraph: `•	It is only open to Police Officer on MTN network and approved for this service by the Nigeria Police.
      •	Non-MTN user needs to get a new MTN SIM or port existing line to MTN to activate the service.`,
    },
    {
      id: 5,
      title: "What do I stand to enjoy if I activate to this service?",
      paragraph: `You will enjoy the following:
      •	Free unlimited calls/SMS within Officers within the Nigeria Police
      •	Discounted data price
      •	Local calls outside the CUG to all networks at 15k/sec tariff rate
      •	Local SMS outside the CUG to all networks at the rate of N4 per SMS
      •	Plus other exciting products and services.`,
    },
    {
      id: 6,
      title: "What plans are available on the Police CUG service?",
      paragraph: `•	Two (2) plans- Classic and Premium Plans are the available on the service.
      •	Classic Plan offers unlimited calls and SMS among Officers within the Police community. •	Premium Plan offers 1.5GB data in addition to the unlimited calls and SMS among the Officers in the Police community. The data can be used for any internet related activities.`,
    },
    {
      id: 7,
      title: "What is the validity period of the plan?",
      paragraph: `•	The CUG including the data will be valid for 30 days.`,
    },
    {
      id: 8,
      title:
        "How much monthly access fee will I be charged for the Police CUG Service? ",
      paragraph: `•	The monthly access fee depends on the plan subscribed to as below`,
    },
    {
      id: 9,
      title: "Does the access fee auto-renew monthly?",
      paragraph: `•	Yes the access fee will be renewed automatically every month once the subscriber has sufficient airtime balance on the line at beginning of a new month.`,
    },
    {
      id: 10,
      title: "What happens if no sufficient airtime to renew?",
      paragraph: `•	There is 7 days retry period (after the 30-day expiration) to check sufficient airtime for CUG renewal.
      •	If subscription fails after the retry period, the CUG bundle shall be deactivated from the customer’s profile.`,
    },
    {
      id: 11,
      title:
        "What happens when a subscriber does not renew monthly access fee?",
      paragraph: `•	Subscriber that does not renew the month's CUG subscription will no longer be able to enjoy the CUG service. •	The CUG bundle shall be deactivated from his/her profile.
      •	To re-activate, the user would have to recharge with sufficient airtime of the value of the access fee and re-subscribe via the USSD or SMS channel.`,
    },
    {
      id: 12,
      title: "What is the validity period of the bundle?",
      paragraph: `•	The CUG including the data will be valid for 30 days.`,
    },
    {
      id: 13,
      title:
        "Can unused CUG minutes, SMS or data be carried over to a new month??",
      paragraph: `•	No. Rollover is not applicable to CUG and data bundle plans.  •	All unused minutes, SMS and data will be lost.`,
    },
  ];

  const [faqs, setFaqs] = useState(faq_list);
  const [accordion, setAccordion] = useState(0);

  function toggleAccordion(id) {
    if (accordion === id) {
      return setAccordion(0);
    }
    setAccordion(id);
  }

  return (
    <div>
      <Header />
      <div className="itex-banner">
        <div className="itex-banner-cover">
          <div className="itex-banner-text">
            <span className="banner-span-itex">ITEX</span> in collaboration with{" "}
            <span className="banner-span-mtn">MTN </span>brings our Police
            officers the easiest and cheapest way to connect with family,
            friends and colleagues
          </div>
          <div className="itex-banner-subtext">
            We’re giving back to our heroic officers the best way we know how,
            make calls and browse the internet at the cheapest rates. All you
            need to do is register by clicking the “Register here” button below,
            provide a brief detail and you and your family can begin to connect
            easily.
          </div>
          <a
            target="_blank"
            href=""
            className="primary-btn"
            rel="noreferrer"
          >
            Register here
          </a>
        </div>
      </div>
      <div className="itex-faq wf-section">
        <div className="section-heading">
          <div className="itex-section-header">Frequently Asked Questions</div>
          <div className="section-img-misc">
            <img src={faqVector} loading="lazy" alt="" />
          </div>
        </div>
        <div className="faq-row">
          {faqs.map((item, index) => {
            return (
              <div
                key={item.id}
                className="faq-col"
                onClick={() => {
                  toggleAccordion(item.id);
                }}
              >
                <div className="faq-col-heading">
                  <div className="faq-col-header">
                    <div className="faq-col-header">{item.title}</div>
                  </div>
                  {accordion === item.id ? (
                    <div className="faq-toggle">-</div>
                  ) : (
                    <div className="faq-toggle">+</div>
                  )}
                </div>
                {accordion === item.id ? (
                  <div className="faq-paragraph">{item.paragraph}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
