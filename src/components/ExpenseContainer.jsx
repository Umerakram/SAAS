import PropTypes from "prop-types";
import "./ExpenseContainer.css";

const ExpenseContainer = ({ className = "" }) => {
  return (
    <div className={`expense-container ${className}`}>
      <b className="expense">Expense</b>
      <div className="expense-data">
        <div className="this-month-expense">
          <img
            className="rupee-currency-icon4"
            loading="lazy"
            alt=""
            src="/rupee-currency.svg"
          />
          <div className="this-month2">This Month</div>
        </div>
        <div className="last-month-expense">
          <b className="last-month-expense1">3,600</b>
          <div className="last-month-expense-details">
            <div className="last-month-expense-breakdown">
              <div className="last-month-expense-currency">
                <img
                  className="rupee-currency-icon5"
                  alt=""
                  src="/rupee-currency-1.svg"
                />
              </div>
              <div className="last-month-expense2">2,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExpenseContainer.propTypes = {
  className: PropTypes.string,
};

export default ExpenseContainer;
