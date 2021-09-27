import MainComponent from "../components/MainComponent";
import SubHeader from "../components/SubHeader";
import Estimate from "../components/Estimate";
import { GoInbox } from "react-icons/go";
import {
  BsCloudFill,
  BsFolderSymlinkFill,
  BsServer,
  BsXDiamondFill,
  BsPentagonFill,
} from "react-icons/bs";

const Services = () => {
  return (
    <MainComponent title="Services">
      <SubHeader title="Services" />
      <section class="service section-margin mb-5 pb-5">
        <div class="container">
          <div class="section-intro">
            <h4 class="section-intro__title">OUR Services</h4>
            <h2 class="section-intro__subtitle bottom-border">
              Our Offered Services
            </h2>
          </div>

          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="media service__single">
                <span class="service__singleIcon">
                  <i class="ti-package">
                    <GoInbox />
                  </i>
                </span>
                <div class="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="media service__single">
                <span class="service__singleIcon">
                  <i class="ti-home">
                    <BsCloudFill />
                  </i>
                </span>
                <div class="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="media service__single">
                <span class="service__singleIcon">
                  <i class="ti-brush-alt">
                    <BsFolderSymlinkFill />
                  </i>
                </span>
                <div class="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="media service__single">
                <span class="service__singleIcon">
                  <i class="ti-package">
                    <BsServer />
                  </i>
                </span>
                <div class="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="media service__single">
                <span class="service__singleIcon">
                  <i class="ti-home">
                    <BsXDiamondFill />
                  </i>
                </span>
                <div class="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="media service__single">
                <span class="service__singleIcon">
                  <i class="ti-brush-alt">
                    <BsPentagonFill />
                  </i>
                </span>
                <div class="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Estimate />
    </MainComponent>
  );
};

export default Services;
