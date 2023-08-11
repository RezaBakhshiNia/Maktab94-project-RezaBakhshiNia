import HeaderMenu from "./HeaderMenu";
import TopHeader from "./TopHeader";
import "./Header.scss";

function Header() {
  return (
    <header className="header-container">
      <TopHeader />
      <HeaderMenu />
    </header>
  );
}

export default Header;
