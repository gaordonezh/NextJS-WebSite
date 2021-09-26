import { Fragment } from "react";
import Link from "next/link";

const Sidebar = () => {
  const openSidebar = () => {
    let body = document.querySelector("body");
    if (body.classList.contains("open")) body.classList.remove("open");
    else body.classList.add("open");
  };

  return (
    <Fragment>
      <div className="side_menu">
        <ul className="list menu_right">
          <li onClick={openSidebar}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={openSidebar}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li onClick={openSidebar}>
            <a href="projects.html">Projects</a>
          </li>
          <li onClick={openSidebar}>
            <a href="service.html">Service</a>
          </li>
          <li onClick={openSidebar}>
            <a href="elements.html">Elements</a>
          </li>
          <li onClick={openSidebar}>
            <a href="blog.html">Blog</a>
          </li>
          <li onClick={openSidebar}>
            <a href="single-blog.html">Blog Details</a>
          </li>
          <li onClick={openSidebar}>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>

      <div className="canvus_menu">
        <div className="container">
          <div className="float-right" onClick={openSidebar}>
            <div className="toggle_icon" title="Menu Bar">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
