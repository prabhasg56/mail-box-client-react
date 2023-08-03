import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Inbox = () => {
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
        <ul className="list-group list-group-flush fw-bold">
          {composedMails.map((mail) => {
            return (
              <li className="list-group-item ">
                <NavLink
                  to={`/mail-details/${mail.id}`}
                  className="nav-link text-decoration-none fs-10"
                >
                  <i className="bi bi-star"></i>
                  <span className="ms-2 d-none d-sm-inline">{mail.clientMail.split('@gmail.com')}<span className="ms-5">{mail.subject}</span></span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default Inbox;
