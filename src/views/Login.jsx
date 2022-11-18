import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../component/TextField";
import loginSchema from "../utils/yup/loginValidation";
import { authAction } from "../redux/action/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  function handleClick(data) {
    console.log("1222122121s");
    dispatch(authAction.login(data));
    navigate("/dash");
  }

  useEffect(() => {
    localStorage.removeItem("accessToken");
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log(values);
        handleClick(values);
      }}
    >
      {() => (
        <div className="col-md-20">
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn btn-success mt-3 m-2" type="submit">
              Login
            </button>
            <button className="btn btn-dark mt-3 m-2">
              <Link
                to="/registration"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;
