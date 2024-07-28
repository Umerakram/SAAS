import Navbar2 from "../components/Navbar2";
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
import "./DashboardFees.css";

const DashboardFees = () => {
  return (
    <div className="dashboard-fees">
      <div className="dashboard-fees-child" />
      <Navbar2 />
      <header className="fullscreen-notification">
        <div className="fullscreen-notification-items">
          <div className="fullscreen-notification-items-child" />
          <div className="fullscreen-notification-labels">
            <img
              className="full-screen-icon4"
              loading="lazy"
              alt=""
              src="/full-screen1.svg"
            />
          </div>
          <div className="fullscreen-notification-labels1">
            <img
              className="notification-icon4"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
          <img
            className="profile-icon4"
            loading="lazy"
            alt=""
            src="/profile-icon1.svg"
          />
        </div>
        <div className="ellipse-group">
          <div className="frame-child20" />
          <img
            className="arrow-left-icon4"
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
      <div className="rectangle-parent17">
        <div className="frame-child21" />
        <RevenueContainer />
        <div className="chart">
          <img
            className="chart-child"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <ExpenseContainer />
      </div>
      <FeeEstimation />
      <div className="class-report2">
        <div className="class-report-inner" />
        <div className="class-report-label">
          <b className="class-wise-report4">Class Wise Report</b>
        </div>
        <div className="class-report-list1">
          <div className="class-report-container1">
            <div className="class-report-header2">
              <div className="class-columns">
                <div className="class4">Class</div>
              </div>
              <div className="class-columns1">
                <div className="present-today4">Present Today</div>
              </div>
              <div className="class-columns2">
                <div className="absent-today4">Absent Today</div>
              </div>
              <div className="class-columns3">
                <a className="on-leave4">On Leave</a>
              </div>
              <div className="class-columns4">
                <div className="fees-monthly4">Fees (Monthly)</div>
              </div>
              <div className="paid-amount4">Paid Amount</div>
              <div className="balance4">Balance</div>
            </div>
          </div>
          <div className="class-data-rows">
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

export default DashboardFees;
