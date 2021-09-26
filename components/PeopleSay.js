import Slider from "react-slick";

const settings = {
  dots: false,
  adaptiveHeight: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  vertical: false,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 1,
  rows: 1,
  slidesPerRow: 1,
};

const PeopleSay = () => {
  return (
    <section className="testimonial section-margin">
      <div className="container">
        <div className="section-intro">
          <h4 className="section-intro__title">OUR Testimonial</h4>
          <h2 className="section-intro__subtitle bottom-border">
            What People Say About Us
          </h2>
        </div>
        <div className="testimonialCarousel">
          <Slider {...settings}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, index) => (
              <div className="item" key={index}>
                <div className="media testimonial__slide">
                  <img
                    className="img-fluid mr-4"
                    src="img/testimonial.png"
                    width="120"
                    height="125"
                    alt=""
                  />
                  <div className="media-body">
                    <blockquote>
                      “If you are looking at blank cassettes on the web lorem
                      ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt amet.”
                    </blockquote>
                    <h3>Falcon Astle</h3>
                    <p>Google Android</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PeopleSay;
