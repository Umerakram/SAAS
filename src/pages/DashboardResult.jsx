import Navigation1 from "../components/Navigation1";
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
import "./DashboardResult.css";

const DashboardResult = () => {
  return (
    <div className="dashboard-result">
      <div className="dashboard-result-child" />
      <Navigation1 />
      <header className="top-bar1">
        <div className="full-screen-notification">
          <div className="full-screen-notification-child" />
          <div className="full-screen-items">
            <img
              className="full-screen-icon3"
              loading="lazy"
              alt=""
              src="/full-screen1.svg"
            />
          </div>
          <div className="full-screen-items1">
            <img
              className="notification-icon3"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
          <img
            className="profile-icon3"
            loading="lazy"
            alt=""
            src="/profile-icon1.svg"
          />
        </div>
        <div className="back-button-container">
          <div className="profile-picture2" />
          <img
            className="arrow-left-icon3"
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
      <div className="rectangle-parent16">
        <div className="frame-child19" />
        <RevenueContainer />
        <div className="revenue-icon">
          <img
            className="revenue-icon-child"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <ExpenseContainer />
      </div>
      <FeeEstimation />
      <div className="class-report1">
        <div className="class-report-item" />
        <div className="class-report-title1">
          <b className="class-wise-report3">Class Wise Report</b>
        </div>
        <div className="class-report-table2">
          <div className="class-report-header1">
            <div className="class-report-header-row">
              <div className="class-report-header-labels">
                <div className="class3">Class</div>
              </div>
              <div className="class-report-header-labels1">
                <div className="present-today3">Present Today</div>
              </div>
              <div className="class-report-header-labels2">
                <div className="absent-today3">Absent Today</div>
              </div>
              <div className="class-report-header-labels3">
                <div className="on-leave3">On Leave</div>
              </div>
              <div className="class-report-header-labels4">
                <div className="fees-monthly3">Fees (Monthly)</div>
              </div>
              <div className="paid-amount3">Paid Amount</div>
              <div className="balance3">Balance</div>
            </div>
          </div>
          <div className="class-report-body">
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

export default DashboardResult;
