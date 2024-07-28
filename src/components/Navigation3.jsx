import PropTypes from "prop-types";
import "./Navigation3.css";

const Navigation3 = ({ className = "" }) => {
  return (
    <div className={`navigation6 ${className}`}>
      <div className="navigation-inner" />
      <div className="navigation-items1">
        <div className="navigation-items-child" />
        <img className="home-icon8" alt="" src="/home.svg" />
        <div className="navigation-icons">
          <a className="dashboard8">Dashboard</a>
        </div>
      </div>
      <div className="navigation-items2">
        <div className="navigation-items-item" />
        <div className="students-parent3">
          <img
            className="students-icon9"
            loading="lazy"
            alt=""
            src="/students.svg"
          />
          <div className="module-dropdown">
            <a className="students7">Students</a>
          </div>
        </div>
        <img className="plus-icon42" alt="" src="/plus.svg" />
      </div>
      <div className="navigation-items3">
        <div className="navigation-items-inner" />
        <div className="employees-parent4">
          <img className="employees-icon9" alt="" src="/employees.svg" />
          <div className="employees-wrapper4">
            <a className="employees7">Employees</a>
          </div>
        </div>
        <img className="plus-icon43" alt="" src="/plus.svg" />
      </div>
      <div className="navigation-items4">
        <div className="navigation-items-child1" />
        <div className="accounts-parent4">
          <img className="accounts-icon8" alt="" src="/accounts.svg" />
          <div className="accounts-wrapper3">
            <a className="accounts7">Accounts</a>
          </div>
        </div>
        <img className="plus-icon44" alt="" src="/plus.svg" />
      </div>
      <div className="fee-attendance">
        <div className="fee-attendance-container">
          <div className="fee-attendance-container-child" />
          <div className="fee-attendance-labels">
            <img className="fees-icon7" alt="" src="/fees.svg" />
            <div className="fee-attendance-dropdown">
              <div className="fees6">Fees</div>
            </div>
          </div>
          <img className="plus-icon45" alt="" src="/plus.svg" />
        </div>
        <div className="fee-attendance-container1">
          <div className="fee-attendance-container-item" />
          <div className="attendance-parent2">
            <img
              className="attendance-icon7"
              loading="lazy"
              alt=""
              src="/attendance.svg"
            />
            <div className="attendance-wrapper2">
              <div className="attendance6">Attendance</div>
            </div>
          </div>
          <input className="minus1" type="checkbox" />
        </div>
      </div>
      <div className="navigation-items5">
        <div className="navigation-items-child2" />
        <div className="mark-student-attendance">Mark Student Attendance</div>
      </div>
      <div className="navigation-items6">
        <div className="navigation-items-child3" />
        <div className="student-attendance-report">
          Student Attendance Report
        </div>
      </div>
      <div className="navigation-items7">
        <div className="navigation-items-child4" />
        <div className="mark-employee-attendance">Mark Employee Attendance</div>
      </div>
      <div className="navigation-items8">
        <div className="navigation-items-child5" />
        <a className="employee-attendance-report">Employee Attendance Report</a>
      </div>
      <div className="navigation-items9">
        <div className="navigation-items-child6" />
        <div className="exam-parent4">
          <input className="exam14" type="checkbox" />
          <div className="exam-wrapper1">
            <div className="exam15">Exam</div>
          </div>
        </div>
        <img className="plus-icon46" alt="" src="/plus.svg" />
      </div>
      <div className="navigation-items10">
        <div className="navigation-items-child7" />
        <div className="configuration-parent4">
          <img
            className="configuration-icon8"
            loading="lazy"
            alt=""
            src="/configuration.svg"
          />
          <div className="configuration-wrapper3">
            <div className="configuration7">Configuration</div>
          </div>
        </div>
        <img className="plus-icon47" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </div>
  );
};

Navigation3.propTypes = {
  className: PropTypes.string,
};

export default Navigation3;
