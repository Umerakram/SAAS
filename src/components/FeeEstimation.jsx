import PropTypes from "prop-types";
import "./FeeEstimation.css";

const FeeEstimation = ({ className = "" }) => {
  return (
    <div className={`fee-estimation ${className}`}>
      <div className="fee-estimation-child" />
      <div className="estimation-title">
        <b className="estimated-fee-this1">Estimated Fee This Month</b>
      </div>
      <div className="estimation-details1">
        <div className="estimation-values">
          <div className="estimation1">Estimation</div>
        </div>
        <div className="collection-data1">
          <div className="estimated-collection">
            <div className="collection-amount1">
              <div className="amount-details">
                <div className="collection1">Collection</div>
              </div>
              <div className="currency-value">
                <div className="currency-container">
                  <img
                    className="rupee-currency-icon10"
                    loading="lazy"
                    alt=""
                    src="/rupee-currency-8.svg"
                  />
                </div>
                <b className="value">35,000</b>
              </div>
            </div>
          </div>
          <div className="collected-amount1">
            <div className="collected-details1">
              <div className="collected-value">
                <div className="amount-details1">
                  <div className="currency-value1">
                    <img
                      className="rupee-currency-icon11"
                      loading="lazy"
                      alt=""
                      src="/rupee-currency-8.svg"
                    />
                  </div>
                  <b className="value1">35,000</b>
                </div>
              </div>
              <div className="progress-indicator1">
                <div className="indicators">
                  <div className="indicator" />
                  <div className="indicator1" />
                </div>
              </div>
            </div>
            <div className="remaining-amount">
              <div className="remaining-details">
                <div className="remaining-value1">
                  <div className="remaining">Remaining</div>
                </div>
                <div className="currency-value2">
                  <div className="currency-container1">
                    <img
                      className="rupee-currency-icon12"
                      loading="lazy"
                      alt=""
                      src="/rupee-currency-8.svg"
                    />
                  </div>
                  <b className="value2">35,000</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeeEstimation.propTypes = {
  className: PropTypes.string,
};

export default FeeEstimation;
