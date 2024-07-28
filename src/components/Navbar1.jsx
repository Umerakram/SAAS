import PropTypes from "prop-types";
import "./Navbar1.css";

const Navbar1 = ({ className = "" }) => {
  return (
    <div className={`navbar1 ${className}`}>
      <div className="navbar-item" />
      <div className="menu-items2">
        <div className="menu-items-child" />
        <img className="home-icon2" loading="lazy" alt="" src="/home.svg" />
      </div>
      <div className="menu-items3">
        <div className="menu-items-item" />
        <img
          className="students-icon3"
          loading="lazy"
          alt=""
          src="/students.svg"
        />
      </div>
      <div className="menu-items4">
        <div className="menu-items-inner" />
        <img className="employees-icon3" alt="" src="/employees.svg" />
      </div>
      <div className="menu-items5">
        <div className="menu-items-child1" />
        <img className="accounts-icon2" alt="" src="/accounts.svg" />
      </div>
      <div className="menu-items6">
        <div className="menu-items-child2" />
        <img className="fees-icon2" loading="lazy" alt="" src="/fees.svg" />
      </div>
      <div className="menu-items7">
        <div className="menu-items-child3" />
        <img
          className="attendance-icon2"
          loading="lazy"
          alt=""
          src="/attendance.svg"
        />
      </div>
      <div className="menu-items8">
        <div className="menu-items-child4" />
        <input className="exam5" type="checkbox" />
      </div>
      <div className="menu-items9">
        <div className="menu-items-child5" />
        <img
          className="configuration-icon2"
          loading="lazy"
          alt=""
          src="/configuration.svg"
        />
      </div>
    </div>
  );
};

Navbar1.propTypes = {
  className: PropTypes.string,
};

export default Navbar1;
