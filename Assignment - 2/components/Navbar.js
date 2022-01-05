import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/CreateWallet">
              <a> Create Wallet </a>
            </Link>
          </li>
          <li>
            <Link href="/SendFund">
              <a> Send Fund </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
