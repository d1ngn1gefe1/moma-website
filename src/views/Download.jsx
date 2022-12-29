import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

class Download extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.overflow = "hidden";
  }

  render() {
    return (
      <div className="download">
        <Container>
          <Row>
            <h1 className="download-title"> Download </h1>
          </Row>
          <Row>
            <Col  md={5} xs={12}>
            <p className="download-text"> We provide the dataset annotations and a script to crawl videos below. Alternatively, if you're interested in the raw videos for research purposes please email momadataset@lists.stanford.edu.</p>
            </Col>
          </Row>

          <br></br>

          <Row>
            <h4>MOMA 1.0</h4>
            <Col md={7} xs={12}>
              <Button variant="moma-primary" size="moma-lg" className="download-button" href="https://github.com/d1ngn1gefe1/moma-1.0"> Toolkit </Button>
              <Button variant="moma-primary" size="moma-lg" className="download-button" href="https://proceedings.neurips.cc/paper/2021/file/95688ba636a4720a85b3634acfec8cdd-Paper.pdf"> Paper </Button>
            </Col>
          </Row>

          <br></br>

          <Row>
            <h4>MOMA-LRG</h4>
            <Col md={7} xs={12}>
              <Button variant="moma-primary" size="moma-lg" className="download-button" href="https://github.com/StanfordVL/moma/"> Toolkit </Button>
              <Button variant="moma-primary" size="moma-lg" className="download-button" href="https://openreview.net/pdf?id=eJhc_CPXQIT"> Paper </Button>
              <Button variant="moma-primary" size="moma-lg" className="download-button" href="https://momaapi.readthedocs.io/en/latest/"> Documentation </Button>

            </Col>
          </Row>

        </Container>
      </div>

    )

  }
}


export default Download;

// <Button variant="moma-primary" size="moma-lg" > Videos </Button>
