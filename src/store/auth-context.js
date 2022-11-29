import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  idToken: "",
  isLogin: null,
  login: (idToken) => {},
  logout: () => {},
  registration: (registrationObject) => {},
  regData: [],
});

const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = React.useState(intialToken);
  const [emailName, setEmailName] = React.useState("");
  const isLogin = !!token;
  const [registrationData, setRegistrationData] = React.useState([]);

  const loginHandler = (idToken, emailName) => {
    setToken(idToken);
    setEmailName(emailName);
    localStorage.setItem("token", idToken);
  };

  const logoutHandler = () => {
    setToken(null);
    setEmailName(null);
    localStorage.removeItem("token");
    navigate("/home");
  };

  const registrationHandler = (registrationObject) => {
    /* setRegistrationData([...registrationData, registrationObject]); */
    setRegistrationData((prev) => [...prev, registrationObject]);
  };

  // console.log(registrationData);

  // console.log(token, emailName);
  return (
    <AuthContext.Provider
      value={{
        idToken: token,
        emailName,
        isLogin,
        regData: registrationData,
        login: loginHandler,
        logout: logoutHandler,
        registration: registrationHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
