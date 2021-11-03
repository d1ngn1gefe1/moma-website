import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import ExploreCard from '../components/Explore/ExploreCard';
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
            <Col md={{span: 10}}>

            </Col>
          </Row>

      </Container>

      </div>

    )

  }
}
// <ExploreCard />

export default Explore;
