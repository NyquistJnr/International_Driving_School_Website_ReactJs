import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.divpadding}></div>
      <section
        id="contact"
        className={`${classes.footer_wrapper} mt-3 mt-md-0 pb-0`}
      >
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h5>Office Location</h5>
              <p className="ps-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dignissim erat ut laoreet pharetra....
              </p>
              <div className={`${classes["contact-info"]}`}>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                      <i className="fa fa-home me-3"></i> No. 96, Ogobodi
                      Umuahia Abia State
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-phone me-3"></i>+234 7087098936
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-envelope me-3"></i>
                      ejikeukaegbu@yahoo.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>More Links</h5>
              <ul className={`${classes["link-widget"]} p-0`}>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Our Office</Link>
                </li>
                <li>
                  <Link to="/">Delivery</Link>
                </li>
                <li>
                  <Link to="/">Return Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Demo Links</h5>
              <ul className={`${classes["link-widget"]} p-0`}>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Our Office</Link>
                </li>
                <li>
                  <Link to="/">Delivery</Link>
                </li>
                <li>
                  <Link to="/">Return Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Newsletter</h5>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control bg-transparent"
                  placeholder="enter your email here"
                />
                <button
                  type="submit"
                  className={`${classes["main-btn"]} rounded-2 mt-3 border-white text-white`}
                >
                  Subscribe
                </button>
              </div>
              <h5>Stay Connected</h5>
              <ul
                className={`${classes["social-network"]} d-flex align-items-center p-0`}
              >
                <li>
                  <Link to="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fab fa-vimeo-v"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`container-fluid ${classes["copyright-section"]}`}>
          <p>
            Copyright <Link to="/welcome">© INTERNATIONAL DRIVING SCHOOL</Link>{" "}
            All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
