import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`logo-parent ${className}`}>
      <h1 className="logo3">LOGO</h1>
      <div className="frame-wrapper2">
        <div className="frame-parent5">
          <div className="register-your-account-wrapper">
            <h1 className="register-your-account">Register your account</h1>
          </div>
          <div className="account-details">
            <div className="frame-parent6">
              <div className="rectangle-parent25">
                <div className="frame-child37" />
                <div className="email">Email</div>
              </div>
              <div className="rectangle-parent26">
                <div className="frame-child38" />
                <div className="phone-number">Phone Number</div>
              </div>
            </div>
            <div className="rectangle-parent27">
              <div className="frame-child39" />
              <div className="choose-user-name">Choose User Name</div>
            </div>
            <div className="rectangle-parent28">
              <div className="frame-child40" />
              <div className="choose-password-wrapper">
                <div className="choose-password">Choose Password</div>
              </div>
              <img
                className="visibility-off-icon1"
                alt=""
                src="/visibility-off.svg"
              />
            </div>
            <div className="rectangle-parent29">
              <div className="frame-child41" />
              <input
                className="confirm-password"
                placeholder="Confirm Password"
                type="text"
              />
            </div>
            <div className="terms-and-conditions">
              <input className="check-box-blank1" type="checkbox" />
              <div className="accept-our-terms-condition-wrapper">
                <div className="accept-our-terms-container">
                  <span>{`Accept our `}</span>
                  <b>{`Terms & Condition`}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper3">
        <button className="frame-button">
          <div className="frame-child42" />
          <b className="sign-up2">Sign up</b>
        </button>
      </div>
      <div className="frame-wrapper4">
        <div className="already-have-an-account-parent">
          <div className="already-have-an">Already have an account ?</div>
          <b className="log-in2">Log in</b>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
