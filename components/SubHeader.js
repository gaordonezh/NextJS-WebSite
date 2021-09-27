const SubHeader = ({ title }) => {
  return (
    <header class="hero-banner project-bg">
      <div class="container">
        <h2 class="section-intro__subtitle">{title}</h2>
        <div class="btn-group breadcrumb">
          <a href="#/" class="btn">
            Home
          </a>
          <span class="btn btn--rightBorder">{title}</span>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
