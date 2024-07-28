import NavigationBar from "../components/NavigationBar";
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
import "./DashboardExam.css";

const DashboardExam = () => {
  return (
    <div className="dashboard-exam">
      <div className="dashboard-exam-child" />
      <NavigationBar />
      <header className="top-bar">
        <div className="screen-controls">
          <div className="screen-controls-child" />
          <div className="control-labels">
            <img
              className="full-screen-icon2"
              loading="lazy"
              alt=""
              src="/full-screen1.svg"
            />
          </div>
          <div className="control-labels1">
            <img
              className="notification-icon2"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
          <img
            className="profile-icon2"
            loading="lazy"
            alt=""
            src="/profile-icon1.svg"
          />
        </div>
        <div className="back-button1">
          <div className="profile-picture1" />
          <img
            className="arrow-left-icon2"
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
      <div className="rectangle-parent14">
        <div className="frame-child17" />
        <RevenueContainer />
        <div className="chart-icon">
          <img
            className="chart-placeholder-icon"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <ExpenseContainer />
      </div>
      <FeeEstimation />
      <div className="rectangle-parent15">
        <div className="frame-child18" />
        <div className="class-report-title">
          <b className="class-wise-report2">Class Wise Report</b>
        </div>
        <div className="class-report-table1">
          <div className="class-report-table-container">
            <div className="class-report-table-header">
              <div className="class-report-table-header-colu">
                <div className="class2">Class</div>
              </div>
              <div className="class-report-table-header-colu1">
                <div className="present-today2">Present Today</div>
              </div>
              <div className="class-report-table-header-colu2">
                <div className="absent-today2">Absent Today</div>
              </div>
              <div className="class-report-table-header-colu3">
                <a className="on-leave2">On Leave</a>
              </div>
              <div className="class-report-table-header-colu4">
                <div className="fees-monthly2">Fees (Monthly)</div>
              </div>
              <div className="paid-amount2">Paid Amount</div>
              <div className="balance2">Balance</div>
            </div>
          </div>
          <div className="class-report-table-data">
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

export default DashboardExam;
