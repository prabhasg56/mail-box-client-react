import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Inbox = () => {
  const composedMails = useSelector((state) => state.mail.composedMail);

  const deleteMailHandler = async (id) => {
    const baseUrl = "https://mail-box-client-data-default-rtdb.firebaseio.com/";
    const loginMail = localStorage.getItem("loginEmail");
    const userId = loginMail.replace(/[@.]/g, "");

    try {
      const response = await fetch(`${baseUrl}${userId}/${id}.json`, {
        method: "DELETE",
      });

      const jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error(jsonResponse.error.message);
      }

      alert("Deleted successfully!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Container className="mt-3">
        <Row className="d-flex  justify-content-center">
          <Col sm={5}>
            <Form className="d-flex  justify-content-center">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
              />
              <Button className="rounded-pill" variant="outline-primary">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <table className="table">
          <tbody>
            {composedMails.length !== 0 ? (
              composedMails.map((mail) => {
                let readMessage = mail.messageRead
                  ? "bi-star"
                  : "bi-star-fill text-primary";

                return (
                  <tr key={mail.id}>
                    <td>
                      <NavLink
                        to={`/mail-details/${mail.id}`}
                        className="text-decoration-none fs-10"
                      >
                        <i className={`bi ${readMessage}`}></i>
                        <span className="fw-bold ms-3">
                          {mail.clientMail.split("@gmail.com")}
                        </span>
                      </NavLink>
                    </td>
                    <td className="fw-bold">{mail.subject}</td>

                    <td>
                      {" "}
                      <i
                        className={`bi bi-trash-fill text-danger`}
                        onClick={() => deleteMailHandler(mail.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h3 className="d-flex  justify-content-center">
                Inbox is empty!
              </h3>
            )}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Inbox;
