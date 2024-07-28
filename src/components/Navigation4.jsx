import PropTypes from "prop-types";
import "./Navigation4.css";

const Navigation4 = ({ className = "" }) => {
  return (
    <form className={`navigation7 ${className}`}>
      <div className="navigation-child1" />
      <div className="rectangle-parent52">
        <div className="frame-child67" />
        <img className="home-icon9" alt="" src="/home.svg" />
        <div className="menu-icons12">
          <a className="dashboard9">Dashboard</a>
        </div>
      </div>
      <div className="rectangle-parent53">
        <div className="frame-child68" />
        <div className="students-parent4">
          <img
            className="students-icon10"
            loading="lazy"
            alt=""
            src="/students.svg"
          />
          <div className="students-wrapper1">
            <div className="students8">Students</div>
          </div>
        </div>
        <img className="plus-icon48" alt="" src="/plus.svg" />
      </div>
      <div className="rectangle-parent54">
        <div className="frame-child69" />
        <div className="employees-parent5">
          <img className="employees-icon10" alt="" src="/employees.svg" />
          <div className="employees-wrapper5">
            <div className="employees8">Employees</div>
          </div>
        </div>
        <img className="plus-icon49" alt="" src="/plus.svg" />
      </div>
      <div className="rectangle-parent55">
        <div className="frame-child70" />
        <div className="accounts-parent5">
          <img className="accounts-icon9" alt="" src="/accounts.svg" />
          <div className="accounts-wrapper4">
            <div className="accounts8">Accounts</div>
          </div>
        </div>
        <input className="minus2" type="checkbox" />
      </div>
      <button className="rectangle-parent56">
        <div className="frame-child71" />
        <div className="chart-of-accounts">Chart Of Accounts</div>
      </button>
      <div className="rectangle-parent57">
        <div className="frame-child72" />
        <div className="add-income">Add Income</div>
      </div>
      <div className="rectangle-parent58">
        <div className="frame-child73" />
        <div className="add-expense">Add Expense</div>
      </div>
      <div className="rectangle-parent59">
        <div className="frame-child74" />
        <div className="account-statement">Account Statement</div>
      </div>
      <div className="rectangle-parent60">
        <div className="frame-child75" />
        <div className="fees-parent2">
          <img className="fees-icon8" alt="" src="/fees.svg" />
          <div className="fees-wrapper2">
            <div className="fees7">Fees</div>
          </div>
        </div>
        <img className="plus-icon50" alt="" src="/plus.svg" />
      </div>
      <div className="rectangle-parent61">
        <div className="frame-child76" />
        <div className="attendance-parent3">
          <img
            className="attendance-icon8"
            loading="lazy"
            alt=""
            src="/attendance.svg"
          />
          <div className="attendance-wrapper3">
            <div className="attendance7">Attendance</div>
          </div>
        </div>
        <img className="plus-icon51" loading="lazy" alt="" src="/plus.svg" />
      </div>
      <div className="rectangle-parent62">
        <div className="frame-child77" />
        <div className="exam-parent5">
          <input className="exam16" type="checkbox" />
          <input className="frame-child78" placeholder="Exam" type="text" />
        </div>
        <img className="plus-icon52" alt="" src="/plus.svg" />
      </div>
      <div className="rectangle-parent63">
        <div className="frame-child79" />
        <div className="configuration-parent5">
          <img
            className="configuration-icon9"
            loading="lazy"
            alt=""
            src="/configuration.svg"
          />
          <div className="configuration-wrapper4">
            <div className="configuration8">Configuration</div>
          </div>
        </div>
        <img className="plus-icon53" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </form>
  );
};

Navigation4.propTypes = {
  className: PropTypes.string,
};

export default Navigation4;
