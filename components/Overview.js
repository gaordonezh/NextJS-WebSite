import { AiFillCrown } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { GiPresent } from "react-icons/gi";

const Overview = () => {
  return (
    <section className="overview">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
            <div className="media align-items-center overview__single">
              <span className="overview__single__icon">
                <i className="ti-crown">
                  <AiFillCrown style={{ fontSize: 60 }} />
                </i>
              </span>
              <div className="media-body">
                <h3>286+</h3>
                <p>Projects done</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
            <div className="media align-items-center overview__single">
              <span className="overview__single__icon">
                <i className="ti-face-smile">
                  <FaSmile style={{ fontSize: 50 }} />
                </i>
              </span>
              <div className="media-body">
                <h3>942+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
            <div className="media align-items-center overview__single">
              <span className="overview__single__icon">
                <i className="ti-user">
                  <ImUserTie style={{ fontSize: 50 }} />
                </i>
              </span>
              <div className="media-body">
                <h3>263+</h3>
                <p>Real professionals</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
            <div className="media align-items-center overview__single">
              <span className="overview__single__icon">
                <i className="ti-gift">
                  <GiPresent style={{ fontSize: 60 }} />
                </i>
              </span>
              <div className="media-body">
                <h3>2000+</h3>
                <p>Cups of Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
