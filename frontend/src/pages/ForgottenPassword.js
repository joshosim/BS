// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

const ForgetPassword = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //     },
  //     validationSchema: Yup.object({
  //       email: Yup.string().email("Invalid email address").required("Required"),
  //     }),
  //     onSubmit: (values) => {
  //       axios
  //         .post("users/forgetPassword", values)
  //         .then((response) => {
  //           //toast.success("Email sent successfully");
  //         })
  //         .catch((error) => {
  //           if (error.response.status === 404) {
  //             //toast.error("Email not found");
  //           } else {
  //             //toast.error("Server error");
  //           }
  //         });
  //     },
  //   });

  return <div>Forgotten Password</div>;
};

export default ForgetPassword;
