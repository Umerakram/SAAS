import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="log-in">
      <div className="log-in-child" />
      <header className="main-content">
        <h1 className="logo">LOGO</h1>
        <div className="main-content-inner">
          <div className="frame-group">
            <div className="start-managing-today-wrapper">
              <h1 className="start-managing-today">Start Managing Today</h1>
            </div>
            <div className="stop-struggling-with">
              Stop struggling with common tasks and focus on the real choke
              points, with our powerful School Management Platform
            </div>
          </div>
        </div>
      </header>
      <div className="group-div">
        <div className="frame-child3" />
        <input className="user-name" placeholder="User Name" type="text" />
      </div>
      <div className="rectangle-parent3">
        <div className="frame-child4" />
        <input className="frame-input" placeholder="Password" type="text" />
        <img className="visibility-off-icon" alt="" src="/visibility-off.svg" />
      </div>
      <input className="check-box-blank" type="checkbox" />
      <div className="remember-me">Remember Me</div>
      <div className="forgot-password">Forgot Password ?</div>
      <div className="dont-have-an">{`Don’t have an account ? `}</div>
      <b className="sign-up">Sign up</b>
      <h1 className="welcome-back">Welcome back</h1>
      <div className="simplify-your-workflow">
        Simplify your workflow and boost your productivity with Demo App. Get
        started today
      </div>
      <button className="login-button-container">
        <div className="login-button-container-child" />
        <b className="log-in1">Log in</b>
      </button>
      <div className="illustration-container">
        <img className="path10-icon" alt="" src="/path10.svg" />
        <img className="image-icon" loading="lazy" alt="" src="/image@2x.png" />
      </div>
    </div>
  );
};

export default LogIn;
