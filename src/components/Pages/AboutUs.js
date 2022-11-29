import Layout from "../UI/Layout";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <Layout>
      <section className={`row ${classes.spacebuttom}`}>
        <div className="col-lg-6">
          <img
            src={require("../../assets/about-1.jpg")}
            alt="About-1"
            className={classes.img}
          />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <h1>About Us</h1>
          <h1>
            We Help Students To Pass Test & Get A License On The First Try
          </h1>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet Tempor erat elitr
            rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
            justo magna dolore erat amet
          </p>
          <p>Fully Licensed Afordable Fee Online Tracking Best Trainers</p>
        </div>
      </section>
      <section className={`row ${classes.spacebuttom}`}>
        <h1 className={classes.headings1}>Meet the Team</h1>
        <h3 className={classes.headings2}>
          We Have Great Experience Of Driving
        </h3>
        <div className="row">
          <div className="col-lg-3">
            <img
              src={require("../../assets/team-1.jpg")}
              alt="trainer-1"
              className={classes.team}
            />
            <h4>John</h4>
          </div>
          <div className="col-lg-3">
            <img
              src={require("../../assets/team-2.jpg")}
              alt="trainer-2"
              className={classes.team}
            />
            <h4>John</h4>
          </div>
          <div className="col-lg-3">
            <img
              src={require("../../assets/team-3.jpg")}
              alt="trainer-3"
              className={classes.team}
            />
            <h4>John</h4>
          </div>
          <div className="col-lg-3">
            <img
              src={require("../../assets/team-4.jpg")}
              alt="trainer-4"
              className={classes.team}
            />
            <h4>John</h4>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
