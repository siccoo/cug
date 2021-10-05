import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Success = ({onClick}) => {
  return (
    <div>
      <div className="itex-form-section wf-section">
        <div className="itex-form">
          <div style={{ textAlign: "center" }}>
            <h1 className="itex-hand ">👍🏽</h1>
            <p className="itex-form-header" style={{ marginTop: 30 + "px" }}>
              Details successfully submitted
            </p>
            <button type="submit" onClick={onClick} className="itex-form-submit-btn">
              Return to Home page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
