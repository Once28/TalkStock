import React from "react"; //import React Component
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

export function NavBar() {
  return (
      <nav>
        <Container className="navbar">
          <Row>
            <Col>
              <NavLink to="/Main" activeStyle={{fontWeight: "bold", color: "#A8DADC"}} aria-label="Go to Home page">
                Home
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/TwitterAnalytics" activeStyle={{fontWeight: "bold", color: "#A8DADC"}} aria-label="Go to Twitter Analytics page">
                Twitter Analytics
              </NavLink>
              </Col>
              <Col>
              <NavLink to="/NewsAnalytics" activeStyle={{fontWeight: "bold", color: "#A8DADC"}} aria-label="Go to News Analytics page">
                News Analytics
              </NavLink>
              </Col>
              <Col>
              <NavLink to="/RedditAnalytics" activeStyle={{fontWeight: "bold", color: "#A8DADC"}} aria-label="Go to Reddit Analytics page">
                Reddit Analytics
              </NavLink>
              </Col>
          </Row>
        </Container>
      </nav>
  );
}
