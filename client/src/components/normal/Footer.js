import React from "react";
import "./footer.css";
import logo from "../../resources/icons/app-icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="T"></img>
          <div className="column footer-logo-name">
            <h4> </h4>
            <h5>Todo-maker</h5>
            <h6>handle todos with ease</h6>
          </div>
        </div>

        <div className="links row">
          <div className="contacts column">
            <h3>Contact</h3>

            <div className="column link-content">
              <p>500 Terry Francois Street ubja Chanjiso, LA 94158</p>
              <p>
                Sales:{" "}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  info@mysite.com
                </a>
              </p>
              <p>General Inquiries: 123-456-7890</p>
              <p>
                Costumer Care:{" "}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  info@mysite.com
                </a>
              </p>
            </div>
          </div>

          <div className="quick-links column">
            <h3>Quick links</h3>

            <div className="column link-content">
              <Link to="" style={{ textDecoration: "none", color: "black" }}>
                <p>Terms & conditions</p>
              </Link>
              <Link to="" style={{ textDecoration: "none", color: "black" }}>
                <p>Privacy Policy</p>
              </Link>
            </div>
          </div>

          <div className="email column">
            <h3>Email Us</h3>

            <div className="column link-content">
              <p>Sign up to get the latest news on our product.</p>

              <div className="column">
                <form action="">
                  <label>e-mail</label>

                  <div className="row input">
                    <input type="text"></input>
                    <button>SignUp</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="follow column">
            <h3>Follow</h3>

            <div className="column link-content">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>Facebook</p>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>Youtube</p>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>Instagram</p>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
