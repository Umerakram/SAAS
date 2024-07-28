import PropTypes from "prop-types";
import "./StudentEmployeeMetrics1.css";

const StudentEmployeeMetrics1 = ({ className = "" }) => {
  return (
    <div className={`student-employee-metrics1 ${className}`}>
      <div className="student-employee-metrics-item" />
      <b className="staff-present-today1">Staff Present Today</b>
      <div className="student-employee-metrics-inner">
        <div className="ellipse-parent2">
          <div className="frame-child34" />
          <div className="graph-elements-parent">
            <div className="graph-elements" />
            <b className="graph-point">13</b>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentEmployeeMetrics1.propTypes = {
  className: PropTypes.string,
};

export default StudentEmployeeMetrics1;
