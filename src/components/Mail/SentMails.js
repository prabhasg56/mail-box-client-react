import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SentMails = () => {
  const composedMails = useSelector((state) => state.mail.composedMail);

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
                  <tr >
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

                  </tr>
                );
              })
            ) : (
              <h3 className="d-flex  justify-content-center">
                There is empty!
              </h3>
            )}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default SentMails;
