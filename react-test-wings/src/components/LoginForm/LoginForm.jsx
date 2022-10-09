import { Formik, Form, Field, ErrorMessage } from "formik";
import { getUser } from "@/helpers/user";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({}) => {
  const navigate = useNavigate();
  const HandleLogin = (values, { setSubmitting }) => {
    setSubmitting(true);
    const { email, password } = values;
    const localData = getUser();
    if (localData.email === email && localData.password === password) {
      alert("Login success");
      setSubmitting(false);
      navigate("/posts");
    } else {
      alert("Login failed");
      setSubmitting(false);
      console.log(localData);
    }
  };

  return (
    <div className="w-full flex justify-center m-8 h-screen bg-white">
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
			{/* <h1>LOGIN</h1> */}
        {({ isSubmitting }) => (
          <Form className="bg-white shadow-sm shadow-gray-50 p-10 items-center ">
			<span className="">Email</span>
			<br />
            <Field
              className="border mt-3 border-gray-300 rounded-lg p-2 w-full"
              type="email"
			  placeholder="email@example.com"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
			<br />
			<span className="mt-3">Password</span>

            <Field
              className="border mt-3 border-gray-300 rounded-lg p-2 w-full"
              type="password"
			  placeholder="Password"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
			<div className="mt-3 flex justify-center">

            <button
              type="submit"
              className=" disabled:opacity-50 font-poppins bg-[#fe4b62] text-white rounded-md p-2 "
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
