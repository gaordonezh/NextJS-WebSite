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
      <section class="post-content-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 posts-list">
              <div class="single-post row">
                <div class="col-lg-3  col-md-3 meta-details">
                  <ul class="tags">
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
                  <div class="user-details row">
                    <p class="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span class="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span class="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span class="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span class="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9 ">
                  <div class="feature-img">
                    <img
                      class="img-fluid"
                      src="img/blog/feature-img1.jpg"
                      alt=""
                    />
                  </div>
                  <a class="posts-title" href="/blog-detail">
                    <h3>Astronomy Binoculars A Great Alternative</h3>
                  </a>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a class="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <div class="single-post row">
                <div class="col-lg-3  col-md-3 meta-details">
                  <ul class="tags">
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
                  <div class="user-details row">
                    <p class="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span class="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span class="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span class="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span class="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9 ">
                  <div class="feature-img">
                    <img
                      class="img-fluid"
                      src="img/blog/feature-img2.jpg"
                      alt=""
                    />
                  </div>
                  <a class="posts-title" href="/blog-detail">
                    <h3>The Basics Of Buying A Telescope</h3>
                  </a>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a class="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <div class="single-post row">
                <div class="col-lg-3  col-md-3 meta-details">
                  <ul class="tags">
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
                  <div class="user-details row">
                    <p class="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span class="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span class="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span class="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span class="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="feature-img">
                    <img
                      class="img-fluid"
                      src="img/blog/feature-img3.jpg"
                      alt=""
                    />
                  </div>
                  <a class="posts-title" href="/blog-detail">
                    <h3>The Glossary Of Telescopes</h3>
                  </a>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a class="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <div class="single-post row">
                <div class="col-lg-3  col-md-3 meta-details">
                  <ul class="tags">
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
                  <div class="user-details row">
                    <p class="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span class="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span class="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span class="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span class="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="feature-img">
                    <img
                      class="img-fluid"
                      src="img/blog/feature-img4.jpg"
                      alt=""
                    />
                  </div>
                  <a class="posts-title" href="/blog-detail">
                    <h3>The Night Sky</h3>
                  </a>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a class="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <div class="single-post row">
                <div class="col-lg-3 col-md-3 meta-details">
                  <ul class="tags">
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
                  <div class="user-details row">
                    <p class="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a>{" "}
                      <span class="lnr lnr-user">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span class="lnr lnr-calendar-full">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span class="lnr lnr-eye">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                    <p class="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span class="lnr lnr-bubble">
                        <BsFolderSymlinkFill />
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="feature-img">
                    <img
                      class="img-fluid"
                      src="img/blog/feature-img5.jpg"
                      alt=""
                    />
                  </div>
                  <a class="posts-title" href="/blog-detail">
                    <h3>Telescopes 101</h3>
                  </a>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <Link href="/blog-detail">
                    <a class="primary-btn">View More</a>
                  </Link>
                </div>
              </div>
              <nav class="blog-pagination justify-content-center d-flex">
                <ul class="pagination">
                  <li class="page-item">
                    <a href="#" class="page-link" aria-label="Previous">
                      <span aria-hidden="true">
                        <span class="lnr lnr-chevron-left">
                          <IoIosArrowBack />
                        </span>
                      </span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      01
                    </a>
                  </li>
                  <li class="page-item active">
                    <a href="#" class="page-link">
                      02
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      03
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      04
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      09
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link" aria-label="Next">
                      <span aria-hidden="true">
                        <span class="lnr lnr-chevron-right">
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
