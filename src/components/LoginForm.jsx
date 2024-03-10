import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [IsError, setIsError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  const topFiller = document.querySelector("#fillter-nav");
  const authToken = localStorage.getItem("auth_token");

  if (topFiller) topFiller.style.display = "none";
  if (
    authToken !== null &&
    authToken !== undefined &&
    authToken !== "" &&
    authToken !== "null"
  )
    window.location.href = "/";

  const checkValidation = () => {
    if (Email == "" || Password == "") {
      setIsError(true);
      setErrorMessage("One or more field is empty please check all inputs!");
      return false;
    } else if (!checkEmail(Email)) {
      setIsError(true);
      setErrorMessage("Email syntax is invalid!");
      return false;
    } else {
      setIsError(false);
      setErrorMessage("");
      return true;
    }
  };
  const checkEmail = (email) => {
    // Regular expression to match email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkValidation()) {
      return false;
    }
    try {
      const formData = new FormData();
      formData.append("password", Password);
      formData.append("email", Email);

      const response = await axios.post(apiUrl + "/login", formData);

      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("prefixname", response.data.user.prefixname);
        localStorage.setItem("profile", response.data.user.photo);
        console.log("Login Suceesfully");
        window.location.href = "/";
      } else {
        setIsError(true);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setIsError(true);
        setErrorMessage(error.response.data.message);
      } else {
        setIsError(true);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <>
      <div className="row p-0 m-0" style={{ justifyContent: "center" }}>
        <div className="col-lg-5 mt-5 mb-5">
          <div
            className="contact-form bg-light mb-4"
            style={{ padding: "30px" }}
          >
            <h1 className="display-4 text-uppercase text-center mb-5">Login</h1>

            <form>
              <div className="row">
                <div className="col-12 form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="form-control p-4"
                    placeholder="Your Email"
                    required="required"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="form-control p-4"
                    placeholder="Password"
                    required="required"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                {IsError && (
                  <div
                    className="alert alert-danger"
                    dangerouslySetInnerHTML={{ __html: ErrorMessage }}
                  ></div>
                )}
                <button
                  className="btn btn-primary py-2 px-4"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Register
                </button>
                <p className="mt-2">
                  Don't have account?{" "}
                  <NavLink to="/register">Register now</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
