import { useMemo } from "react";
import PropTypes from "prop-types";
import "./MetricsContainer.css";

const MetricsContainer = ({
  className = "",
  totalProfit,
  duesValue,
  staffPresentValue,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
}) => {
  const metricsContainer2Style = useMemo(() => {
    return {
      left: propLeft,
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propBackgroundColor, propBoxShadow]);

  return (
    <div
      className={`metrics-container4 ${className}`}
      style={metricsContainer2Style}
    >
      <div className="metrics-container-child3" />
      <a className="total-profit">{totalProfit}</a>
      <div className="frame-parent2">
        <div className="rupee-currency-parent">
          <img
            className="rupee-currency-icon"
            loading="lazy"
            alt=""
            src="/rupee-currency.svg"
          />
          <div className="this-month">This Month</div>
        </div>
        <div className="dues-value-parent">
          <b className="dues-value">{duesValue}</b>
          <div className="staff-data">
            <div className="staff-container">
              <div className="staff-values">
                <img
                  className="rupee-currency-icon1"
                  alt=""
                  src="/rupee-currency-1.svg"
                />
              </div>
              <div className="staff-present-value">{staffPresentValue}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MetricsContainer.propTypes = {
  className: PropTypes.string,
  totalProfit: PropTypes.string,
  duesValue: PropTypes.string,
  staffPresentValue: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBoxShadow: PropTypes.any,
};

export default MetricsContainer;
