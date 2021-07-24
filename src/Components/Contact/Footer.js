import React from "react"; //import React Component
import { Link } from "react-router-dom";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

export function Footer() {
  let windowMatch = window.matchMedia("(min-width: 768px)");
  if (windowMatch.matches){
    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <h4>Contact Information</h4>
              <p>Phone# <break /> (425)-442-5243</p> <break />
              <p>Email Adress <break /> <Link>jzenguw@uw.edu</Link></p>
            </Col>
            <Col>
              <h4>Follow Us</h4>
            </Col>
            <Col>
              {/* <img src="" alt=""></img> */}
            </Col>
          </Row>
        </Container>
      </footer>
    );
  } else {
    return (
      <footer>
        <h2>Contact Information</h2>
        <p>Phone# <break /> (425)-442-5243</p> <break />
        <p>Email Adress <break /> <Link>jzenguw@uw.edu</Link></p>
      </footer>
    );
  }
  
}
