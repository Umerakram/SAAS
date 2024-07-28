import PropTypes from "prop-types";
import "./ClassData.css";

const ClassData = ({ className = "", prop, prop1 }) => {
  return (
    <div className={`class-data1 ${className}`}>
      <div className="rectangle-parent23">
        <div className="frame-child32" />
        <div className="wrapper">
          <div className="div2">{prop}</div>
        </div>
        <div className="container">
          <div className="div3">35</div>
        </div>
        <div className="frame">
          <div className="div4">15</div>
        </div>
        <div className="wrapper1">
          <div className="div5">5</div>
        </div>
        <div className="wrapper2">
          <div className="div6">15,000</div>
        </div>
        <div className="div7">9,000</div>
        <div className="div8">6,000</div>
      </div>
      <div className="rectangle-parent24">
        <div className="frame-child33" />
        <div className="wrapper3">
          <div className="div9">{prop1}</div>
        </div>
        <div className="wrapper4">
          <div className="div10">35</div>
        </div>
        <div className="wrapper5">
          <div className="div11">15</div>
        </div>
        <div className="wrapper6">
          <div className="div12">5</div>
        </div>
        <div className="wrapper7">
          <div className="div13">15,000</div>
        </div>
        <div className="div14">9,000</div>
        <div className="div15">6,000</div>
      </div>
    </div>
  );
};

ClassData.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

export default ClassData;
