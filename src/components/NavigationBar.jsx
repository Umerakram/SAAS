import { useCallback } from "react";
import MenuOptions1 from "./MenuOptions1";
import MenuOptions from "./MenuOptions";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavigationBar.css";

const NavigationBar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPlusIconClick = useCallback(() => {
    navigate("/dashboard-result");
  }, [navigate]);

  return (
    <form className={`navigation-bar ${className}`}>
      <div className="navigation-bar-child" />
      <div className="menu-options3">
        <div className="menu-options-child" />
        <img className="home-icon3" alt="" src="/home.svg" />
        <div className="icons-row">
          <a className="dashboard3">Dashboard</a>
        </div>
      </div>
      <div className="menu-options4">
        <div className="menu-options-item" />
        <div className="students-parent">
          <img
            className="students-icon4"
            loading="lazy"
            alt=""
            src="/students.svg"
          />
          <div className="secondary-menus">
            <a className="students2">Students</a>
          </div>
        </div>
        <img className="plus-icon15" alt="" src="/plus.svg" />
      </div>
      <div className="menu-options5">
        <div className="menu-options-inner" />
        <div className="employees-parent">
          <img className="employees-icon4" alt="" src="/employees.svg" />
          <div className="employees-container">
            <a className="employees2">Employees</a>
          </div>
        </div>
        <img className="plus-icon16" alt="" src="/plus.svg" />
      </div>
      <div className="menu-options6">
        <div className="menu-options-child1" />
        <div className="accounts-parent">
          <img className="accounts-icon3" alt="" src="/accounts.svg" />
          <div className="accounts-wrapper">
            <a className="accounts2">Accounts</a>
          </div>
        </div>
        <img className="plus-icon17" alt="" src="/plus.svg" />
      </div>
      <MenuOptions1 />
      <div className="menu-options7">
        <div className="menu-options-child2" />
        <div className="exam-parent">
          <input className="exam6" type="checkbox" />
          <div className="exam-wrapper">
            <div className="exam7">Exam</div>
          </div>
        </div>
        <img className="minus-icon2" loading="lazy" alt="" src="/minus.svg" />
      </div>
      <button className="menu-options8">
        <div className="menu-options-child3" />
        <div className="create-new-exam1">Create New Exam</div>
      </button>
      <MenuOptions />
      <div className="menu-options9">
        <div className="menu-options-child4" />
        <div className="result-wrapper">
          <div className="result2">Result</div>
        </div>
        <img
          className="plus-icon18"
          alt=""
          src="/plus.svg"
          onClick={onPlusIconClick}
        />
      </div>
      <div className="menu-options10">
        <div className="menu-options-child5" />
        <div className="configuration-parent">
          <img
            className="configuration-icon3"
            loading="lazy"
            alt=""
            src="/configuration.svg"
          />
          <div className="configuration-wrapper">
            <div className="configuration2">Configuration</div>
          </div>
        </div>
        <img className="plus-icon19" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </form>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
};

export default NavigationBar;
