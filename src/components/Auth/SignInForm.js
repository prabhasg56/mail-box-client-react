import { useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { authAction } from "../../store/auth-slice";

const SignInForm = (props) => {
  const emailRef = useRef(""),
    passwordRef = useRef("");

  const navigate = useNavigate(); // for navigate one page to another page
  const dispatch = useDispatch();

  const signInHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value,
      enteredPassword = passwordRef.current.value;

    if (enteredEmail && enteredPassword) {
      dispatch(
        authAction.signIn({
          email: enteredEmail,
          password: enteredPassword,
        })
      );
      emailRef.current.value = '';
      passwordRef.current.value = '';
    } else {
      alert("Please valid email or password!");
    }
  };

  const forgotModalHandler = () => {
    props.showModalHandler(true);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Form className="p-3 border border-dark rounded ">
          <h3 className="text-center">Sign In</h3>

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

          <div className="d-grid">
            <Button
              type="submit"
              className="btn btn-primary rounded-pill"
              onClick={(e) => signInHandler(e)}
            >
              Sign In
            </Button>
            <p
              className="ms-5 user-select-none mt-2"
              onClick={() => forgotModalHandler()}
            >
              Forgot Password?
            </p>
          </div>
        </Form>
      </div>
      <div className="d-flex justify-content-center mt-2 ">
        <NavLink to="/" className="btn btn-secondary">
          Don't Have an account? Sign Up
        </NavLink>
      </div>
    </>
  );
};

export default SignInForm;
