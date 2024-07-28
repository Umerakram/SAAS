import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent30 ${className}`}>
      <div className="frame-child43" />
      <div className="frame-parent7">
        <div className="admin-details-wrapper">
          <h2 className="admin-details">Admin Details</h2>
        </div>
        <form className="personal-details">
          <div className="name-nationality">
            <button className="rectangle-parent31">
              <div className="frame-child44" />
              <div className="first-name">First Name</div>
            </button>
            <button className="rectangle-parent32">
              <div className="frame-child45" />
              <div className="middle-name">Middle Name</div>
            </button>
            <button className="rectangle-parent33">
              <div className="frame-child46" />
              <div className="last-name">Last Name</div>
            </button>
          </div>
          <div className="demographics-fields-parent">
            <div className="demographics-fields">
              <div className="frame-parent8">
                <div className="rectangle-parent34">
                  <div className="frame-child47" />
                  <div className="gender-wrapper">
                    <div className="gender">Gender</div>
                  </div>
                  <img
                    className="arrow-down-icon7"
                    alt=""
                    src="/arrow-down1.svg"
                  />
                </div>
                <button className="rectangle-parent35">
                  <div className="frame-child48" />
                  <div className="date-of-birth-input">
                    <div className="date-of-birth">Date of Birth</div>
                  </div>
                  <img className="calendar-icon" alt="" src="/calendar.svg" />
                </button>
              </div>
              <div className="rectangle-parent36">
                <div className="frame-child49" />
                <input
                  className="aadhaar-number"
                  placeholder="Aadhaar Number"
                  type="text"
                />
              </div>
              <div className="rectangle-parent37">
                <div className="frame-child50" />
                <input
                  className="address-11"
                  placeholder="Address 1"
                  type="text"
                />
              </div>
            </div>
            <div className="contact-details">
              <div className="rectangle-parent38">
                <div className="frame-child51" />
                <div className="alternate-phone-no">Alternate Phone No.</div>
              </div>
              <button className="rectangle-parent39">
                <div className="frame-child52" />
                <div className="upload-photo-wrapper">
                  <div className="upload-photo">Upload Photo</div>
                </div>
                <img className="upload-icon1" alt="" src="/upload.svg" />
              </button>
              <button className="rectangle-parent40">
                <div className="frame-child53" />
                <div className="town-village1">Town / Village / City</div>
              </button>
            </div>
          </div>
          <div className="location-details">
            <div className="rectangle-parent41">
              <div className="frame-child54" />
              <div className="location-fields">
                <div className="district1">District</div>
              </div>
              <img className="arrow-down-icon8" alt="" src="/arrow-down1.svg" />
            </div>
            <div className="rectangle-parent42">
              <div className="frame-child55" />
              <div className="state-wrapper">
                <div className="state1">State</div>
              </div>
              <img className="arrow-down-icon9" alt="" src="/arrow-down1.svg" />
            </div>
            <div className="rectangle-parent43">
              <div className="frame-child56" />
              <div className="country-wrapper">
                <div className="country1">Country</div>
              </div>
              <img
                className="arrow-down-icon10"
                alt=""
                src="/arrow-down1.svg"
              />
            </div>
            <button className="rectangle-parent44">
              <div className="frame-child57" />
              <div className="pin-code1">Pin Code</div>
            </button>
          </div>
          <div className="name-nationality1">
            <button className="rectangle-parent45">
              <div className="frame-child58" />
              <div className="nationality">Nationality</div>
            </button>
            <div className="rectangle-parent46">
              <div className="frame-child59" />
              <div className="religion-wrapper">
                <div className="religion">Religion</div>
              </div>
              <img
                className="arrow-down-icon11"
                alt=""
                src="/arrow-down1.svg"
              />
            </div>
            <button className="rectangle-parent47">
              <div className="frame-child60" />
              <div className="passport-photo-wrapper">
                <div className="passport-photo">Passport Photo</div>
              </div>
              <img className="upload-icon2" alt="" src="/upload.svg" />
            </button>
          </div>
        </form>
      </div>
      <div className="button-placeholder">
        <img
          className="button-placeholder-child"
          loading="lazy"
          alt=""
          src="/group-212.svg"
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
