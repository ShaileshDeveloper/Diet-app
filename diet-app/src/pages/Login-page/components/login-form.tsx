import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
type Props = {};
interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

let inputStyles = "border-solid border-2 border-[#2b323e] h-[30px]  pl-2";

function LoginForm({}: Props) {
  return (
    <>
      <div className="h-fit flex items-center justify-center">
        <div className="flex flex-col">
          <div className="text-[#2b323e] text-5xl font-bold">Login</div>
          <div className="text-[#bdbebf] mt-6 text-xl">
            Just here to help you live a
            <span className="text-[#35bef4] font-bold text-2xl">
              {" "}
              peaceful life.{" "}
            </span>
          </div>
          <div className="login-form-container">
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
              }}
              validate={(values) => {
                let errors: FormikErrors<FormValues> = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex flex-col mt-14">
                    <div className="flex flex-row mb-4">
                      <div className="flex flex-col">
                        <label htmlFor="firstname">Firstname</label>
                        <Field
                          name="firstname"
                          placeholder="First Name"
                          className={inputStyles}
                        />
                      </div>
                      <div className="flex flex-col ml-6">
                        <label htmlFor="lastname">Lastname</label>
                        <Field
                          name="lastname"
                          placeholder="Last Name"
                          className={inputStyles}
                        />
                      </div>
                    </div>

                    <label htmlFor="Email">Email</label>
                    <Field type="email" name="email" className={`${inputStyles} mb-6`} />
                    <ErrorMessage name="email" component="div" />
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className={inputStyles}
                    />
                    <ErrorMessage name="password" component="div" />
                    <div className="items-start">
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                    </div>
                   
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
