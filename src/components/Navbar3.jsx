import PropTypes from "prop-types";
import "./Navbar3.css";

const Navbar3 = ({ className = "" }) => {
  return (
    <form className={`navbar3 ${className}`}>
      <div className="navbar-child1" />
      <div className="navbar-items11">
        <div className="navbar-items-child9" />
        <img className="home-icon6" alt="" src="/home.svg" />
        <div className="counter-icons">
          <a className="dashboard6">Dashboard</a>
        </div>
      </div>
      <div className="navbar-items12">
        <div className="navbar-items-child10" />
        <div className="students-parent1">
          <img
            className="students-icon7"
            loading="lazy"
            alt=""
            src="/students.svg"
          />
          <div className="sub-modules">
            <div className="students5">Students</div>
          </div>
        </div>
        <img className="plus-icon30" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items13">
        <div className="navbar-items-child11" />
        <div className="employees-parent2">
          <img className="employees-icon7" alt="" src="/employees.svg" />
          <div className="employees-wrapper2">
            <div className="employees5">Employees</div>
          </div>
        </div>
        <img className="minus-icon6" alt="" src="/minus.svg" />
      </div>
      <div className="navbar-items14">
        <div className="navbar-items-child12" />
        <div className="add-new">Add New</div>
      </div>
      <button className="navbar-items15">
        <div className="navbar-items-child13" />
        <div className="all-employees">All Employees</div>
      </button>
      <div className="navbar-items16">
        <div className="navbar-items-child14" />
        <div className="employee-id-card">Employee ID Card</div>
      </div>
      <div className="navbar-items17">
        <div className="navbar-items-child15" />
        <div className="accounts-parent2">
          <img
            className="accounts-icon6"
            loading="lazy"
            alt=""
            src="/accounts.svg"
          />
          <div className="accounts-wrapper1">
            <div className="accounts5">Accounts</div>
          </div>
        </div>
        <img className="plus-icon31" loading="lazy" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items18">
        <div className="navbar-items-child16" />
        <div className="fees-container">
          <img className="fees-icon5" alt="" src="/fees.svg" />
          <div className="fees-frame">
            <div className="fees4">Fees</div>
          </div>
        </div>
        <img className="plus-icon32" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items19">
        <div className="navbar-items-child17" />
        <div className="attendance-container">
          <img className="attendance-icon5" alt="" src="/attendance.svg" />
          <div className="attendance-frame">
            <div className="attendance4">Attendance</div>
          </div>
        </div>
        <img className="plus-icon33" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items20">
        <div className="navbar-items-child18" />
        <div className="exam-parent2">
          <input className="exam11" type="checkbox" />
          <div className="exam-frame">
            <div className="exam12">Exam</div>
          </div>
        </div>
        <img className="plus-icon34" alt="" src="/plus.svg" />
      </div>
      <div className="navbar-items21">
        <div className="navbar-items-child19" />
        <div className="configuration-parent2">
          <img
            className="configuration-icon6"
            loading="lazy"
            alt=""
            src="/configuration.svg"
          />
          <div className="configuration-wrapper1">
            <div className="configuration5">Configuration</div>
          </div>
        </div>
        <img className="plus-icon35" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </form>
  );
};

Navbar3.propTypes = {
  className: PropTypes.string,
};

export default Navbar3;
