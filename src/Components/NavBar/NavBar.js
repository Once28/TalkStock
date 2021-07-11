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
              <NavLink
                className="active"
                to="/TwitterAnalytics"
                aria-label="Go to home page"
              >
                Twitter Analytics
              </NavLink>
              <NavLink
                to="/NewsAnalytics"
                aria-label="Go to food waste tracker page"
              >
                News Analytics
              </NavLink>
              <NavLink
                to="/RedditAnalytics"
                aria-label="Go to food waste tracker page"
              >
                Reddit Analytics
              </NavLink>
            </Col>
          </Row>
        </Container>
      </nav>
  );
}
