import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent22 ${className}`}>
      <div className="frame-child30" />
      <div className="fee-collection-periods">
        <div className="collection-types">
          <div className="this-month-fee">This Month Fee Collection</div>
          <div className="collection-icons">
            <img
              className="month-collection-icon"
              alt=""
              src="/month-collection-icon.svg"
            />
          </div>
        </div>
        <div className="yearly-collection-icons">65%</div>
      </div>
      <div className="fee-collection-periods1">
        <div className="last-month-fee-collection-parent">
          <div className="last-month-fee">Last Month Fee Collection</div>
          <div className="div">65%</div>
        </div>
        <div className="collection-visuals-wrapper">
          <img
            className="collection-visuals-icon"
            alt=""
            src="/collection-visuals.svg"
          />
        </div>
      </div>
      <div className="fee-collection-periods2">
        <div className="this-year-fee-collection-parent">
          <div className="this-year-fee">This Year Fee Collection</div>
          <div className="div1">65%</div>
        </div>
        <div className="fee-collection-periods-inner">
          <img className="frame-child31" alt="" src="/vector-4.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
