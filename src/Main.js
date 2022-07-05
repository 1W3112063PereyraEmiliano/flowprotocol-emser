import React, { useEffect } from "react";
import { Navbar, Nav, Container, Form, FormControl,Card } from "react-bootstrap"
import { FaHome, FaCloudDownloadAlt } from 'react-icons/fa';
import { TiFlowMerge } from 'react-icons/ti'

function App() {

  useEffect(() => {
  }, []);

  return (
    <React.Fragment>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/fp-emser.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            flowprotocol
          </Navbar.Brand>
          <Navbar.Collapse>
            <Form className="d-flex mx-5">
              <FormControl
                type="search"
                placeholder="buscar"
                className="me-2 form-control"
                aria-label="buscar"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="mt-0 mb-0"></hr>
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#"><FaHome className="me-2"></FaHome> inicio </Nav.Link>
            <Nav.Link href="#"><TiFlowMerge className="me-2"></TiFlowMerge> flujos </Nav.Link>
            <Nav.Link href="#" active={true}><FaCloudDownloadAlt className="me-2"></FaCloudDownloadAlt> generador </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr className="mt-0"></hr>
      <Container>
        <Card className="border-danger border-bottom-0 border-top-0 border-end-0 border-3">
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">gráfico</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">xml</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>generador gráfico</Card.Title>
            
            
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default App;
