import Slider from "react-slick";

const settings = {
  dots: true,
  adaptiveHeight: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  vertical: true,
  dotsClass: "dots__carrousel",
};

const Hero = () => {
  return (
    <div className="heroCarousel">
      <Slider {...settings}>
        <div className="item">
          <div className="hero__slide">
            <img src="/img/hero-1.jpg" alt="" />
            <div className="hero__slideContent text-center">
              <h1>Dream Heaven City</h1>
              <p>
                If you are looking at blank cassettes on the web Lorem ipsum
                dolor sit amet, consectetur adipisicing eiusmod tempor
                incididunt.
              </p>
              <a className="btn btn--leftBorder btn--rightBorder" href="#/">
                Details
              </a>
              <span className="hero__slideContent--right"></span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="hero__slide">
            <img src="/img/hero-2.jpg" alt="" />
            <div className="hero__slideContent text-center">
              <h1>Dream Heaven City</h1>
              <p>
                If you are looking at blank cassettes on the web Lorem ipsum
                dolor sit amet, consectetur adipisicing eiusmod tempor
                incididunt.
              </p>
              <a className="btn btn--leftBorder btn--rightBorder" href="#/">
                Details
              </a>
              <span className="hero__slideContent--right"></span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="hero__slide">
            <img src="/img/hero-3.jpg" alt="" />
            <div className="hero__slideContent text-center">
              <h1>Dream Heaven City</h1>
              <p>
                If you are looking at blank cassettes on the web Lorem ipsum
                dolor sit amet, consectetur adipisicing eiusmod tempor
                incididunt.
              </p>
              <a className="btn btn--leftBorder btn--rightBorder" href="#/">
                Details
              </a>
              <span className="hero__slideContent--right"></span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
