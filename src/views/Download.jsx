import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

class Download extends PureComponent {
  render() {
    return (
      <div className="download">
        <Container>
          <Row>
            <h1 className="download-title"> Download </h1>
          </Row>
          <Row>
            <p className="download-text">By downloading the annotations, you agree with the MIT license.</p>
          </Row>
          <Row>
            <Col md={{ span: 7, order: 1 }}>
              <Button variant="moma-primary" size="moma-lg" > Videos </Button>
              <Button variant="moma-inverted" size="moma-lg" > Annotations </Button>
            </Col>
          </Row>

        </Container>
      </div>

    )

  }
}


export default Download;
