import Carousel from "react-bootstrap/Carousel";

import classes from "./SliderHeader.module.css";

const SliderHeader = () => {
  return (
    <Carousel className={classes.size}>
      <Carousel.Item>
        <img
          className={`d-block w-100 img-fluid`}
          src={require("../../assets/carousel-1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={require("../../assets/carousel-2.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderHeader;
