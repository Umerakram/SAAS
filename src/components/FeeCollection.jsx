import PropTypes from "prop-types";
import "./FeeCollection.css";

const FeeCollection = ({ className = "" }) => {
  return (
    <div className={`fee-collection ${className}`}>
      <div className="fee-collection-child" />
      <div className="collection-metrics">
        <div className="this-month-fee1">This Month Fee Collection</div>
        <div className="metric-values">65%</div>
      </div>
      <div className="collection-metrics1">
        <img
          className="collection-metrics-child"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <div className="collection-metrics2">
        <div className="last-month-fee1">Last Month Fee Collection</div>
        <div className="div16">65%</div>
      </div>
      <div className="collection-metrics3">
        <img
          className="collection-metrics-item"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <div className="collection-metrics4">
        <div className="this-year-fee1">This Year Fee Collection</div>
        <div className="div17">65%</div>
      </div>
      <div className="collection-metrics5">
        <img className="collection-metrics-inner" alt="" src="/vector-2.svg" />
      </div>
    </div>
  );
};

FeeCollection.propTypes = {
  className: PropTypes.string,
};

export default FeeCollection;
