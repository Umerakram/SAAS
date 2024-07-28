import Navigation4 from "../components/Navigation4";
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
import "./DashboardAccounts.css";

const DashboardAccounts = () => {
  return (
    <div className="dashboard-accounts">
      <div className="dashboard-accounts-child" />
      <Navigation4 />
      <header className="fullscreen-notification2">
        <div className="rectangle-parent20">
          <div className="frame-child25" />
          <div className="options">
            <img
              className="full-screen-icon8"
              loading="lazy"
              alt=""
              src="/full-screen1.svg"
            />
          </div>
          <div className="options1">
            <img
              className="notification-icon8"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
          <img
            className="profile-icon8"
            loading="lazy"
            alt=""
            src="/profile-icon1.svg"
          />
        </div>
        <div className="ellipse-parent1">
          <div className="frame-child26" />
          <img
            className="arrow-left-icon8"
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
      <div className="revenue-chart">
        <div className="revenue-chart-child" />
        <RevenueContainer />
        <div className="revenue-chart-inner">
          <img
            className="frame-child27"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <ExpenseContainer />
      </div>
      <FeeEstimation />
      <div className="class-report7">
        <div className="class-report-child4" />
        <div className="report-title1">
          <b className="class-wise-report8">Class Wise Report</b>
        </div>
        <div className="class-report8">
          <div className="class-report-content">
            <div className="class-data-header1">
              <div className="class-data-columns">
                <div className="class8">Class</div>
              </div>
              <div className="class-data-columns1">
                <div className="present-today8">Present Today</div>
              </div>
              <div className="class-data-columns2">
                <div className="absent-today8">Absent Today</div>
              </div>
              <div className="class-data-columns3">
                <div className="on-leave8">On Leave</div>
              </div>
              <div className="class-data-columns4">
                <div className="fees-monthly8">Fees (Monthly)</div>
              </div>
              <div className="paid-amount8">Paid Amount</div>
              <div className="balance8">Balance</div>
            </div>
          </div>
          <div className="class-data-table1">
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

export default DashboardAccounts;
