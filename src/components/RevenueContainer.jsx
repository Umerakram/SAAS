import PropTypes from "prop-types";
import "./RevenueContainer.css";

const RevenueContainer = ({ className = "" }) => {
  return (
    <div className={`revenue-container1 ${className}`}>
      <a className="revenue">Revenue</a>
      <div className="revenue-data">
        <div className="this-month-revenue">
          <img
            className="rupee-currency-icon2"
            loading="lazy"
            alt=""
            src="/rupee-currency.svg"
          />
          <div className="this-month1">This Month</div>
        </div>
        <div className="last-month-revenue">
          <b className="last-month-revenue1">7,800</b>
          <div className="last-month-data">
            <div className="last-month-details">
              <div className="last-month-currency-container">
                <img
                  className="rupee-currency-icon3"
                  alt=""
                  src="/rupee-currency-1.svg"
                />
              </div>
              <div className="last-month-revenue2">5,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RevenueContainer.propTypes = {
  className: PropTypes.string,
};

export default RevenueContainer;
