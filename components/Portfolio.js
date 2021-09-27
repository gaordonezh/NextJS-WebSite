const Projects = () => {
  return (
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
            <h4 className="section-intro__title left-border">December, 2018</h4>
            <h2 className="section-intro__subtitle small">
              Pure Bedroom Architecture
            </h2>
            <p>
              If you are looking at blank cassettes on the web lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt.
            </p>

            <a className="btn btn--rightBorder mt-3" href="#/">
              Read More
            </a>
          </div>
        </div>

        <div className="row align-items-end pb-md-5 mb-4">
          <div className="col-md-5 mb-5 pr-xl-5 order-2 order-md-1">
            <h4 className="section-intro__title left-border">December, 2018</h4>
            <h2 className="section-intro__subtitle small">
              Pure Bedroom Architecture
            </h2>
            <p>
              If you are looking at blank cassettes on the web lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt.
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
            <h4 className="section-intro__title left-border">December, 2018</h4>
            <h2 className="section-intro__subtitle small">
              Pure Bedroom Architecture
            </h2>
            <p>
              If you are looking at blank cassettes on the web lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt.
            </p>

            <a className="btn btn--rightBorder mt-3" href="#/">
              Read More
            </a>
          </div>
        </div>

        <div className="row align-items-end pb-md-5 mb-4">
          <div className="col-md-5 mb-5 pr-xl-5 order-2 order-md-1">
            <h4 className="section-intro__title left-border">December, 2018</h4>
            <h2 className="section-intro__subtitle small">
              Pure Bedroom Architecture
            </h2>
            <p>
              If you are looking at blank cassettes on the web lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt.
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
  );
};

export default Projects;
