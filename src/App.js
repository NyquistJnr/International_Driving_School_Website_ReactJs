import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAuthContext } from "./store/auth-context";

import Header from "./components/UI/Header";

const Registration = React.lazy(() =>
  import("./components/Pages/Registration")
);
// const NoPageFound = React.lazy(() => import("./components/Pages/NoPageFound"));
const Home = React.lazy(() => import("./components/Pages/Home"));
const AboutUs = React.lazy(() => import("./components/Pages/AboutUs"));
const Login = React.lazy(() => import("./components/Pages/Login"));
const SignUp = React.lazy(() => import("./components/Pages//SignUp"));
const Payment = React.lazy(() => import("./components/Pages/Payment"));
const MasterUser = React.lazy(() => import("./components/Pages/MasterUser"));

const App = () => {
  const { isLogin } = useAuthContext();
  const spinner = (
    <div className="text-center">
      <div
        className="spinner-border"
        style={{ width: "13rem", height: "13rem", marginTop: 300 }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <Suspense fallback={spinner}>
      Hello
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about-us" element={<AboutUs />} />
        {!isLogin && <Route path="/login" element={<Login />} />}
        {!isLogin && <Route path="/sign-up" element={<SignUp />} />}
        <Route path="/payment" element={<Payment />} />
        {isLogin && <Route path="/master-user" element={<MasterUser />} />}
        {/* <Route path="*" element={<NoPageFound />} /> */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Suspense>
  );
};

export default App;

// https://international-driving-sc-af89c-default-rtdb.firebaseio.com/
