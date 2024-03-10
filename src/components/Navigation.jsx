import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useParams } from "react-router";

function Navigation() {
  const [HideFillter, setHideFillter] = useState(false);
  const authToken = localStorage.getItem("auth_token");
  const Auth =
    authToken !== null &&
    authToken !== undefined &&
    authToken !== "" &&
    authToken !== "null"
      ? true
      : false;

  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (Auth) {
      setEmail(localStorage.getItem("email"));
      setAvatar(localStorage.getItem("profile"));
    }
    const pathname = window.location;
    if (pathname === "/login" || pathname === "/register") {
      setHideFillter(true);
    } else {
      setHideFillter(false);
    }
  }, []);
  const logout = (e) => {
    e.preventDefault(); // Corrected the method name to preventDefault()
    localStorage.removeItem("auth_token");
    localStorage.removeItem("email");
    localStorage.removeItem("profile");
    localStorage.removeItem("name");
    window.location.href = "/";
  };

  return (
    <div>
      <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <NavLink to="/" className="text-body pr-3" href="">
                <i className="fa fa-phone-alt mr-2"></i>+012 345 6789
              </NavLink>

              <span className="text-body">|</span>
              <NavLink to="/" className="text-body px-3" href="">
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </NavLink>
              {Auth ? (
                <>
                  <div className="d-flex user-top">
                    <img src={avatar} />
                    {email}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <NavLink to="/" className="text-body px-3" href="">
                <i className="fab fa-facebook-f"></i>
              </NavLink>

              <NavLink to="/" className="text-body px-3" href="">
                <i className="fab fa-twitter"></i>
              </NavLink>

              <NavLink to="/" className="text-body px-3" href="">
                <i className="fab fa-linkedin-in"></i>
              </NavLink>

              <NavLink to="/" className="text-body px-3" href="">
                <i className="fab fa-instagram"></i>
              </NavLink>

              <NavLink to="/" className="text-body pl-3" href="">
                <i className="fab fa-youtube"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative nav-bar p-0">
        <div className="position-relative px-lg-5" style={{ zIndex: "9" }}>
          <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
            <NavLink to="/" href="" className="navbar-brand">
              <h1 className="text-uppercase text-primary mb-1">Royal Cars</h1>
            </NavLink>

            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>

                <NavLink to="/about" className="nav-item nav-link">
                  About
                </NavLink>

                <NavLink to="/services" className="nav-item nav-link">
                  Service
                </NavLink>

                <NavLink to="/shop" className="nav-link">
                  Shop
                </NavLink>

                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
                {!Auth ? (
                  <>
                    <NavLink to="/register" className="nav-item nav-link">
                      Register
                    </NavLink>
                    <NavLink to="/login" className="nav-item nav-link">
                      Login
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/account" className="nav-item nav-link">
                      Account
                    </NavLink>
                    <NavLink
                      to="/logout"
                      onClick={(e) => logout(e)}
                      className="nav-item nav-link"
                    >
                      Logout
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {!HideFillter && (
        <>
          <div
            className="container-fluid bg-white pt-3 px-lg-5"
            id="fillter-nav"
          >
            <div className="row mx-n2">
              <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <select
                  className="custom-select px-4 mb-3"
                  style={{ height: "50px" }}
                >
                  <option selected>Pickup Location</option>
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
                </select>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <select
                  className="custom-select px-4 mb-3"
                  style={{ height: "50px" }}
                >
                  <option selected>Drop Location</option>
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
                </select>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <div
                  className="date mb-3"
                  id="date"
                  data-target-input="nearest"
                >
                  <input
                    type="text"
                    className="form-control p-4 datetimepicker-input"
                    placeholder="Pickup Date"
                    data-target="#date"
                    data-toggle="datetimepicker"
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <div
                  className="time mb-3"
                  id="time"
                  data-target-input="nearest"
                >
                  <input
                    type="text"
                    className="form-control p-4 datetimepicker-input"
                    placeholder="Pickup Time"
                    data-target="#time"
                    data-toggle="datetimepicker"
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <select
                  className="custom-select px-4 mb-3"
                  style={{ height: "50px" }}
                >
                  <option selected>Select A Car</option>
                  <option value="1">Car 1</option>
                  <option value="2">Car 1</option>
                  <option value="3">Car 1</option>
                </select>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <button
                  className="btn btn-primary btn-block mb-3"
                  type="submit"
                  style={{ height: "50px" }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navigation;
