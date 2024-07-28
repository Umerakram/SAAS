import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./ExamResultClassWiseResu.css";

const ExamResultClassWiseResu = () => {
  return (
    <div className="exam-result-class-wise-resu">
      <div className="exam-result-class-wise-resu-child" />
      <Navbar />
      <div className="breadcrumb">
        <div className="breadcrumb-child" />
        <img
          className="arrow-left-icon"
          loading="lazy"
          alt=""
          src="/arrow-left.svg"
        />
      </div>
      <Header />
      <h1 className="class-wise-result">Class Wise Result (bulk)</h1>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="menu-spacer-wrapper">
          <div className="menu-spacer">2024 - 2025</div>
        </div>
        <img className="arrow-down-icon" alt="" src="/arrow-down.svg" />
      </div>
      <div className="rectangle-group">
        <div className="frame-item" />
        <img className="arrow-down-icon1" alt="" src="/arrow-down.svg" />
      </div>
      <div className="rectangle-container">
        <div className="frame-inner" />
        <img className="arrow-down-icon2" alt="" src="/arrow-down-2.svg" />
      </div>
      <b className="select-session">Select Session</b>
      <b className="select-class">Select Class</b>
      <b className="select-exam">Select Exam</b>
      <button className="button">
        <div className="submit-button-shape" />
        <b className="submit">Search</b>
      </button>
    </div>
  );
};

export default ExamResultClassWiseResu;
