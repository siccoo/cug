import itexLogo from "../assets/img/itexlogo.svg";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="itex-navbar">
        <div className="itex-brand">
          <img src={itexLogo} loading="lazy" alt="" className="brand-img" />
        </div>
        {/* <div>
          <Link
            // target="_blank"
            to="/success"
            className="primary-btn"
            // rel="noreferrer"
          >
            Registered user
          </Link>
        </div> */}
      </div>
    </>
  );
}
