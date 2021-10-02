import Link from "next/link";

const SubHeader = ({ title }) => {
  return (
    <header className="hero-banner project-bg">
      <div className="container">
        <h2 className="section-intro__subtitle">{title}</h2>
        <div className="btn-group breadcrumb">
          <Link href="/">
            <a className="btn">Home</a>
          </Link>
          <span className="btn btn--rightBorder">{title}</span>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
