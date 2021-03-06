import React, { useState } from "react"; //import React Component
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

export function NavBar() {
  const [onAnalytics, setAnalytics] = useState(false);
    return (
        <nav>
          <Container className="navbar">
            <Row>
              <Col>
                <NavLink activeClassName="active" to="/Main" onClick={() => setAnalytics(false)} activeStyle={{fontWeight: "bold", color: "#457B9D"}} aria-label="Go to Home page">
                  Home
                </NavLink>
              </Col>
              {/* <Col>
                <NavLink to="/TwitterAnalytics" onClick={() => setAnalytics(true)} activeStyle={{fontWeight: "bold", color: "#457B9D"}} aria-label="Go to Twitter Analytics page">
                  Twitter Analytics
                </NavLink>
              </Col> */}
              <Col>
                <NavLink to="/NewsAnalytics" onClick={() => setAnalytics(true)}  activeStyle={{fontWeight: "bold", color: "#457B9D"}} aria-label="Go to News Analytics page">
                  News Analytics
                </NavLink>
              </Col>
              {/* <Col>
                <NavLink to="/RedditAnalytics" onClick={() => setAnalytics(true)}  activeStyle={{fontWeight: "bold", color: "#457B9D"}} aria-label="Go to Reddit Analytics page">
                  Reddit Analytics
                </NavLink>
              </Col> */}
            </Row>
          </Container>
        </nav>
    );
}
