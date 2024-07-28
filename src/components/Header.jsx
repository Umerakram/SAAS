import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-items5">
        <div className="header-items-child" />
        <div className="header-buttons">
          <img
            className="full-screen-icon9"
            loading="lazy"
            alt=""
            src="/full-screen.svg"
          />
        </div>
        <div className="header-buttons1">
          <img
            className="notification-icon9"
            loading="lazy"
            alt=""
            src="/notification.svg"
          />
        </div>
        <img
          className="profile-icon9"
          loading="lazy"
          alt=""
          src="/profile-icon.svg"
        />
      </div>
      <div className="page-header">
        <div className="header-tabs">
          <div className="header-tabs-child" />
          <input className="frame-input1" type="checkbox" />
          <div className="header-tab-items">
            <a className="exam2">Exam</a>
          </div>
          <img
            className="header-tab-items1"
            alt=""
            src="/header-tab-items.svg"
          />
          <div className="header-tab-items2">
            <a className="result1">Result</a>
          </div>
          <img
            className="header-tab-items3"
            alt=""
            src="/header-tab-items.svg"
          />
          <div className="header-tab-items4">
            <a className="class-wise-result2">Class Wise Result</a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
