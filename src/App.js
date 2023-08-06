import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/js/dist/dropdown";

import SignUpPage from "./pages/Auth/SignUpPage";
import SignInPage from "./pages/Auth/SignInPage";
import { signUp, signIn } from "./store/auth-action";
import ComposeMailPage from "./pages/Mail/ComposeMailPage";
import MainNavigation from "./components/Layout/MainNavigation";
import SideBarMenu from "./components/SideMenu/SideBarMenu";
import Inbox from "./components/Mail/Inbox";
import { mailAction } from "./store/mail-slice";
import MailDetailsPage from "./pages/Mail/MailDetailsPage";
import SentMails from "./components/Mail/SentMails";

let isInitial = true;

function App() {
  const authData = useSelector((state) => state.auth);
  let totalUnreadMessage = useSelector(
    (state) => state.mail.totalUnreadMessage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const baseUrl = "https://mail-box-client-data-default-rtdb.firebaseio.com/";
    const loginMail = localStorage.getItem("loginEmail");
    const userId = loginMail.replace(/[@.]/g, "");
    let count = 0;

    const fetchComposedMail = async () => {
      
      try {
        const response = await fetch(`${baseUrl}${userId}.json`);

        const jsonResponse = await response.json();
        if (!response.ok) {
          throw new Error(jsonResponse.error.message);
        }

        let composedMails = [];

        for (let key in jsonResponse) {
          if (jsonResponse[key]) {
            composedMails.push({ ...jsonResponse[key], id: key });
          }

          if (!jsonResponse[key].messageRead && count===0) {
            totalUnreadMessage++;
          }
        }
        count++;

        dispatch(mailAction.sentMails(composedMails));
        dispatch(mailAction.updateUnreadMsg(totalUnreadMessage));
      } catch (error) {
        alert(error);
      }
    };

    const intervals = setInterval(fetchComposedMail, 2000);
    // clearInterval(intervals);

  }, [dispatch]);
  

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(signUp(authData));
  }, [authData]);

  return (
    <>
      {/* <MainNavigation/> */}
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>

      {authData.isAutenticate && (
        <SideBarMenu>
          <Routes>
            <Route
              path="/inbox"
              element={authData.isAutenticate ? <Inbox /> : <SignInPage />}
            />
             <Route
              path="/sent-mails"
              element={authData.isAutenticate ? <SentMails /> : <SignInPage />}
            />
            <Route
              path="/composeMail"
              element={
                authData.isAutenticate ? <ComposeMailPage /> : <SignInPage />
              }
            />
            <Route path="/mail-details/:mailId" element={<MailDetailsPage />} />
          </Routes>
        </SideBarMenu>
      )}
    </>
  );
}

export default App;
