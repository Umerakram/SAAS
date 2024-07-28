import CollectedAmount from "./CollectedAmount";
import PropTypes from "prop-types";
import "./EstimatedFeeContainer.css";

const EstimatedFeeContainer = ({ className = "" }) => {
  return (
    <div className={`estimated-fee-container ${className}`}>
      <div className="estimated-fee-container-child" />
      <div className="estimated-fee-this-month-wrapper">
        <b className="estimated-fee-this">Estimated Fee This Month</b>
      </div>
      <div className="estimation-details">
        <div className="estimation-wrapper">
          <div className="estimation">Estimation</div>
        </div>
        <div className="collection-data">
          <CollectedAmount collection="Collection" />
          <div className="remaining-fee-container">
            <div className="remaining-calculation">
              <div className="remaining-inner-container">
                <div className="remaining-calculation-elements-parent">
                  <div className="remaining-calculation-elements">
                    <img
                      className="rupee-currency-icon7"
                      loading="lazy"
                      alt=""
                      src="/rupee-currency-8.svg"
                    />
                  </div>
                  <b className="remaining-value">35,000</b>
                </div>
              </div>
              <div className="progress-indicator">
                <div className="progress-circles" />
                <div className="progress-circles1" />
              </div>
            </div>
            <CollectedAmount collection="Remaining" />
          </div>
        </div>
      </div>
    </div>
  );
};

EstimatedFeeContainer.propTypes = {
  className: PropTypes.string,
};

export default EstimatedFeeContainer;
