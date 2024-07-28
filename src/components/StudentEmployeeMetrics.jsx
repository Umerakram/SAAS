import PropTypes from "prop-types";
import "./StudentEmployeeMetrics.css";

const StudentEmployeeMetrics = ({ className = "" }) => {
  return (
    <div className={`student-employee-metrics2 ${className}`}>
      <div className="student-employee-metrics-child1" />
      <b className="students-present-today1">Students Present Today</b>
      <div className="student-employee-metrics-inner1">
        <div className="ellipse-parent3">
          <div className="frame-child35" />
          <div className="ellipse-parent4">
            <div className="frame-child36" />
            <b className="b3">215</b>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentEmployeeMetrics.propTypes = {
  className: PropTypes.string,
};

export default StudentEmployeeMetrics;
