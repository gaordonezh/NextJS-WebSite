import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="hero">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/img/logo.png" alt="" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
