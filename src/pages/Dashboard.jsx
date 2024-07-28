import LogoContainer from "../components/LogoContainer";
import FrameComponent from "../components/FrameComponent";
import MetricsContainer2 from "../components/MetricsContainer2";
import MetricsContainer1 from "../components/MetricsContainer1";
import MetricsContainer from "../components/MetricsContainer";
import RevenueContainer from "../components/RevenueContainer";
import ExpenseContainer from "../components/ExpenseContainer";
import EstimatedFeeContainer from "../components/EstimatedFeeContainer";
import ClassData from "../components/ClassData";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-child" />
      <LogoContainer />
      <div className="frame-div">
        <div className="rectangle-div" />
        <div className="notification-elements">
          <img
            className="full-screen-icon"
            loading="lazy"
            alt=""
            src="/full-screen.svg"
          />
        </div>
        <div className="notification-elements1">
          <img
            className="notification-icon"
            loading="lazy"
            alt=""
            src="/notification.svg"
          />
        </div>
        <img
          className="profile-icon"
          loading="lazy"
          alt=""
          src="/profile-icon.svg"
        />
      </div>
      <div className="back-navigation">
        <div className="back-button" />
        <img
          className="arrow-left-icon1"
          loading="lazy"
          alt=""
          src="/arrow-left.svg"
        />
      </div>
      <FrameComponent />
      <MetricsContainer2 />
      <MetricsContainer1 />
      <MetricsContainer
        totalProfit="Total Profit"
        duesValue="4,200"
        staffPresentValue="3,000"
      />
      <MetricsContainer
        totalProfit="Dues"
        duesValue="20,200"
        staffPresentValue="15,000"
        propLeft="1506px"
        propBackgroundColor="#d98585"
        propBoxShadow="4px 4px 4px rgba(0, 0, 0, 0.25)"
      />
      <div className="rectangle-parent1">
        <div className="frame-child1" />
        <RevenueContainer />
        <div className="expense-divider">
          <img className="expense-divider-child" alt="" src="/vector-1.svg" />
        </div>
        <ExpenseContainer />
      </div>
      <EstimatedFeeContainer />
      <div className="rectangle-parent2">
        <div className="frame-child2" />
        <div className="class-report-container">
          <b className="class-wise-report">Class Wise Report</b>
        </div>
        <div className="class-report-table">
          <div className="class-report-header">
            <div className="report-header-labels">
              <div className="report-columns">
                <div className="class">Class</div>
              </div>
              <div className="report-columns1">
                <div className="present-today">Present Today</div>
              </div>
              <div className="report-columns2">
                <div className="absent-today">Absent Today</div>
              </div>
              <div className="report-columns3">
                <div className="on-leave">On Leave</div>
              </div>
              <div className="report-columns4">
                <div className="fees-monthly">Fees (Monthly)</div>
              </div>
              <div className="paid-amount">Paid Amount</div>
              <div className="balance">Balance</div>
            </div>
          </div>
          <div className="report-rows">
            <ClassData prop="1" prop1="2" />
            <ClassData prop="3" prop1="4" />
            <ClassData prop="5" prop1="6" />
            <ClassData prop="7" prop1="8" />
            <ClassData prop="9" prop1="10" />
            <ClassData prop="11" prop1="12" />
          </div>
        </div>
      </div>
      <div className="metrics-container">
        <div className="metrics-container-child" />
        <b className="staff-present-today">Staff Present Today</b>
        <div className="metrics-container-inner">
          <div className="frame-parent">
            <div className="student-value-parent">
              <div className="student-value" />
              <div className="employee-value" />
            </div>
            <b className="b">13</b>
          </div>
        </div>
      </div>
      <div className="metrics-container1">
        <div className="metrics-container-item" />
        <b className="students-present-today">Students Present Today</b>
        <div className="metrics-container-inner1">
          <div className="ellipse-parent">
            <div className="ellipse-div" />
            <div className="month-value-parent">
              <div className="month-value" />
              <b className="profit-value">215</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
