import React, { Fragment, useRef, useState, useEffect } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import createTextVersion from "textversionjs";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { NavLink, useNavigate } from "react-router-dom";

const ComposeMail = () => {
  const [showCC, setShowCC] = useState(false);
  const [showBCC, setShowBCC] = useState(false);
  const clientMailRef = useRef("");
  const ccMailRef = useRef("");
  const bccMailRef = useRef("");
  const subjectRef = useRef("");
  const composedMailRef = useRef("");
  const [convertedContent, setConvertedContent] = useState(null);
  const navigate = useNavigate();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }
  console.log(createTextVersion(convertedContent));

  const handleCC = () => {
    showCC ? setShowCC(false) : setShowCC(true);
  };

  const handleBCC = () => {
    showBCC ? setShowBCC(false) : setShowBCC(true);
  };

  const composeMailHandler = async () => {
    const enteredClientMail = clientMailRef.current.value;
    const enteredCCMail = ccMailRef.current.value;
    const enteredBCCMail = bccMailRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const enteredComposeMail = composedMailRef.current.value;

    const baseUrl = "https://mail-box-client-data-default-rtdb.firebaseio.com/";
    const loginMail = localStorage.getItem("loginEmail");
    const userId = loginMail.replace(/[@.]/g, "");

    try {
      const response = await fetch(`${baseUrl}${userId}.json`, {
        method: "POST",
        body: JSON.stringify({
          clientMail: enteredClientMail,
          ccMail: enteredCCMail,
          bccMail: enteredBCCMail,
          subject: enteredSubject,
          composeMail: createTextVersion(convertedContent),
          messageRead: false
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonResponse = await response.json();
     if(!response.ok){
      throw new Error(jsonResponse.error.message);
     }

     alert('Successfully sent..');
     navigate('/inbox');

    } catch (error) {
      alert(error);
    }
  };

  return (
    <Fragment>
      <div className="p-5 bg-secondary max-vh-100 ">
        <div className="container bg-white p-5 ">
          <h3>Compose mail</h3>
          <Stack
            className="border-bottom border-dark"
            direction="horizontal"
            gap={3}
          >
            <div className="p-2 d-flex">
              To{" "}
              <input
                type="email"
                className="form-control border-0 shadow-none"
                ref={clientMailRef}
                required
              />
            </div>
            <div className="ms-auto">
              <NavLink onClick={() => handleCC()}>Cc</NavLink>{" "}
              <NavLink onClick={() => handleBCC()}>Bcc</NavLink>
            </div>
          </Stack>
          {showCC && (
            <Stack
              className="border-bottom border-dark"
              direction="horizontal"
              gap={3}
            >
              <input
                type="email"
                className="form-control border-0 shadow-none"
                placeholder="CC"
                ref={ccMailRef}
              />
            </Stack>
          )}
          {showBCC && (
            <Stack
              className="border-bottom border-dark"
              direction="horizontal"
              gap={3}
            >
              <input
                type="email"
                className="form-control border-0 shadow-none"
                placeholder="BCC"
                ref={bccMailRef}
              />
            </Stack>
          )}
          <Stack
            className="border-bottom border-dark"
            direction="horizontal"
            gap={3}
          >
            <input
              className="form-control border-0 shadow-none"
              placeholder="Subject"
              ref={subjectRef}
            />
          </Stack>
          <Container className="p-2 mb-5">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={setEditorState}
            />
            {/* <div dangerouslySetInnerHTML={createMarkup(convertedContent)} ></div> */}
          </Container>
         <Container className="d-flex flex-row " >
         <Button className="fw-bold ms-auto" onClick={() => composeMailHandler()}>
            Send
          </Button>
          <Button className="btn btn-danger  fw-bold ms-3">Cancel</Button>
         </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default ComposeMail;
