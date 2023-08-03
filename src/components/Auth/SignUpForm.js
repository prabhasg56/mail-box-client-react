import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { authAction } from "../../store/auth-slice";

const SignUpForm = () => {
  const emailRef = useRef(""),
    passwordRef = useRef(""),
    confirmPasswordRef = useRef("");

  const dispatch = useDispatch();

  const basUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOXYGDoFgU8UDbBDjYt3UOxefk96nn6t4";

  const signUpHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value,
      enteredPassword = passwordRef.current.value,
      enteredConfirmPassword = confirmPasswordRef.current.value;

    if (
      enteredPassword === enteredConfirmPassword &&
      enteredEmail &&
      enteredPassword &&
      enteredConfirmPassword
    ) {
      dispatch(
        authAction.signUp({
          email: enteredEmail,
          password: enteredPassword,
          confirmPassword: enteredConfirmPassword,
        })
      );
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
    } else {
      alert("Please enter same password!");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Form className="p-3 border border-dark rounded ">
          <h3 className="text-center">Sign Up</h3>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              ref={emailRef}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              ref={passwordRef}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              ref={confirmPasswordRef}
            />
          </div>
          <div className="d-grid">
            <Button
              type="submit"
              className="btn btn-primary rounded-pill"
              onClick={(e) => signUpHandler(e)}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
      <div className="d-flex justify-content-center mt-2 ">
        <NavLink to="signin" className="btn btn-secondary">
          Have an account? Login
        </NavLink>
      </div>
    </>
  );
};

export default SignUpForm;
