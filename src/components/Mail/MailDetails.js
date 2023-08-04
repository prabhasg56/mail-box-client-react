import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MailDetails = () => {
  const { mailId } = useParams();
  const composedMail = useSelector((state) => state.mail.composedMail);

  const filteredMail = composedMail.find((mail) => mail.id === mailId);

  useEffect(() => {
    const baseUrl = "https://mail-box-client-data-default-rtdb.firebaseio.com/";
    const loginMail = localStorage.getItem("loginEmail");
    const userId = loginMail.replace(/[@.]/g, "");

    const updateReadMsgStatus = async () => {
      try {
        const response = await fetch(`${baseUrl}${userId}/${mailId}.json`, {
          method: "PUT",
          body: JSON.stringify({
            clientMail: filteredMail.clientMail,
            ccMail: filteredMail.ccMail,
            bccMail: filteredMail.bccMail,
            subject: filteredMail.subject,
            composeMail: filteredMail.composeMail,
            messageRead: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const jsonResponse = await response.json();
        if (!response.ok) {
          throw new Error(jsonResponse.error.message);
        }
      } catch (error) {
        alert(error);
      }
    };

    updateReadMsgStatus();
  }, [mailId]);

  return (
    <>
      <Container className="container-fluid mt-3">
        <h2>{filteredMail.subject}</h2>

        <Container className="border p-3">
          <Container className="nav-link text-decoration-none fs-10 ">
            <i className="bi bi-person-circle"></i>
            <span className="ms-2 d-none d-sm-inline fw-bold">
              {filteredMail.clientMail.split("@gmail.com")}
            </span>{" "}
            <span>{`<${filteredMail.clientMail}>`}</span>
          </Container>

          <Container className="container-fluid mt-4 ms-3 mb-4">
            {filteredMail.composeMail}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default MailDetails;
