import Navigation2 from "../components/Navigation2";
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
import "./DashboardStudents.css";

const DashboardStudents = () => {
  return (
    <div className="dashboard-students">
      <div className="dashboard-students-child" />
      <Navigation2 />
      <header className="frame-header">
        <div className="rectangle-parent18">
          <div className="frame-child22" />
          <div className="full-screen-labels">
            <img
              className="full-screen-icon6"
              loading="lazy"
              alt=""
              src="/full-screen1.svg"
            />
          </div>
          <div className="full-screen-labels1">
            <img
              className="notification-icon6"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
          <img
            className="profile-icon6"
            loading="lazy"
            alt=""
            src="/profile-icon1.svg"
          />
        </div>
        <div className="ellipse-container">
          <div className="frame-child23" />
          <img
            className="arrow-left-icon6"
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
      <div className="revenue-report">
        <div className="revenue-report-child" />
        <RevenueContainer />
        <div className="revenue-report-inner">
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <ExpenseContainer />
      </div>
      <FeeEstimation />
      <div className="class-report5">
        <div className="class-report-child2" />
        <div className="report-label">
          <b className="class-wise-report6">Class Wise Report</b>
        </div>
        <div className="class-report-container2">
          <div className="class-columns-wrapper">
            <div className="class-columns10">
              <div className="column-titles">
                <div className="class6">Class</div>
              </div>
              <div className="column-titles1">
                <div className="present-today6">Present Today</div>
              </div>
              <div className="column-titles2">
                <div className="absent-today6">Absent Today</div>
              </div>
              <div className="column-titles3">
                <a className="on-leave6">On Leave</a>
              </div>
              <div className="column-titles4">
                <div className="fees-monthly6">Fees (Monthly)</div>
              </div>
              <div className="paid-amount6">Paid Amount</div>
              <div className="balance6">Balance</div>
            </div>
          </div>
          <div className="class-data">
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

export default DashboardStudents;
