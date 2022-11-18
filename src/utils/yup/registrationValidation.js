import * as Yup from "yup";
const nameRegExp = /^[aA-zZ\s]+$/;

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegExp, "Please Enter Valid Name")
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // )
    .required("Please Enter Your Password"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match")
  //   .required("Please Enter Your Confirm Password")
  //   .required("Please Enter Your Confirm Password"),
});

export default registrationSchema;
