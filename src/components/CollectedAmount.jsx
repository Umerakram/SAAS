import PropTypes from "prop-types";
import "./CollectedAmount.css";

const CollectedAmount = ({ className = "", collection }) => {
  return (
    <div className={`collected-amount ${className}`}>
      <div className="collected-details">
        <div className="collection-amount-container">
          <div className="collection">{collection}</div>
        </div>
        <div className="currency-icon-parent">
          <div className="currency-icon">
            <img
              className="rupee-currency-icon6"
              loading="lazy"
              alt=""
              src="/rupee-currency-8.svg"
            />
          </div>
          <b className="collection-amount">35,000</b>
        </div>
      </div>
    </div>
  );
};

CollectedAmount.propTypes = {
  className: PropTypes.string,
  collection: PropTypes.string,
};

export default CollectedAmount;
