import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";
import { useAuthContext } from "../../store/auth-context";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);

  const { login } = useAuthContext();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const completeSignUpData = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[APIKEY]",
      {
        method: "POST",
        body: JSON.stringify(completeSignUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          login(data.idToken, data.email);
          navigate("/master-user");
        });
      } else {
        return response.json().then((err) => setError(err.error.message));
      }
    });
  };

  /*     const sendSignUpDetails = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[APIKEY]",
        {
          method: "POST",
          body: JSON.stringify(completeSignUpData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("An Error Occurred!");
      }
      const data = await response.json();
      console.log(data);
    };
  };

  useEffect(() => {
    sendSignUpDetails();
  }); */

  return (
    <Container fluid className={`text-center ${classes.body}`}>
      <main className={classes["form-signin"]}>
        <form onSubmit={submitHandler}>
          {error && (
            <div className="alert alert-danger" role="alert">
              <p>{error}</p>
            </div>
          )}
          <img
            className="mb-4"
            src={require("../../assets/team-1.jpg")}
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              ref={emailRef}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              ref={passwordRef}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Create Account
          </button>
          <p className="mt-5 mb-3 text-muted">
            &copy; 2007–2022 International Driving School
          </p>
        </form>
      </main>
    </Container>
  );
};

export default SignUp;

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
