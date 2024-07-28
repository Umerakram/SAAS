import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent from "../components/GroupComponent";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up1">
      <div className="sign-up-inner">
        <FrameComponent1 />
      </div>
      <div className="frame-container">
        <div className="rectangle-parent4">
          <div className="frame-child5" />
          <div className="black-background">
            <div className="content-wrapper">
              <img className="g8-icon" alt="" src="/g8@2x.png" />
              <div className="school-details-form">
                <form className="group-form">
                  <div className="frame-child6" />
                  <button className="group-button">
                    <div className="frame-child7" />
                    <div className="upload-logo">Upload Logo</div>
                    <img className="upload-icon" alt="" src="/upload.svg" />
                  </button>
                  <div className="rectangle-parent5">
                    <div className="frame-child8" />
                    <div className="school-board">School Board</div>
                    <img
                      className="arrow-down-icon3"
                      alt=""
                      src="/arrow-down1.svg"
                    />
                  </div>
                  <div className="rectangle-parent6">
                    <div className="frame-child9" />
                    <input
                      className="name-of-school"
                      placeholder="Name of School"
                      type="text"
                    />
                  </div>
                  <div className="rectangle-parent7">
                    <div className="frame-child10" />
                    <input
                      className="tag-line-optional"
                      placeholder="Tag line (optional)"
                      type="text"
                    />
                  </div>
                  <div className="rectangle-parent8">
                    <div className="frame-child11" />
                    <input
                      className="address-1"
                      placeholder="Address 1"
                      type="text"
                    />
                  </div>
                  <div className="rectangle-parent9">
                    <div className="frame-child12" />
                    <div className="district">District</div>
                    <img
                      className="arrow-down-icon4"
                      alt=""
                      src="/arrow-down1.svg"
                    />
                  </div>
                  <div className="rectangle-parent10">
                    <div className="frame-child13" />
                    <div className="state">State</div>
                    <img
                      className="arrow-down-icon5"
                      alt=""
                      src="/arrow-down1.svg"
                    />
                  </div>
                  <div className="rectangle-parent11">
                    <div className="frame-child14" />
                    <div className="country">Country</div>
                    <img
                      className="arrow-down-icon6"
                      alt=""
                      src="/arrow-down1.svg"
                    />
                  </div>
                  <button className="rectangle-parent12">
                    <div className="frame-child15" />
                    <div className="pin-code">Pin Code</div>
                  </button>
                  <button className="rectangle-parent13">
                    <div className="frame-child16" />
                    <div className="town-village">Town / Village / City</div>
                  </button>
                  <h2 className="school-details">School Details</h2>
                  <img
                    className="group-icon"
                    loading="lazy"
                    alt=""
                    src="/group-210@2x.png"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <GroupComponent />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
