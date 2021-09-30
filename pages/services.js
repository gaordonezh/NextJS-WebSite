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
      <section className="service section-margin mb-5 pb-5">
        <div className="container">
          <div className="section-intro">
            <h4 className="section-intro__title">OUR Services</h4>
            <h2 className="section-intro__subtitle bottom-border">
              Our Offered Services
            </h2>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="media service__single">
                <span className="service__singleIcon">
                  <i className="ti-package">
                    <GoInbox />
                  </i>
                </span>
                <div className="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="media service__single">
                <span className="service__singleIcon">
                  <i className="ti-home">
                    <BsCloudFill />
                  </i>
                </span>
                <div className="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="media service__single">
                <span className="service__singleIcon">
                  <i className="ti-brush-alt">
                    <BsFolderSymlinkFill />
                  </i>
                </span>
                <div className="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="media service__single">
                <span className="service__singleIcon">
                  <i className="ti-package">
                    <BsServer />
                  </i>
                </span>
                <div className="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="media service__single">
                <span className="service__singleIcon">
                  <i className="ti-home">
                    <BsXDiamondFill />
                  </i>
                </span>
                <div className="media-body">
                  <h3>Total Architecture</h3>
                  <p>
                    If you are looking at blank cassettes on the web lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="media service__single">
                <span className="service__singleIcon">
                  <i className="ti-brush-alt">
                    <BsPentagonFill />
                  </i>
                </span>
                <div className="media-body">
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
