import { useMemo } from "react";
import PropTypes from "prop-types";
import "./MetricsContainer1.css";

const MetricsContainer1 = ({
  className = "",
  propBoxShadow,
  propBackgroundColor,
}) => {
  const metricsContainer1Style = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor,
    };
  }, [propBoxShadow, propBackgroundColor]);

  return (
    <div
      className={`metrics-container3 ${className}`}
      style={metricsContainer1Style}
    >
      <div className="metrics-container-child2" />
      <b className="total-employees">Total Employees</b>
      <div className="frame-parent1">
        <div className="employees-wrapper">
          <img
            className="employees-icon2"
            loading="lazy"
            alt=""
            src="/employees-1.svg"
          />
        </div>
        <b className="b1">50</b>
      </div>
    </div>
  );
};

MetricsContainer1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default MetricsContainer1;
