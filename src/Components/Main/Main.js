import React from "react"; //import React Component
import { Button } from "react-bootstrap";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

// Nav bar with both media queries
export function Main() {
  return (
    <header>
        <h1>Talk Stock</h1>
        <h2>Predicting Tommorow</h2>

        <Container>
          <Row>
            <Col>
              <Button className="box">About</Button>
              <Button className="box">Twitter Analytics</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="box">News Analytics</Button>
              <Button className="box">Reddit Analytics</Button>
            </Col>
          </Row>
          <Row>
            <Col>
             <Button className="rect">Favorites</Button>
            </Col>
            <Col>
             <Button className="rect">Following</Button>
            </Col>
          </Row>
        </Container>
    </header>
  );
}
