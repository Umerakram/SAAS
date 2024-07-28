import PropTypes from "prop-types";
import "./Navigation2.css";

const Navigation2 = ({ className = "" }) => {
  return (
    <div className={`navigation5 ${className}`}>
      <div className="navigation-item" />
      <div className="menu-icons">
        <div className="menu-icons-child" />
        <img className="home-icon7" alt="" src="/home.svg" />
        <div className="action-icons1">
          <a className="dashboard7">Dashboard</a>
        </div>
      </div>
      <div className="menu-icons1">
        <div className="menu-icons-item" />
        <div className="students-parent2">
          <img
            className="students-icon8"
            loading="lazy"
            alt=""
            src="/students.svg"
          />
          <div className="students-frame">
            <a className="students6">Students</a>
          </div>
        </div>
        <input className="minus" type="checkbox" />
      </div>
      <input className="menu-icons2" placeholder="Add New" type="text" />
      <div className="menu-icons3">
        <div className="menu-icons-inner" />
        <div className="all-students">All Students</div>
      </div>
      <div className="menu-icons4">
        <div className="menu-icons-child1" />
        <div className="promote-students">Promote Students</div>
      </div>
      <div className="menu-icons5">
        <div className="menu-icons-child2" />
        <div className="student-id-card">Student ID Card</div>
      </div>
      <div className="menu-icons6">
        <div className="menu-icons-child3" />
        <div className="employees-parent3">
          <img className="employees-icon8" alt="" src="/employees.svg" />
          <div className="employees-wrapper3">
            <a className="employees6">Employees</a>
          </div>
        </div>
        <img className="plus-icon36" alt="" src="/plus.svg" />
      </div>
      <div className="menu-icons7">
        <div className="menu-icons-child4" />
        <div className="accounts-parent3">
          <img
            className="accounts-icon7"
            loading="lazy"
            alt=""
            src="/accounts.svg"
          />
          <div className="accounts-wrapper2">
            <div className="accounts6">Accounts</div>
          </div>
        </div>
        <img className="plus-icon37" loading="lazy" alt="" src="/plus.svg" />
      </div>
      <div className="menu-icons8">
        <div className="menu-icons-child5" />
        <div className="fees-parent1">
          <img className="fees-icon6" alt="" src="/fees.svg" />
          <div className="fees-wrapper1">
            <div className="fees5">Fees</div>
          </div>
        </div>
        <img className="plus-icon38" alt="" src="/plus.svg" />
      </div>
      <div className="menu-icons9">
        <div className="menu-icons-child6" />
        <div className="attendance-parent1">
          <img
            className="attendance-icon6"
            loading="lazy"
            alt=""
            src="/attendance.svg"
          />
          <div className="attendance-wrapper1">
            <div className="attendance5">Attendance</div>
          </div>
        </div>
        <img className="plus-icon39" loading="lazy" alt="" src="/plus.svg" />
      </div>
      <div className="menu-icons10">
        <div className="menu-icons-child7" />
        <div className="exam-parent3">
          <input className="exam13" type="checkbox" />
          <input className="frame-child66" placeholder="Exam" type="text" />
        </div>
        <img className="plus-icon40" alt="" src="/plus.svg" />
      </div>
      <div className="menu-icons11">
        <div className="menu-icons-child8" />
        <div className="configuration-parent3">
          <img
            className="configuration-icon7"
            loading="lazy"
            alt=""
            src="/configuration.svg"
          />
          <div className="configuration-wrapper2">
            <div className="configuration6">Configuration</div>
          </div>
        </div>
        <img className="plus-icon41" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </div>
  );
};

Navigation2.propTypes = {
  className: PropTypes.string,
};

export default Navigation2;
