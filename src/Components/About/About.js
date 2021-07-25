import React from "react"; //import React Component
import { Link } from "react-router-dom";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

export function About() {
  let windowMatch = window.matchMedia("(min-width: 768px)");
  if (windowMatch.matches){
    return (
      <body>
        <h2>About</h2>
        <Container>
          <Row>
            <Col>
              <h3>What is TalkStock</h3>
              <p>Talk Stock is an application aimed to predict a stock’s volitility based on how much it is being mentioned online.</p>
            </Col>
            <Col>
               <h3>Who am I?</h3>
              <img src="Profile.jpg" alt="my profile picture" />
             <p>I am Justin Zeng, a freshman at the University of Washington studying informatics. Every since the gamestop event in Janurary, I’ve felt that what people say online has a lot of impact than just insider news in companies</p>
            </Col>
            <Col>
              <h3>What is my goal?</h3>
              <p>My goal for Talk Stock is to use the popularity of each stock to predict its volitility.</p>
            </Col>
          </Row>
        </Container>
        
        
        
        
      </body>
    );
  } else {
    return (
      <body>
        <Link to="/Main"><i className="arrow"></i></Link>
        <h1>About</h1>
        <h2>What is TalkStock</h2>
        <p>Talk Stock is an application aimed to predict a stock’s volitility based on how much it is being mentioned online.</p>
        <h2>Who am I?</h2>
        <img src="Profile.jpg" alt="my profile picture" />
        <p>I am Justin Zeng, a freshman at the University of Washington studying informatics. Every since the gamestop event in Janurary, I’ve felt that what people say online has a lot of impact than jsut insider news in companies</p>
        <h2>What is my goal?</h2>
        <p>My goal for Talk Stock is to use the popularity of each stock to predict its volitility.</p>
      </body>
    );
  }
  
}
