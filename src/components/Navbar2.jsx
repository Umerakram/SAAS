import PropTypes from "prop-types";
import "./Navbar2.css";

const Navbar2 = ({ className = "" }) => {
  return (
    <div className={`navbar2 ${className}`}>
      <div className="navbar-inner" />
      <div className="navbar-items">
        <div className="navbar-items-child" />
        <img className="home-icon5" alt="" src="/home.svg" />
        <div className="icons1">
          <a className="dashboard5">Dashboard</a>
        </div>
      </div>
      <div className="navbar-items1">
        <div className="navbar-items-item" />
        <div className="students-container">
          <img
            className="students-icon6"
            loading="lazy"
            alt=""
            src="/students.svg"
          />
          <div className="sub-nav-link-labels">
            <a className="students4">Students</a>
          </div>
        </div>
        <img className="plus-icon24" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items2">
        <div className="navbar-items-inner" />
        <div className="employees-parent1">
          <img className="employees-icon6" alt="" src="/employees.svg" />
          <div className="employees-wrapper1">
            <a className="employees4">Employees</a>
          </div>
        </div>
        <img className="plus-icon25" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items3">
        <div className="navbar-items-child1" />
        <div className="accounts-parent1">
          <img className="accounts-icon5" alt="" src="/accounts.svg" />
          <div className="accounts-frame">
            <a className="accounts4">Accounts</a>
          </div>
        </div>
        <img className="plus-icon26" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items4">
        <div className="navbar-items-child2" />
        <div className="fees-group">
          <img className="fees-icon4" loading="lazy" alt="" src="/fees.svg" />
          <div className="fees-wrapper">
            <div className="fees3">Fees</div>
          </div>
        </div>
        <img className="minus-icon5" loading="lazy" alt="" src="/minus.svg" />
      </div>
      <div className="navbar-items5">
        <div className="navbar-items-child3" />
        <div className="fee-receipt">Fee Receipt</div>
      </div>
      <div className="navbar-items6">
        <div className="navbar-items-child4" />
        <div className="fee-report">Fee Report</div>
      </div>
      <div className="navbar-items7">
        <div className="navbar-items-child5" />
        <div className="fee-defaulters">Fee Defaulters</div>
      </div>
      <div className="navbar-items8">
        <div className="navbar-items-child6" />
        <div className="attendance-group">
          <img className="attendance-icon4" alt="" src="/attendance.svg" />
          <div className="attendance-wrapper">
            <div className="attendance3">Attendance</div>
          </div>
        </div>
        <img className="plus-icon27" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items9">
        <div className="navbar-items-child7" />
        <div className="exam-parent1">
          <input className="exam10" type="checkbox" />
          <input className="frame-child65" placeholder="Exam" type="text" />
        </div>
        <img className="plus-icon28" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items10">
        <div className="navbar-items-child8" />
        <div className="configuration-parent1">
          <img
            className="configuration-icon5"
            loading="lazy"
            alt=""
            src="/configuration.svg"
          />
          <div className="configuration-frame">
            <div className="configuration4">Configuration</div>
          </div>
        </div>
        <img className="plus-icon29" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </div>
  );
};

Navbar2.propTypes = {
  className: PropTypes.string,
};

export default Navbar2;
