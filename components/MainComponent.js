import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
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
        <meta name="keywords" content="Netapp Perú" />
        <meta name="author" content="Yuri Manuel Montenegro Barrantes" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yurimontenegro.com/" />
        <meta property="og:site_name" content="yurimontenegro.com" />
        <meta
          property="article:publisher"
          content="https://yurimontenegro.com/"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://filesdic.s3.us-east-2.amazonaws.com/imgSchool/logo-ym.png"
        />

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
      <Header />
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
