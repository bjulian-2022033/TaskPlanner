import logo from "../assets/img/logo.png"
import '../pages/Auth/AuthPage.css'

export const Logo = ({ text }) => {
  return (
    <div className="auth-form-logo-container">
      <img src={logo} alt="logo" className="img" />
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  );
};