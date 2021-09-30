import MainComponent from "../components/MainComponent";
import SubHeader from "../components/SubHeader";
import PeopleSay from "../components/PeopleSay";
import Overview from "../components/Overview";
import Estimate from "../components/Estimate";

const About = () => {
  return (
    <MainComponent title="About us">
      <SubHeader title="About us" />
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
      <br />
      <br />
      <br />
      <br />
      <Estimate />
      <PeopleSay />
    </MainComponent>
  );
};

export default About;
