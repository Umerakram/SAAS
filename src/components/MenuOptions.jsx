import PropTypes from "prop-types";
import "./MenuOptions.css";

const MenuOptions = ({ className = "" }) => {
  return (
    <div className={`menu-options2 ${className}`}>
      <div className="rectangle-parent50">
        <div className="frame-child63" />
        <div className="edit-or-delete1">Edit or Delete</div>
      </div>
      <button className="rectangle-parent51">
        <div className="frame-child64" />
        <div className="add-update1">Add / Update Exam Marks</div>
      </button>
    </div>
  );
};

MenuOptions.propTypes = {
  className: PropTypes.string,
};

export default MenuOptions;
