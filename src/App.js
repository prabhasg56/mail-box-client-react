import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/Auth/SignUpPage";
import SignInPage from "./pages/Auth/SignInPage";
import { signUp, signIn } from "./store/auth-action";
import ComposeMailPage from "./pages/Mail/ComposeMailPage";

let isInitial = true;

function App() {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(signUp(authData));
  }, [authData]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="composeMail" element={<ComposeMailPage />} />
      </Routes>
    </>
  );
}

export default App;
