import React from "react"; //import React Component
import { Link } from "react-router-dom";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

// Nav bar with both media queries
export function Main() {
  if (window.matchMedia("(min-width: 768px)")){
    return (
    <header>
        <h1>Talk Stock</h1>
        <h2>Predicting Tommorow</h2>

        <Container>
          <Row>
            <Col>
              <Link className="box right" to="/About">About</Link> <break />
              <Link className="box left" to="/TwitterAnalytics">Twitter Analytics</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link className="box right" to="/NewsAnalytics">News Analytics</Link> <break />
              <Link className="box left" to="/RedditAnalytics">Reddit Analytics</Link>
            </Col>
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
  } else {
    return (
      <main>
        <h1>Talk Stock</h1>
      </main>
    );
    
  }
  
}
