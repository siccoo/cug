import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Success = () => {
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
            <h1 className="itex-hand ">👍🏽</h1>
            <p className="itex-form-header" style={{ marginTop: 30 + "px" }}>
              Details successfully submitted
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

export default Success;
