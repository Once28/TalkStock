import React from "react"; //import React Component
import { Link } from "react-router-dom";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

// Nav bar with both media queries
export function About() {
  return (
    <body>
      <Link to="/Main"><i className="arrow"></i></Link>
      <h1>About</h1>
      <h2>What is TalkStock</h2>
      <p>Talk Stock is an application aimed to predict a stock’s volitility based on how much it is being mentioned online.</p>
      <h2>Who am I?</h2>
      <image href="" alt="my profile picture" />
      <p></p>
      <h2>What is my goal?</h2>
      <p></p>
      <h2>Contact Information</h2>
      <p>Phone# <break /> (425)-442-5243</p> <break />
      <p>Email Adress <break /> <Link>jzenguw@uw.edu</Link></p>
    </body>
  );
}
