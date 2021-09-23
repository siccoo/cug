import React, {useState} from "react";
import Header from '../components/header.js';
import { Link } from 'react-router-dom';
import faqVector from '../assets/img/faqVec.svg';
import Fade from '@mui/material/Fade';
export default function Faq (){

  const faq_list = [
    {
      id : 1,
      title: 'What is MTN Police CUG service?',
      paragraph: 'This is a special CUG package designed specifically for the Nigerian Police Force.'
    },
    {
      id : 2,
      title: 'Who is eligible for MTN Police CUG package?',
      paragraph: 'It is only open to Police officers on MTN network and approved for this service by the Nigerian Police. Non MTN users need to get a new MTN sim or port existing lines to MTN to activate the service.'
    }
  ];

  const [faqs, setFaqs] = useState(faq_list);
  const [accordion, setAccordion] = useState(0);
  

  function toggleAccordion(id){
    if(accordion == id){
     return setAccordion(0);
    }
    setAccordion(id)
  }

    return(
        <div>
<Header/>
  <div className="itex-banner">
    <div className="itex-banner-cover">
      <div className="itex-banner-text"><span className="banner-span-itex">ITEX</span> in collaboration with <span className="banner-span-mtn">MTN </span>brings our Police officers the easiest and cheapest way to connect with family, friends and colleagues</div>
      <div className="itex-banner-subtext">We’re giving back to our heroic officers the best way we know how, make calls and browse the internet at the cheapest rates. All you need to do is register by clicking the “Register here” button below, provide a brief detail and you and your family can begin to connect easily.</div>
      <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdWtQZz4FISeTyLMdBr0fSDWMZvpxVDNTVU6FBa9I6LxkRw0w/viewform" className="primary-btn">Register here</a>
    </div>
  </div>
  <div className="itex-faq wf-section">
    <div className="section-heading">
      <div className="itex-section-header">Frequently Asked Questions</div>
      <div className="section-img-misc"><img src={faqVector} loading="lazy" alt=""/></div>
    </div>
    <div className="faq-row">
      {
        faqs.map( (item, index) => {
        return <div key={item.id} className="faq-col" onClick={ ()=> {toggleAccordion(item.id)} }>
                <div className="faq-col-heading">
                  <div className="faq-col-header">
                    <div className="faq-col-header">{item.title}</div>
                  </div>
                  {
                    accordion == item.id ? <div className="faq-toggle">-</div> : <div className="faq-toggle">+</div>
                  }
                  
                </div>
                {
                accordion == item.id ?   <div className="faq-paragraph">{item.paragraph}</div> : null
                }
               
              </div>
        })
      }
    </div>
  </div>
        </div>
    )
}