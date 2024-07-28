import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMinusIconClick = useCallback(() => {
    navigate("/dashboard-exam");
  }, [navigate]);

  return (
    <div className={`navbar ${className}`}>
      <div className="navbar-child" />
      <div className="logo-wrapper">
        <a className="logo1">LOGO</a>
      </div>
      <div className="menu-items-parent">
        <div className="menu-items">
          <div className="rectangle-parent21">
            <div className="frame-child28" />
            <div className="frame-child29" />
          </div>
        </div>
        <div className="navigation2">
          <div className="navigation-items">
            <img className="home-icon" loading="lazy" alt="" src="/home.svg" />
            <div className="menu-options">
              <img
                className="students-icon"
                loading="lazy"
                alt=""
                src="/students.svg"
              />
              <img
                className="employees-icon"
                loading="lazy"
                alt=""
                src="/employees.svg"
              />
              <img
                className="accounts-icon"
                loading="lazy"
                alt=""
                src="/accounts.svg"
              />
              <img
                className="fees-icon"
                loading="lazy"
                alt=""
                src="/fees.svg"
              />
              <img
                className="attendance-icon"
                loading="lazy"
                alt=""
                src="/attendance.svg"
              />
              <input className="exam" type="checkbox" />
            </div>
          </div>
          <img
            className="configuration-icon"
            loading="lazy"
            alt=""
            src="/configuration.svg"
          />
        </div>
        <div className="dashboard-items-parent">
          <div className="dashboard-items">
            <a className="dashboard1">Dashboard</a>
            <div className="actions-parent">
              <div className="actions">
                <div className="action-items">
                  <div className="students">Students</div>
                  <a className="employees">Employees</a>
                  <a className="accounts">Accounts</a>
                  <div className="fees">Fees</div>
                  <div className="attendance">Attendance</div>
                  <b className="exam1">Exam</b>
                  <div className="create-new-exam">Create New Exam</div>
                  <div className="edit-or-delete">Edit or Delete</div>
                </div>
              </div>
              <div className="action-icons">
                <img
                  className="plus-icon"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <img
                  className="plus-icon1"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <img className="plus-icon2" alt="" src="/plus.svg" />
                <img
                  className="plus-icon3"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <img
                  className="plus-icon4"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <img
                  className="minus-icon"
                  loading="lazy"
                  alt=""
                  src="/minus.svg"
                />
              </div>
            </div>
          </div>
          <div className="add-update">Add / Update Exam Marks</div>
          <div className="result-items-parent">
            <div className="result-items">
              <div className="result-menu">
                <b className="result">Result</b>
                <div className="student-wise-result">Student Wise Result</div>
                <b className="class-wise-result1">Class Wise Result</b>
                <div className="configuration">Configuration</div>
              </div>
            </div>
            <div className="result-action-icons">
              <img
                className="minus-icon1"
                loading="lazy"
                alt=""
                src="/minus.svg"
                onClick={onMinusIconClick}
              />
              <img
                className="plus-icon5"
                loading="lazy"
                alt=""
                src="/plus.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
