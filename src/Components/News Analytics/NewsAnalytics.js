import React from "react"; //import React Component
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export function NewsAnalytics(props) {
  //use props to import list of companies

  let windowMatch = window.matchMedia("(min-width: 768px)");
  if (windowMatch.matches){
    return (
      <div className="analytics">
        <Container>
          <Row>
            <Col>
              <h3 className="choose">Choose Company</h3>
              <DropdownButton title="Choose Company" id="dropdown-basic">
                <DropdownItem></DropdownItem>
              </DropdownButton>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
    <div>

    </div>
   );
  }
}
