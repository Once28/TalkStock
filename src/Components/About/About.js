import React from "react"; //import React Component
import { Link } from "react-router-dom";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

// Nav bar with both media queries
export function About() {
  return (
    <body>
      <h1>About</h1>
      <h2>What is TalkStock</h2>
      <p>Talk Stock is an application aimed to predict a stock’s volitility based on how much it is being mentioned online.</p>
      <h2>Who am I?</h2>
      <image href="" alt="my profile picture" />
      <p></p>
    </body>
  );
}
