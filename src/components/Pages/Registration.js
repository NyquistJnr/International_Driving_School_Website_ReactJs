import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../store/auth-context";

import Layout from "../UI/Layout";

import classes from "./Registration.module.css";

const Registration = (props) => {
  const navigate = useNavigate();
  const { registration } = useAuthContext();
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    // props.onAddMovie(movie);

    fetch(
      "https://international-driving-sc-af89c-default-rtdb.firebaseio.com/regdata.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("Sent Successfully!");
        return res.json().then((data) => console.log(data));
      } else {
        console.log("An error occured when sending the data");
        return res.json().then((err) => console.log(err));
      }
    });
    registration(movie);
    setTimeout(() => navigate("/master-user"), 3000);
  }

  return (
    <Layout>
      <section className={`py-6 my-6 mt-0 ${classes["page-header"]}`}>
        <div className={`${classes.centertext} container text-center`}>
          <h1 className="display-4 text-white mb-4">Appointment</h1>
        </div>
      </section>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="opening-text">Opening Text</label>
          <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Release Date</label>
          <input type="text" id="date" ref={releaseDateRef} />
        </div>
        <button className="btn btn-primary w-100">Add Movie</button>
      </form>
    </Layout>
  );
};

export default Registration;
