import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./LogoContainer.css";

const LogoContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPlusIconClick = useCallback(() => {
    navigate("/dashboard-students");
  }, [navigate]);

  const onPlusIconClick1 = useCallback(() => {
    navigate("/dashboard-employees");
  }, [navigate]);

  const onPlusIconClick2 = useCallback(() => {
    navigate("/dashboard-accounts");
  }, [navigate]);

  const onPlusIconClick3 = useCallback(() => {
    navigate("/dashboard-fees");
  }, [navigate]);

  const onPlusIconClick4 = useCallback(() => {
    navigate("/dashboard-attendance");
  }, [navigate]);

  const onPlusIconClick5 = useCallback(() => {
    navigate("/dashboard-exam");
  }, [navigate]);

  return (
    <div className={`logo-container ${className}`}>
      <div className="logo-container-child" />
      <div className="logo-wrapper-parent">
        <div className="logo-wrapper1">
          <div className="logo-shape" />
        </div>
        <div className="navigation3">
          <div className="menu-container">
            <a className="logo2">LOGO</a>
          </div>
          <div className="menu-items1">
            <div className="menu-list">
              <div className="menu-headings">
                <img
                  className="home-icon1"
                  loading="lazy"
                  alt=""
                  src="/home1.svg"
                />
                <div className="sub-links">
                  <a className="dashboard2">Dashboard</a>
                </div>
              </div>
              <div className="menu-headings1">
                <img
                  className="students-icon1"
                  loading="lazy"
                  alt=""
                  src="/students.svg"
                />
                <div className="students-wrapper">
                  <div className="students1">Students</div>
                </div>
              </div>
            </div>
            <div className="employee-menu-parent">
              <div className="employee-menu">
                <img className="employees-icon1" alt="" src="/employees.svg" />
                <img className="accounts-icon1" alt="" src="/accounts.svg" />
                <img
                  className="fees-icon1"
                  loading="lazy"
                  alt=""
                  src="/fees.svg"
                />
              </div>
              <div className="account-menu-wrapper">
                <div className="account-menu">
                  <div className="employees1">Employees</div>
                  <div className="accounts1">Accounts</div>
                  <div className="fees1">Fees</div>
                </div>
              </div>
            </div>
            <div className="attendance-menu-parent">
              <div className="attendance-menu">
                <img
                  className="attendance-icon1"
                  loading="lazy"
                  alt=""
                  src="/attendance.svg"
                />
                <input className="exam3" type="checkbox" />
                <img
                  className="configuration-icon1"
                  loading="lazy"
                  alt=""
                  src="/configuration.svg"
                />
              </div>
              <div className="exam-menu-wrapper">
                <div className="exam-menu">
                  <div className="attendance1">Attendance</div>
                  <div className="exam4">Exam</div>
                  <div className="configuration1">Configuration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plus-icons">
        <img
          className="plus-icon6"
          alt=""
          src="/plus.svg"
          onClick={onPlusIconClick}
        />
        <img
          className="plus-icon7"
          alt=""
          src="/plus.svg"
          onClick={onPlusIconClick1}
        />
        <img
          className="plus-icon8"
          alt=""
          src="/plus.svg"
          onClick={onPlusIconClick2}
        />
        <img
          className="plus-icon9"
          loading="lazy"
          alt=""
          src="/plus.svg"
          onClick={onPlusIconClick3}
        />
        <img
          className="plus-icon10"
          loading="lazy"
          alt=""
          src="/plus.svg"
          onClick={onPlusIconClick4}
        />
        <img
          className="plus-icon11"
          loading="lazy"
          alt=""
          src="/plus.svg"
          onClick={onPlusIconClick5}
        />
        <img className="plus-icon12" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </div>
  );
};

LogoContainer.propTypes = {
  className: PropTypes.string,
};

export default LogoContainer;
