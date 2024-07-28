import { useMemo } from "react";
import PropTypes from "prop-types";
import "./MetricsContainer2.css";

const MetricsContainer2 = ({
  className = "",
  propBoxShadow,
  propBackgroundColor,
}) => {
  const metricsContainerStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor,
    };
  }, [propBoxShadow, propBackgroundColor]);

  return (
    <div
      className={`metrics-container2 ${className}`}
      style={metricsContainerStyle}
    >
      <div className="metrics-container-child1" />
      <a className="total-students">Total Students</a>
      <div className="value-boxes">
        <div className="value-units">
          <img
            className="students-icon2"
            loading="lazy"
            alt=""
            src="/students-1.svg"
          />
        </div>
        <b className="dues-data">50</b>
      </div>
    </div>
  );
};

MetricsContainer2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default MetricsContainer2;
