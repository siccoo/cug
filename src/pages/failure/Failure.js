import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import FailImg from "../../assets/img/failure-img.svg";

const Failure = () => {
  return (
    <div>
      <Header />
      <div className="itex-banner2">
        <div className="itex-banner-cover">
          <div className="itex-banner-text">
            Nigerian Police Force CUG registration form
          </div>
        </div>
      </div>
      <div className="itex-form-section wf-section">
        <div className="itex-form">
          <div style={{ textAlign: "center" }}>
            <img src={FailImg} alt="failure-image" />
            <p style={{ marginTop: 30 + "px" }}>
              There seems to be an error submitting your details, please try
              again in a few minutes
            </p>
            <button type="submit" className="itex-form-submit-btn">
              Return to Home page
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Failure;
