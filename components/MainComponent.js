import React, { Fragment } from "react";
import Head from "next/head";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children, title, description }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="author" content="German Ordoñez" />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:300,400,500"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300i,400,500"
          rel="stylesheet"
        />
      </Head>
      <Sidebar />
      <Logo />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Netapp Perú",
  description: "Netapp Perú",
};
