import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import TextField from "../component/TextField";
import registrationSchema from "../utils/yup/registrationValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/action/authAction";

const Registration = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
  };
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationSchema}
      onSubmit={(values) => {
        dispatch(authAction.signUp(values));

        navigate("/");
      }}
    >
      {() => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="Name" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            {/* <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            /> */}
            <button className="btn btn-dark mt-3 m-2" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 m-2" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Registration;
