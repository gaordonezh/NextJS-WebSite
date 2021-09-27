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
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li onClick={openSidebar}>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li onClick={openSidebar}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li onClick={openSidebar}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
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
