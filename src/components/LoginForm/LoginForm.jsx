import { Formik, Form, Field, ErrorMessage } from "formik";
import { getUser } from "@/helpers/user";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export const LoginForm = ({}) => {
  const { User, onUserChange } = useContext(UserContext);

  const navigate = useNavigate();
  const HandleLogin = (values, { setSubmitting }) => {
    setSubmitting(true);
    const { email, password } = values;
    const localData = getUser();
    if (localData.email === email && localData.password === password) {
      Swal.fire({
        title: 'Login Successfull',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      setSubmitting(false);
      onUserChange(localData);
      navigate("/posts");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login Failed!',
      })
      setSubmitting(false);
      console.log(localData);
    }
  };

  return (
    <div className="w-full flex justify-center bg-gray-50 pt-16 ">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={HandleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white drop-shadow-md shadow-gray-200 p-10 rounded-xl items-center ">
            <h1 className="text-black text-2xl mb-3 font-extrabold">Login</h1>
            <span className="font-poppins font-semibold">Email</span>
            <br />
            <Field
              className="border mt-1 mb-5 border-gray-200 rounded-xl bg-[#f7f7f7] p-2 w-full"
              type="email"
              placeholder="email@example.com"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
            <br />
            <span className="mt-3 font-poppins font-semibold">Password</span>

            <Field
              className="border mt-1 border-gray-200 font-poppins rounded-xl bg-[#f7f7f7] p-2 w-full"
              type="password"
              placeholder="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
            <div className="mt-3 flex w-full justify-center">
              <button
                type="submit"
                className=" disabled:opacity-50 w-full mt-6 font-poppins font-bold bg-[#fe5454] hover:bg-[#ff2828] hover:shadow-lg text-white rounded-xl p-2 "
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
