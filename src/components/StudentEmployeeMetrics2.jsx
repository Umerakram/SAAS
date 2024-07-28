import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StudentEmployeeMetrics2.css";

const StudentEmployeeMetrics2 = ({
  className = "",
  dues,
  prop,
  prop1,
  propLeft,
}) => {
  const studentEmployeeMetricsStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`student-employee-metrics ${className}`}
      style={studentEmployeeMetricsStyle}
    >
      <div className="student-employee-metrics-child" />
      <a className="dues">{dues}</a>
      <div className="frame-parent3">
        <div className="rupee-currency-group">
          <img
            className="rupee-currency-icon8"
            loading="lazy"
            alt=""
            src="/rupee-currency.svg"
          />
          <div className="this-month3">This Month</div>
        </div>
        <div className="parent">
          <b className="b2">{prop}</b>
          <div className="frame-wrapper1">
            <div className="frame-parent4">
              <div className="rupee-currency-wrapper">
                <img
                  className="rupee-currency-icon9"
                  alt=""
                  src="/rupee-currency-1.svg"
                />
              </div>
              <div className="div18">{prop1}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentEmployeeMetrics2.propTypes = {
  className: PropTypes.string,
  dues: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default StudentEmployeeMetrics2;
