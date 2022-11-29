import { Container } from "react-bootstrap";

import classes from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <Container>
      <section className={`row ${classes.main}`}>
        <div className="col-lg-5 col-md-6">
          Why Choose Us! Best Driving Training Agency In Your City Tempor erat
          elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam
          et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
          justo magna dolore erat amet Fully Licensed Magna sea eos sit dolor,
          ipsum amet ipsum lorem diam eos Online Tracking Magna sea eos sit
          dolor, ipsum amet ipsum lorem diam eos Afordable Fee Magna sea eos sit
          dolor, ipsum amet ipsum lorem diam eos Best Trainers Magna sea eos sit
          dolor, ipsum amet ipsum lorem diam eos
        </div>
        <div className={`col-lg-1 col-md ${classes.spacebuttom}`}></div>
        <div className="col-lg-6 col-md-5">
          <img
            className={classes.img}
            src={require("../../assets/about-1.jpg")}
            alt="about-1"
          />
        </div>
      </section>
    </Container>
  );
};

export default WhyUs;
