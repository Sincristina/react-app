import React, { Children } from "react";
import Footer from "./Footer";
import Nav from "../components/Nav";

const Layout = (props) => {
  return (
    <div>
      <Nav />

      {props.children}

      <Footer />
    </div>
  );
};

export default Layout;
