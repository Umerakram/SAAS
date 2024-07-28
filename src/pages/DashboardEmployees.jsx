import Navbar3 from "../components/Navbar3";
import FeeCollection from "../components/FeeCollection";
import MetricsContainer2 from "../components/MetricsContainer2";
import MetricsContainer1 from "../components/MetricsContainer1";
import StudentEmployeeMetrics2 from "../components/StudentEmployeeMetrics2";
import RevenueContainer from "../components/RevenueContainer";
import ExpenseContainer from "../components/ExpenseContainer";
import FeeEstimation from "../components/FeeEstimation";
import ClassData from "../components/ClassData";
import StudentEmployeeMetrics1 from "../components/StudentEmployeeMetrics1";
import StudentEmployeeMetrics from "../components/StudentEmployeeMetrics";
import "./DashboardEmployees.css";

const DashboardEmployees = () => {
  return (
    <div className="dashboard-employees">
      <div className="dashboard-employees-child" />
      <Navbar3 />
      <header className="fullscreen-notification1">
        <div className="fullscreen-notification-option">
          <div className="fullscreen-notification-option-child" />
          <div className="fullscreen-notification-action">
            <img
              className="full-screen-icon5"
              loading="lazy"
              alt=""
              src="/full-screen1.svg"
            />
          </div>
          <div className="fullscreen-notification-action1">
            <img
              className="notification-icon5"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
          <img
            className="profile-icon5"
            loading="lazy"
            alt=""
            src="/profile-icon1.svg"
          />
        </div>
        <div className="navigation1">
          <div className="user-avatar" />
          <img
            className="arrow-left-icon5"
            loading="lazy"
            alt=""
            src="/arrow-left.svg"
          />
        </div>
      </header>
      <FeeCollection />
      <MetricsContainer2 propBoxShadow="unset" propBackgroundColor="#bbb8b8" />
      <MetricsContainer1 propBoxShadow="unset" propBackgroundColor="#bbb8b8" />
      <StudentEmployeeMetrics2
        dues="Total Profit"
        prop="4,200"
        prop1="3,000"
        propLeft="1122px"
      />
      <StudentEmployeeMetrics2
        dues="Dues"
        prop="20,200"
        prop1="15,000"
        propLeft="1506px"
      />
      <div className="financial-summary">
        <div className="financial-summary-child" />
        <RevenueContainer />
        <div className="financial-chart">
          <img
            className="revenue-trend-icon"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <ExpenseContainer />
      </div>
      <FeeEstimation />
      <div className="class-report3">
        <div className="class-report-child1" />
        <div className="report-header">
          <b className="class-wise-report5">Class Wise Report</b>
        </div>
        <div className="class-report4">
          <div className="class-report-header3">
            <div className="class-data-header">
              <div className="class-columns5">
                <div className="class5">Class</div>
              </div>
              <div className="class-columns6">
                <div className="present-today5">Present Today</div>
              </div>
              <div className="class-columns7">
                <div className="absent-today5">Absent Today</div>
              </div>
              <div className="class-columns8">
                <div className="on-leave5">On Leave</div>
              </div>
              <div className="class-columns9">
                <div className="fees-monthly5">Fees (Monthly)</div>
              </div>
              <div className="paid-amount5">Paid Amount</div>
              <div className="balance5">Balance</div>
            </div>
          </div>
          <div className="class-data-table">
            <ClassData prop="1" prop1="2" />
            <ClassData prop="3" prop1="4" />
            <ClassData prop="5" prop1="6" />
            <ClassData prop="7" prop1="8" />
            <ClassData prop="9" prop1="10" />
            <ClassData prop="11" prop1="12" />
          </div>
        </div>
      </div>
      <StudentEmployeeMetrics1 />
      <StudentEmployeeMetrics />
    </div>
  );
};

export default DashboardEmployees;
