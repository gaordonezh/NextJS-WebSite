import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="navbar-brand">
        <img src="/img/logo.png" alt="" />
      </a>
    </Link>
  );
};

export default Logo;
