import { Container, Nav, Navbar } from "react-bootstrap";

const MainNavigation = () => {
  return (
    <>
      <Navbar
        className="bg-dark"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1020,
        }}
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Mail Box</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Inbox</Nav.Link>
            <Nav.Link href="#features">Compose Mail</Nav.Link>
          </Nav>
        </Container>
        <Navbar.Brand href="#home" className="text-danger">
          Sign Out
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default MainNavigation;
