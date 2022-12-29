import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import MomaPubImg from '../assets/img/moma-publication.png';
import MomaLrgImg from '../assets/img/spotlight_momalrg.jpg';

class Publication extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.overflow = "hidden";
  }
  render() {
    return (
      <div className="publication">
        <Container>
          <Row>
            <h1 className="publication-title"> Publication </h1>
          </Row>
          <Row>
            <Col md={{ span: 3, order: 1}} className="my-auto">
              <img className="publication-moma-img" src={MomaPubImg} alt="moma-publication" />
            </Col>
            <Col md={{ span: 7, order: 2}}>
              <p className="publication-moma-title"> MOMA: Multi-Object Multi-Actor Activity Parsing </p>
              <p className="publication-moma-author">
                Zelun Luo*, Wanze Xie*, Siddharth Kapoor, Yiyun Liang, Michael Cooper,
                Juan Carlos Niebles, Ehsan Adeli, Li Fei-Fei
              </p>
              <Button variant="moma-primary" size="moma-lg" href="https://proceedings.neurips.cc/paper/2021/file/95688ba636a4720a85b3634acfec8cdd-Paper.pdf"> View Paper </Button>
            </Col>
          </Row>
          <Row>
          </Row>

          <br></br>
          <br></br>

          <Row>
            <Col md={{ span: 3, order: 1}} className="my-auto">
              <img className="publication-moma-img" src={MomaLrgImg} alt="moma-publication" />
            </Col>
            <Col md={{ span: 7, order: 2}}>
              <p className="publication-moma-title"> MOMA-LRG: Language-Refined Graphs for Multi-Object Multi-Actor Activity Parsing </p>
              <p className="publication-moma-author">
              Zelun Luo, Zane Durante*, Linden Li*, Wanze Xie, Ruochen Liu, Emily Jin, Zhuoyi Huang, Lun Yu Li, Jiajun Wu, Juan Carlos Niebles, Ehsan Adeli, Li Fei-Fei
              </p>
              <Button variant="moma-primary" size="moma-lg" href="https://openreview.net/pdf?id=eJhc_CPXQIT"> View Paper </Button>
            </Col>
          </Row>

      </Container>

      </div>

    )

  }
}


export default Publication;