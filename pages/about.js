import MainComponent from "../components/MainComponent";
import SubHeader from "../components/SubHeader";
import PeopleSay from "../components/PeopleSay";
import Overview from "../components/Overview";

export default function ABOUT() {
  return (
    <MainComponent title="ABOUT">
      <SubHeader />
      <section class="about section-margin mb-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5">
              <div class="about__img text-center text-md-left mb-5 mb-md-0">
                <img class="img-fluid" src="img/about.png" alt="" />
                <a href="#/" class="about__img__date text-center">
                  <h3>26</h3>
                  <p>
                    Years <br />
                    of Creativity
                  </p>
                </a>
              </div>
            </div>
            <div class="col-md-7 pl-xl-5">
              <div class="section-intro">
                <h4 class="section-intro__title">About our Company</h4>
                <h2 class="section-intro__subtitle">
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
              <a class="btn btn--rightBorder mt-4" href="#/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <Overview />
      <br />
      <br />
      <section class="tips tips-bg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 mb-4 mb-lg-0">
              <h2 class="section-intro__subtitle">
                Get to Know Project Estimate?
              </h2>
              <p>
                There is a moment in the life of any aspiring astronomer that it
                is time to buy that first telescope. It’s exciting to think
                about setting up your own viewing station whether that is on the
                deck
              </p>
            </div>
            <div class="col-lg-5 text-center text-lg-right">
              <a
                class="btn btn-dark btn--leftBorder btn--rightBorder"
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
