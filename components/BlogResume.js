import { FaSearch, FaFacebookF } from "react-icons/fa";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const BlogResume = () => {
  return (
    <div className="col-lg-4 sidebar-widgets">
      <div className="widget-wrap">
        <div className="single-sidebar-widget search-widget">
          <form className="search-form" action="#">
            <input
              placeholder="Search Posts"
              name="search"
              type="text"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Search Posts'"
            />
            <button type="submit">
              <i className="fa fa-search">
                <FaSearch />
              </i>
            </button>
          </form>
        </div>
        <div className="single-sidebar-widget user-info-widget">
          <img src="img/blog/user-info.png" alt="" />
          <a href="#">
            <h4>Charlie Barber</h4>
          </a>
          <p>Senior blog writer</p>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f">
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter">
                  <AiOutlineWhatsApp />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github">
                  <AiOutlineInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-behance">
                  <FiMail />
                </i>
              </a>
            </li>
          </ul>
          <p>
            Boot camps have its supporters andit sdetractors. Some people do not
            understand why you should have to spend money on boot camp when you
            can get. Boot camps have itssuppor ters andits detractors.
          </p>
        </div>
        <div className="single-sidebar-widget popular-post-widget">
          <h4 className="popular-title">Popular Posts</h4>
          <div className="popular-post-list">
            <div className="single-post-list d-flex flex-row align-items-center">
              <div className="thumb">
                <img className="img-fluid" src="img/blog/pp1.jpg" alt="" />
              </div>
              <div className="details">
                <a href="/blog-detail">
                  <h6>Space The Final Frontier</h6>
                </a>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div className="single-post-list d-flex flex-row align-items-center">
              <div className="thumb">
                <img className="img-fluid" src="img/blog/pp2.jpg" alt="" />
              </div>
              <div className="details">
                <a href="/blog-detail">
                  <h6>The Amazing Hubble</h6>
                </a>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div className="single-post-list d-flex flex-row align-items-center">
              <div className="thumb">
                <img className="img-fluid" src="img/blog/pp3.jpg" alt="" />
              </div>
              <div className="details">
                <a href="/blog-detail">
                  <h6>Astronomy Or Astrology</h6>
                </a>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div className="single-post-list d-flex flex-row align-items-center">
              <div className="thumb">
                <img className="img-fluid" src="img/blog/pp4.jpg" alt="" />
              </div>
              <div className="details">
                <a href="/blog-detail">
                  <h6>Asteroids telescope</h6>
                </a>
                <p>02 Hours ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <a href="#">
            <img className="img-fluid" src="/img/blog/ads-banner.jpg" alt="" />
          </a>
        </div>
        <div className="single-sidebar-widget post-category-widget">
          <h4 className="category-title">Post Categories</h4>
          <ul className="cat-list">
            <li>
              <a href="#" className="d-flex justify-content-between">
                <p>Technology</p>
                <p>37</p>
              </a>
            </li>
            <li>
              <a href="#" className="d-flex justify-content-between">
                <p>Lifestyle</p>
                <p>24</p>
              </a>
            </li>
            <li>
              <a href="#" className="d-flex justify-content-between">
                <p>Fashion</p>
                <p>59</p>
              </a>
            </li>
            <li>
              <a href="#" className="d-flex justify-content-between">
                <p>Art</p>
                <p>29</p>
              </a>
            </li>
            <li>
              <a href="#" className="d-flex justify-content-between">
                <p>Food</p>
                <p>15</p>
              </a>
            </li>
            <li>
              <a href="#" className="d-flex justify-content-between">
                <p>Architecture</p>
                <p>09</p>
              </a>
            </li>
            <li>
              <a href="#" className="d-flex justify-content-between">
                <p>Adventure</p>
                <p>44</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="single-sidebar-widget newsletter-widget">
          <h4 className="newsletter-title">Newsletter</h4>
          <p>
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought.
          </p>
          <div className="form-group d-flex flex-row">
            <div className="col-autos">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Enter email"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter email'"
                />
              </div>
            </div>
            <a href="#" className="bbtns">
              Subcribe
            </a>
          </div>
          <p className="text-bottom">You can unsubscribe at any time</p>
        </div>
        <div className="single-sidebar-widget tag-cloud-widget">
          <h4 className="tagcloud-title">Tag Clouds</h4>
          <ul>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Architecture</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Food</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Art</a>
            </li>
            <li>
              <a href="#">Adventure</a>
            </li>
            <li>
              <a href="#">Food</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Adventure</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogResume;
