import React from "react"; //import React Component
import { Link } from "react-router-dom";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

export function Main() {
  let windowMatch = window.matchMedia("(min-width: 768px)");
  if (windowMatch.matches){
    return (
      <header>
          <h1 className="title">Talk Stock</h1>
      </header>
    );
  } else {
    return (
    <header>
        <h1>Talk Stock</h1>
        <h2>Predicting Tommorow</h2>

        <Container>
          <Row>
            <Col>
              <Link className="box" to="/About">About</Link>
            </Col>
            <Col>
              <Link className="box" to="/TwitterAnalytics">Twitter Analytics</Link>
            </Col>
          </Row>
          <Row>
            {/* <Col>
              <Link className="box" to="/NewsAnalytics">News Analytics</Link>
            </Col>
            <Col>
              <Link className="box" to="/RedditAnalytics">Reddit Analytics</Link>
            </Col> */}
          </Row>
          {/* <Row>
            <Col>
             <Link className="rect">Favorites</Link>
            </Col>
            <Col>
             <Link className="rect">Following</Link>
            </Col>
          </Row> */}
        </Container>
    </header>
   );
  }
}
