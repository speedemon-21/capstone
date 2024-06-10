import "./PageHeader.scss";

//import searchIcon from "../../assets/Icons/search-24px.svg";


import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <header className="header">
    <div className="logo">Oases</div>
    <Link to="/login" className="login-button">Login</Link>
  </header>
  );
};

export default PageHeader;
