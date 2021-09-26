import MainComponent from "../components/MainComponent";
import HeroSlider from "../components/HeroSlider";
import PeopleSay from "../components/PeopleSay";
import Overview from "../components/Overview";

export default function Home() {
  return (
    <MainComponent title="HOME">
      <HeroSlider />
      <section className="about section-margin mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="about__img text-center text-md-left mb-5 mb-md-0">
                <img className="img-fluid" src="img/about.png" alt="" />
                <a href="#/" className="about__img__date text-center">
                  <h3>26</h3>
                  <p>
                    Years <br />
                    of Creativity
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-7 pl-xl-5">
              <div className="section-intro">
                <h4 className="section-intro__title">About our Company</h4>
                <h2 className="section-intro__subtitle">
                  We've been creating <br />
                  Awesome Since 1992
                </h2>
              </div>
              <p>
                If you are looking at blank cassettes on the web lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam. Eiusmod tempor incididunt ut labore et dolore
                magna aliqua consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                If you are looking at blank cassettes on the web lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt.
              </p>
              <a className="btn btn--rightBorder mt-4" href="#/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Overview />

      <section className="portfolio section-margin">
        <div className="container">
          <div className="section-intro">
            <h4 className="section-intro__title">OUR PORTFOLIO</h4>
            <h2 className="section-intro__subtitle bottom-border">
              Latest Completed Projects
            </h2>
          </div>

          <div className="row align-items-end pb-md-5 mb-4">
            <div className="col-md-7 mb-4 mb-md-0">
              <div className="portfolio__img">
                <img className="img-fluid" src="img/portfolio1.png" alt="" />
              </div>
            </div>
            <div className="col-md-5 mb-5 pl-xl-5">
              <h4 className="section-intro__title left-border">
                December, 2018
              </h4>
              <h2 className="section-intro__subtitle small">
                Pure Bedroom Architecture
              </h2>
              <p>
                If you are looking at blank cassettes on the web lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt.
              </p>

              <a className="btn btn--rightBorder mt-3" href="#/">
                Read More
              </a>
            </div>
          </div>

          <div className="row align-items-end pb-md-5 mb-4">
            <div className="col-md-5 mb-5 pr-xl-5 order-2 order-md-1">
              <h4 className="section-intro__title left-border">
                December, 2018
              </h4>
              <h2 className="section-intro__subtitle small">
                Pure Bedroom Architecture
              </h2>
              <p>
                If you are looking at blank cassettes on the web lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt.
              </p>

              <a className="btn btn--rightBorder mt-3" href="#/">
                Read More
              </a>
            </div>
            <div className="col-md-7 mb-4 mb-md-0 order-1 order-md-2">
              <div className="portfolio__img">
                <img className="img-fluid" src="img/portfolio2.png" alt="" />
              </div>
            </div>
          </div>

          <div className="row align-items-end pb-md-5 mb-4">
            <div className="col-md-7 mb-4 mb-md-0">
              <div className="portfolio__img">
                <img className="img-fluid" src="img/portfolio3.png" alt="" />
              </div>
            </div>

            <div className="col-md-5 mb-5 pl-xl-5">
              <h4 className="section-intro__title left-border">
                December, 2018
              </h4>
              <h2 className="section-intro__subtitle small">
                Pure Bedroom Architecture
              </h2>
              <p>
                If you are looking at blank cassettes on the web lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt.
              </p>

              <a className="btn btn--rightBorder mt-3" href="#/">
                Read More
              </a>
            </div>
          </div>

          <div className="row align-items-end pb-md-5 mb-4">
            <div className="col-md-5 mb-5 pr-xl-5 order-2 order-md-1">
              <h4 className="section-intro__title left-border">
                December, 2018
              </h4>
              <h2 className="section-intro__subtitle small">
                Pure Bedroom Architecture
              </h2>
              <p>
                If you are looking at blank cassettes on the web lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt.
              </p>

              <a className="btn btn--rightBorder mt-3" href="#/">
                Read More
              </a>
            </div>

            <div className="col-md-7 order-1 order-md-2 mb-4 mb-md-0">
              <div className="portfolio__img">
                <img className="img-fluid" src="img/portfolio4.png" alt="" />
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <button className="btn btn--rightBorder btn--leftBorder">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      <section className="tips tips-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h2 className="section-intro__subtitle">
                Get to Know Project Estimate?
              </h2>
              <p>
                There is a moment in the life of any aspiring astronomer that it
                is time to buy that first telescope. It’s exciting to think
                about setting up your own viewing station whether that is on the
                deck
              </p>
            </div>
            <div className="col-lg-5 text-center text-lg-right">
              <a
                className="btn btn-dark btn--leftBorder btn--rightBorder"
                href="#/"
              >
                Get Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      
          <PeopleSay />
    </MainComponent>
  );
}
