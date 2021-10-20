import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import login from '../../../images/login.png'

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="container mt-5">
              <h2>Please Loging</h2>
              <Button onClick={signInUsingGoogle} variant="warning">
                Google Sign In
              </Button>{" "}
              <br />
              <hr />
              <Link to="/register"> Are New User?</Link>
            </div>

          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={login} alt="" />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Login;
