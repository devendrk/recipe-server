import React from "react";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <div className="footer__info-item">
          <p className="footer__text footer__text--big">Contat Us</p>
          <div className="footer__info-div">
            <FaLocationArrow
              color="#fda084"
              size={20}
              className="footer_icon"
            />
            <p className="footer__text footer__text--small">Louhela Vantaa</p>
          </div>
          <div className="footer__info-div">
            <FaPhoneAlt color="#fda084" size={20} className="footer_icon" />
            <p className="footer__text footer__text--small">+358 00 160 0500</p>
          </div>
          <div className="footer__info-div">
            <FaEnvelope color="#fda084" size={20} className="footer_icon" />
            <p className="footer__text footer__text--small">
              info@companyname.fi
            </p>
          </div>
        </div>

        <div className="footer__vl"></div>

        <div className="footer__info-item">
          <p className="footer__text footer__text--big">know more about us</p>
          <div className="footer__info-div">
            <FaLinkedin color="#fda084" size={20} className="footer_icon" />
            <a
              className="footer__a-tag"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="footer__text footer__text--small">LinkedIn</p>
            </a>
          </div>
          <div className="footer__info-div">
            <FaFacebookSquare
              color="#fda084"
              size={20}
              className="footer_icon"
            />
            <a
              className="footer__a-tag"
              href="facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="footer__text footer__text--small">Facebook</p>
            </a>
          </div>
          <div className="footer__info-div">
            <FaInstagram color="#fda084" size={20} className="footer_icon" />
            <a
              className="footer__a-tag"
              href="hhttps://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="footer__text footer__text--small">Instagram</p>
            </a>
          </div>
          <div className="footer__info-div">
            <FaPhoneAlt color="#fda084" size={20} className="footer_icon" />
            <p className="footer__text footer__text--small">+35845108989</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
