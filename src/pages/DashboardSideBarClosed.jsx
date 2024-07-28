import Navbar1 from "../components/Navbar1";
import FeeCollection from "../components/FeeCollection";
import MetricsContainer2 from "../components/MetricsContainer2";
import MetricsContainer1 from "../components/MetricsContainer1";
import MetricsContainer from "../components/MetricsContainer";
import StudentEmployeeMetrics2 from "../components/StudentEmployeeMetrics2";
import RevenueContainer from "../components/RevenueContainer";
import ExpenseContainer from "../components/ExpenseContainer";
import FeeEstimation from "../components/FeeEstimation";
import ClassData from "../components/ClassData";
import StudentEmployeeMetrics1 from "../components/StudentEmployeeMetrics1";
import StudentEmployeeMetrics from "../components/StudentEmployeeMetrics";
import "./DashboardSideBarClosed.css";

const DashboardSideBarClosed = () => {
  return (
    <div className="dashboard-side-bar-closed">
      <div className="dashboard-side-bar-closed-child" />
      <Navbar1 />
      <header className="profile-actions-parent">
        <div className="profile-actions">
          <div className="profile-actions-child" />
          <div className="action-buttons">
            <img
              className="full-screen-icon1"
              loading="lazy"
              alt=""
              src="/full-screen1.svg"
            />
          </div>
          <div className="action-buttons1">
            <img
              className="notification-icon1"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
          <img
            className="profile-icon1"
            loading="lazy"
            alt=""
            src="/profile-icon1.svg"
          />
        </div>
        <div className="navigation">
          <div className="profile-picture" />
          <img
            className="arrow-right-icon"
            loading="lazy"
            alt=""
            src="/arrow-right.svg"
          />
        </div>
      </header>
      <FeeCollection />
      <MetricsContainer2 propBoxShadow="unset" propBackgroundColor="#bbb8b8" />
      <MetricsContainer1 propBoxShadow="unset" propBackgroundColor="#bbb8b8" />
      <MetricsContainer
        totalProfit="Total Profit"
        duesValue="4,200"
        staffPresentValue="3,000"
        propLeft="1122px"
        propBackgroundColor="#bbb8b8"
        propBoxShadow="unset"
      />
      <StudentEmployeeMetrics2 dues="Dues" prop="20,200" prop1="15,000" />
      <div className="revenue-container">
        <div className="revenue-container-child" />
        <RevenueContainer />
        <div className="divider">
          <img
            className="divider-child"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <ExpenseContainer />
      </div>
      <FeeEstimation />
      <div className="class-report">
        <div className="class-report-child" />
        <div className="report-title">
          <b className="class-wise-report1">Class Wise Report</b>
        </div>
        <div className="report-data">
          <div className="report-table">
            <div className="table-header">
              <div className="header-items">
                <div className="class1">Class</div>
              </div>
              <div className="header-items1">
                <div className="present-today1">Present Today</div>
              </div>
              <div className="header-items2">
                <div className="absent-today1">Absent Today</div>
              </div>
              <div className="header-items3">
                <div className="on-leave1">On Leave</div>
              </div>
              <div className="header-items4">
                <div className="fees-monthly1">Fees (Monthly)</div>
              </div>
              <div className="paid-amount1">Paid Amount</div>
              <div className="balance1">Balance</div>
            </div>
          </div>
          <div className="class-report-list">
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

export default DashboardSideBarClosed;
