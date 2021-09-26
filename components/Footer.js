import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-left">
            <h3 className="footer__title">Top Products</h3>
            <ul className="footer__link">
              <li>
                <a href="#/">managed Website</a>
              </li>
              <li>
                <a href="#/">Manage Reputation</a>
              </li>
              <li>
                <a href="#/">power Tools</a>
              </li>
              <li>
                <a href="#/">Marketing Service</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-left">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__link">
              <li>
                <a href="#/">Jobs</a>
              </li>
              <li>
                <a href="#/">Brand Assets</a>
              </li>
              <li>
                <a href="#/">Investor Relations</a>
              </li>
              <li>
                <a href="#/">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-left">
            <h3 className="footer__title">Features</h3>
            <ul className="footer__link">
              <li>
                <a href="#/">Jobs</a>
              </li>
              <li>
                <a href="#/">Brand Assets</a>
              </li>
              <li>
                <a href="#/">Investor Relations</a>
              </li>
              <li>
                <a href="#/">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-left">
            <h3 className="footer__title">Resources</h3>
            <ul className="footer__link">
              <li>
                <a href="#/">Guides</a>
              </li>
              <li>
                <a href="#/">Research</a>
              </li>
              <li>
                <a href="#/">Experts</a>
              </li>
              <li>
                <a href="#/">Agencies</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-8 col-lg-4 mb-4 mb-lg-0 text-left">
            <h3 className="footer__title">Newsletter</h3>
            <p>You can trust us. we only send promo offers,</p>
            <form action="" className="form-subscribe">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  required
                />
                <div className="input-group-append">
                  <button className="btn-append" type="submit">
                    <i className="lnr lnr-arrow-right">
                      <BsArrowRight />
                    </i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d-sm-flex justify-content-between footer__bottom top-border">
          <p>
            Copyright &copy; 2021 Todos los derechos reservados{" "}
            <Link href="/">
              <a>Netapp Perú</a>
            </Link>
          </p>
          <ul className="social-icons mt-2 mt-sm-0">
            <li>
              <a href="#/">
                <i className="fab fa-facebook-f">
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li>
              <a href="#/">
                <i className="fab fa-twitter">
                  <AiOutlineWhatsApp />
                </i>
              </a>
            </li>
            <li>
              <a href="#/">
                <i className="fab fa-dribbble">
                  <AiOutlineInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#/">
                <i className="fab fa-behance">
                  <FiMail />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
