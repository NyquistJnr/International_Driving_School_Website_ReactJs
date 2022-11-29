import classes from "./WhatOurClientSays.module.css";

const WhatOurClientSays = () => {
  return (
    <section className={`container ${classes.main}`}>
      <h1 className={`${classes.h1}`}>Testimonial</h1>
      <h3 className={`${classes.h3}`}> What Our Clients Say!</h3>
      <img
        className={`${classes.img_testimonial}`}
        src={require("../../assets/testimonial-1.jpg")}
        alt="testimonial-1"
      />
      <p className={`${classes.text}`}>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
      <hr className="w-25 mx-auto" />
      <p className={`${classes.name}`}>John</p>
      <p className={`${classes.profession}`}>Professor</p>
    </section>
  );
};

export default WhatOurClientSays;
