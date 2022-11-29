import { Container } from "react-bootstrap";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
