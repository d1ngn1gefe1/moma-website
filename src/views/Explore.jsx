import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import SearchImg from "../assets/icons/search.svg";

class Explore extends PureComponent {
  render() {
    return (
      <div className="explore">
        <Container>
          <Row>
            <h1 className="explore-title"> Explore </h1>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Control placeholder="Type..." />
            </Col>
            <Col md={2}>
              <Button variant="moma-primary" size="moma-lg">
                <img className="explore-icon" src={SearchImg}/>
              </Button>
            </Col>
          </Row>

      </Container>

      </div>

    )

  }
}


export default Explore;
