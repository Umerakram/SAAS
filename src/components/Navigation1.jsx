import { useCallback } from "react";
import MenuOptions1 from "./MenuOptions1";
import MenuOptions from "./MenuOptions";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation1.css";

const Navigation1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMinusIconClick = useCallback(() => {
    navigate("/dashboard-exam");
  }, [navigate]);

  return (
    <form className={`navigation4 ${className}`}>
      <div className="navigation-child" />
      <div className="menu-options11">
        <div className="menu-options-child6" />
        <img className="home-icon4" alt="" src="/home.svg" />
        <div className="icons">
          <a className="dashboard4">Dashboard</a>
        </div>
      </div>
      <div className="menu-options12">
        <div className="menu-options-child7" />
        <div className="students-group">
          <img
            className="students-icon5"
            loading="lazy"
            alt=""
            src="/students.svg"
          />
          <div className="plus-minus-labels">
            <a className="students3">Students</a>
          </div>
        </div>
        <img className="plus-icon20" alt="" src="/plus.svg" />
      </div>
      <div className="menu-options13">
        <div className="menu-options-child8" />
        <div className="employees-group">
          <img className="employees-icon5" alt="" src="/employees.svg" />
          <div className="employees-frame">
            <a className="employees3">Employees</a>
          </div>
        </div>
        <img className="plus-icon21" alt="" src="/plus.svg" />
      </div>
      <div className="menu-options14">
        <div className="menu-options-child9" />
        <div className="accounts-group">
          <img className="accounts-icon4" alt="" src="/accounts.svg" />
          <div className="accounts-container">
            <a className="accounts3">Accounts</a>
          </div>
        </div>
        <img className="plus-icon22" alt="" src="/plus.svg" />
      </div>
      <MenuOptions1 />
      <div className="menu-options15">
        <div className="menu-options-child10" />
        <div className="exam-group">
          <input className="exam8" type="checkbox" />
          <div className="exam-container">
            <div className="exam9">Exam</div>
          </div>
        </div>
        <img className="minus-icon3" loading="lazy" alt="" src="/minus.svg" />
      </div>
      <button className="menu-options16">
        <div className="menu-options-child11" />
        <div className="create-new-exam2">Create New Exam</div>
      </button>
      <MenuOptions />
      <div className="menu-options17">
        <div className="menu-options-child12" />
        <div className="result-container">
          <div className="result3">Result</div>
        </div>
        <img
          className="minus-icon4"
          loading="lazy"
          alt=""
          src="/minus.svg"
          onClick={onMinusIconClick}
        />
      </div>
      <button className="menu-options18">
        <div className="menu-options-child13" />
        <div className="student-wise-result1">Student Wise Result</div>
      </button>
      <div className="menu-options19">
        <div className="menu-options-child14" />
        <div className="class-wise-result3">Class Wise Result</div>
      </div>
      <div className="menu-options20">
        <div className="menu-options-child15" />
        <div className="configuration-group">
          <img
            className="configuration-icon4"
            loading="lazy"
            alt=""
            src="/configuration.svg"
          />
          <div className="configuration-container">
            <div className="configuration3">Configuration</div>
          </div>
        </div>
        <img className="plus-icon23" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </form>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
