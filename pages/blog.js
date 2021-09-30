import MainComponent from "../components/MainComponent";
import SubHeader from "../components/SubHeader";
import Link from "next/link";
import { BsFolderSymlinkFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlogResume from "../components/BlogResume";

const Blog = () => {
  return (
    <MainComponent title="Blog">
      <SubHeader title="Blog" />
      <section className="post-content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-3  col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                    <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span className="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span className="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span className="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span className="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 ">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="img/blog/feature-img1.jpg"
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="/blog-detail">
                    <h3>Astronomy Binoculars A Great Alternative</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a className="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <div className="single-post row">
                <div className="col-lg-3  col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                    <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span className="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span className="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span className="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span className="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 ">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="img/blog/feature-img2.jpg"
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="/blog-detail">
                    <h3>The Basics Of Buying A Telescope</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a className="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <div className="single-post row">
                <div className="col-lg-3  col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                    <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span className="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span className="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span className="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span className="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="img/blog/feature-img3.jpg"
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="/blog-detail">
                    <h3>The Glossary Of Telescopes</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a className="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <div className="single-post row">
                <div className="col-lg-3  col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                    <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span className="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span className="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span className="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span className="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="img/blog/feature-img4.jpg"
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="/blog-detail">
                    <h3>The Night Sky</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a className="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <div className="single-post row">
                <div className="col-lg-3 col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                    <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span className="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span className="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span className="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span className="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="img/blog/feature-img5.jpg"
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="/blog-detail">
                    <h3>Telescopes 101</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a className="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <span aria-hidden="true">
                        <span className="lnr lnr-chevron-left">
                          <IoIosArrowBack />
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      01
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      04
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      09
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <span aria-hidden="true">
                        <span className="lnr lnr-chevron-right">
                          <IoIosArrowForward />
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <BlogResume />
          </div>
        </div>
      </section>
    </MainComponent>
  );
};

export default Blog;
