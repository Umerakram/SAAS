import Navigation3 from "../components/Navigation3";
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
import "./DashboardAttendance.css";

const DashboardAttendance = () => {
  return (
    <div className="dashboard-attendance">
      <div className="dashboard-attendance-child" />
      <Navigation3 />
      <header className="user-actions">
        <div className="user-action-buttons">
          <div className="user-action-buttons-child" />
          <div className="user-action-labels">
            <img
              className="full-screen-icon7"
              loading="lazy"
              alt=""
              src="/full-screen1.svg"
            />
          </div>
          <div className="user-action-labels1">
            <img
              className="notification-icon7"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
          <img
            className="profile-icon7"
            loading="lazy"
            alt=""
            src="/profile-icon1.svg"
          />
        </div>
        <div className="back-navigation1">
          <div className="back-button2" />
          <img
            className="arrow-left-icon7"
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
      <div className="rectangle-parent19">
        <div className="frame-child24" />
        <RevenueContainer />
        <div className="chart1">
          <img
            className="chart-icon1"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <ExpenseContainer />
      </div>
      <FeeEstimation />
      <div className="class-report6">
        <div className="class-report-child3" />
        <div className="class-report-title2">
          <b className="class-wise-report7">Class Wise Report</b>
        </div>
        <div className="class-report-table3">
          <div className="class-report-table-header1">
            <div className="class-report-table-header-row">
              <div className="class-report-table-header-labe">
                <div className="class7">Class</div>
              </div>
              <div className="class-report-table-header-labe1">
                <div className="present-today7">Present Today</div>
              </div>
              <div className="class-report-table-header-labe2">
                <div className="absent-today7">Absent Today</div>
              </div>
              <div className="class-report-table-header-labe3">
                <a className="on-leave7">On Leave</a>
              </div>
              <div className="class-report-table-header-labe4">
                <div className="fees-monthly7">Fees (Monthly)</div>
              </div>
              <div className="paid-amount7">Paid Amount</div>
              <div className="balance7">Balance</div>
            </div>
          </div>
          <div className="class-report-table-body">
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

export default DashboardAttendance;
