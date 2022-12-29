import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import MomaImg from '../../assets/img/moma.png';


function Feature() {
  return(
    <div className="feature">
      <Container className="feature-container">
        <Row>
          <h3 className="feature-title"> About </h3>
        </Row>
        <Row>
          <div className="feature-about-text">The MOMA dataset is structured in a four-level hierarchy in terms of activity partonomy, with rich annotation at each level. As shown in the figure below, the activity dining service consists of multiple steps (i.e., sub-activities), including take an order, serve wine, serve food, and clean up the table. Further, the sub-activity taking an order also involves multiple entities. It consists of several actor-centric atomic actions: sit, talk to someone, write on something, etc. At the bottom level, we provide a dense annotation of actor-object relationships. </div>
        </Row>
        <Row>
        <img className="feature-moma-img" src={MomaImg} alt="Moma img" />

        </Row>
        <Row>
          <h3 className="feature-title"> Dataset Statistics </h3>
        </Row>
        <Row>
          <Col md={4} xs={12}>
            <div className="feature-number"> 1,412 </div>
            <div className="feature-text"> raw videos at activity level </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="feature-number"> 15,842 </div>
            <div className="feature-text"> trimmed videos at sub-activity level </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="feature-number"> 161,265 </div>
            <div className="feature-text"> atomic action instances </div>
          </Col>
        </Row>
        <Row>
          <Col md={3} xs={12}>
            <div className="feature-number"> 636,194 </div>
            <div className="feature-text"> actor instances from 26 classes</div>
          </Col>
          <Col md={3} xs={12}>
            <div className="feature-number"> 349,034 </div>
            <div className="feature-text"> objects instances from 126 classes</div>
          </Col>
          <Col md={3} xs={12}>
            <div className="feature-number"> 704,230 </div>
            <div className="feature-text"> attribute instances from 13 classes </div>
          </Col>
          <Col md={3} xs={12}>
            <div className="feature-number"> 1,037,013 </div>
            <div className="feature-text"> relationship instances from 52 classes </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Feature;
