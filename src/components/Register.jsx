import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [LastName, setLastName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [Username, setUserName] = useState("");
  const [IsError, setIsError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(false);
  const [Gender, setGender] = useState("");
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
    if (
      Email == "" ||
      Password == "" ||
      ConfirmPassword == "" ||
      LastName == "" ||
      FirstName == "" ||
      Username == "" ||
      Gender == ""
    ) {
      setIsError(true);
      setErrorMessage("One or more field is empty please check all inputs!");
      return false;
    } else if (!checkEmail(Email)) {
      setIsError(true);
      setErrorMessage("Email syntax is invalid!");
      return false;
    } else if (Password !== ConfirmPassword) {
      setIsError(true);
      setErrorMessage("Passwords not match!");
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
      formData.append("firstname", FirstName);
      formData.append("lastname", LastName);
      formData.append("username", Username);
      formData.append("password", Password);
      formData.append("password_confirmation", ConfirmPassword);
      formData.append("gender", Gender);
      formData.append("email", Email);

      const response = await axios.post(apiUrl + "/register", formData);

      console.log(response);
      if (response.data.success) {
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("prefixname", response.data.user.prefixname);
        localStorage.setItem("profile", response.data.user.photo);
        console.log("Register Suceesfully");
        window.location.href = "/";
      } else {
        setIsError(true);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Handle 422 Unprocessable Entity response
        handleErrors(error.response.data.errors);
        console.error("Unprocessable Entity:", error.response);
      } else {
        setIsError(true);
        setErrorMessage(error.message);
      }
    }
  };
  const handleErrors = (errors) => {
    let errorList = "";
    console.log(errors);
    Object.entries(errors).forEach(([key, value]) => {
      value.forEach((errorMessage) => {
        errorList += errorMessage + "<br>";
      });
    });
    errorList += "";
    setIsError(true);
    setErrorMessage(errorList);
  };

  return (
    <>
      <div className="row p-0 m-0" style={{ justifyContent: "center" }}>
        <div className="col-lg-5 mt-5 mb-5">
          <div className=" bg-light mb-4" style={{ padding: "30px" }}>
            <h1 className="display-4 text-uppercase text-center mb-5">
              Register
            </h1>

            <form>
              <div className="row">
                <div className="col-6 form-group">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="First Name"
                    required="required"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6 form-group">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Last Name"
                    required="required"
                    onChange={(e) => setLastName(e.target.value)}
                    value={LastName}
                  />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="User Name"
                    required="required"
                    onChange={(e) => setUserName(e.target.value)}
                    value={Username}
                  />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="form-control p-4"
                    placeholder="Your Email"
                    required="required"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                  />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="">Gender</label>
                  <select
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    id=""
                    className="form-control"
                  >
                    <option value="" selected>
                      Select Gender
                    </option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="M">Ms</option>
                  </select>
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
                <div className="col-12 form-group">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="form-control p-4"
                    placeholder="Confirm Password"
                    required="required"
                    value={ConfirmPassword}
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
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                >
                  Register
                </button>
                <p className="mt-3">
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
