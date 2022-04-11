import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";

const baseURL = process.env.REACT_APP_BASE_URL;
const auth = process.env.REACT_APP_AUTH;
const signupURL = `${baseURL}/${auth}/signup`;

function Registration(): JSX.Element {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const agree = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const mobileNumber = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      console.log(agree);

      if (!firstName.current?.value) {
        setError("First Name is empty");
        return;
      }
      if (!lastName.current?.value) {
        setError("Last Name is empty");
        return;
      }
      if (!email.current?.value) {
        setError("Email is empty");
        return;
      }

      if (!agree.current?.checked) {
        return;
      }

      let response = await axios.post(signupURL, {
        last_name: lastName.current?.value,
        email: email.current?.value,
        password: password.current?.value,
        mobile_number: mobileNumber.current?.value,
        first_name: firstName.current?.value,
      });

      console.log(response);
    } catch (error: any) {
      console.log(error);
      console.log(error.response);
    }
  };
  return (
    <>
      <div className="register">
        <div className="container">
          <h2>Register Here</h2>
          <div className="login-form-grids">
            {error && <p className="alert-danger">{error}</p>}

            <h5>profile information</h5>
            <form>
              <input type="text" placeholder="First Name..." ref={firstName} />
              <input
                type="text"
                placeholder="Last Name..."
                required
                ref={lastName}
              />
            </form>

            <h6>Login information</h6>
            <form>
              <input
                type="email"
                placeholder="Email Addresponses"
                required
                ref={email}
              />
              <input
                type="password"
                placeholder="Password"
                required
                ref={password}
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                required
                className="mt-2"
                ref={mobileNumber}
              />
              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" ref={agree} />
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              <input type="submit" value="Register" onClick={submitHandler} />
            </form>
          </div>
          <div className="register-home">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
