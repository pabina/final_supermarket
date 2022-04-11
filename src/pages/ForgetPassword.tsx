import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BreadcrumbComponent from "../components/BreadcrumbComponent";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [username, setEmail] = useState<string>("");

  const postRequestHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      email: username,
    };
    console.log(data);

    const response = await axios.post(
      "https://uat.ordering-boafresh.ekbana.net/api/v4/auth/forgot-password",
      data
    );

    if (response.status === 200) {
      alert(" Please Check  your Email for password reset");
      navigate("/");
    } else {
      alert("Please provide correct email");
    }
  };
  return (
    <>
      <BreadcrumbComponent name="Forgot Password" />
      <div>
        <div className="login">
          <div className="container">
            <h2>Forgot Password ?</h2>
            <h4>Enter You Registered Email</h4>
            <div
              className="login-form-grids animated wow slideInUp"
              data-wow-delay=".5s"
            >
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={username}
                  name={username}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="submit"
                  value="Login"
                  onClick={(e) => postRequestHandler(e)}
                />
              </form>
            </div>
            <p>
              <Link to="/register">Register Here</Link> (Or) go back to{" "}
              <Link to="/">
                Home
                <span
                  className="glyphicon glyphicon-menu-right"
                  aria-hidden="true"
                ></span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
