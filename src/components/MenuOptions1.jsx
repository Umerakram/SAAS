import PropTypes from "prop-types";
import "./MenuOptions1.css";

const MenuOptions1 = ({ className = "" }) => {
  return (
    <div className={`menu-options1 ${className}`}>
      <div className="rectangle-parent48">
        <div className="frame-child61" />
        <div className="fees-parent">
          <img className="fees-icon3" alt="" src="/fees.svg" />
          <div className="fees-sub-menu">
            <div className="fees2">Fees</div>
          </div>
        </div>
        <img className="plus-icon13" alt="" src="/plus.svg" />
      </div>
      <div className="rectangle-parent49">
        <div className="frame-child62" />
        <div className="attendance-parent">
          <img
            className="attendance-icon3"
            loading="lazy"
            alt=""
            src="/attendance.svg"
          />
          <div className="attendance-sub-menu">
            <div className="attendance2">Attendance</div>
          </div>
        </div>
        <img className="plus-icon14" loading="lazy" alt="" src="/plus.svg" />
      </div>
    </div>
  );
};

MenuOptions1.propTypes = {
  className: PropTypes.string,
};

export default MenuOptions1;
