import WhyUs from "../HomeComponent/WhyUs";
import SliderHeader from "../HomeComponent/SliderHeader";
import WhatOurClientSays from "../HomeComponent/WhatOurClientSays";
import Layout from "../UI/Layout";

// import classes from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <SliderHeader />
      <WhyUs />
      <WhatOurClientSays />
    </Layout>
  );
};

export default Home;
