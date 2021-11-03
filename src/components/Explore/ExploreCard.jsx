import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { items } from './dummy.js';

import { Chrono } from "react-chrono";

class ExploreCard extends Component {

  constructor(props) {
      super(props);
      this.state = {
        active: 1,
        activeBox: null,
      }
  }

  onItemSelected = (item) => {
    this.setState({
      active: item.key
    })
  }

  handleMouseEnter = (item) => {
    console.log(item);
    this.setState({
      activeBox: item,

    })
  }

  handleMouseLeave = (item) => {
    this.setState({
      activeBox: null,

    })
  }

  render() {
    const activeItem = items.filter(item => item.key == this.state.active)[0];
    console.log(this.state.activeBox);
    return (
      <div className="explore-card">
        <Container>
          <Row>
            <Col md={{span: 6}}>
              <p className="explore-card-title"> Activity: The coach is teaching the girl to play tennis </p>
              <div style={{ width: "550px", height: "700px" }}>
                <Chrono
                  cardHeight={270}
                  items={items}
                  hideControls={true}
                  useReadMore={false}
                  cardPositionHorizontal="TOP"
                  theme={{
                    primary: "#474E5E",
                    secondary: "#DEE0E0",
                    cardForeColor: "#474E5E",
                    titleColor: "474E5E"
                  }}
                  onItemSelected={this.onItemSelected}
                />
                <div>
                  <p>{this.state.activeBox}</p>
                  {activeItem.entityPosition ? activeItem.entityPosition.map(ent => (
                    <div style={{
                      position: 'absolute',
                      borderColor: '#EEDCD0',
                      borderWidth: 'medium',
                      left: ent.left,
                      top: ent.top,
                      width: ent.width,
                      height: ent.height,
                      zIndex: '10',
                    }} className={this.state.activeBox && this.state.activeBox.includes(ent.name)? "explore-card-box-active" : ""}>
                    </div>
                  )) : null}

                </div>

              </div>
            </Col>
            <Col md={{span:2}}>
              <Row>
                <div className="explore-card-subtitle"> Entity </div>
              </Row>
              <Row>
                {activeItem.entity.map(ent => (
                  <p className="explore-card-text" onMouseEnter={() => this.handleMouseEnter(ent.entity)} onMouseLeave={() => this.handleMouseLeave(ent.entity)}>
                    {ent.text}
                  </p>
                ))}
              </Row>
            </Col>
            <Col md={{span:2}}>
              <Row>
                <div className="explore-card-subtitle"> Attribute </div>
              </Row>
              <Row>
                {activeItem.attribute.map(att => (
                  <p className="explore-card-text" onMouseEnter={() => this.handleMouseEnter(att.entity)} onMouseLeave={() => this.handleMouseLeave(att.entity)}>
                      {att.text}
                  </p>
                ))}
              </Row>
            </Col>
            <Col md={{span:2}}>
              <Row>
                <div className="explore-card-subtitle"> Relationship </div>
              </Row>
              <Row>
                {activeItem.relationship.map(rel => (
                  <p className="explore-card-text" onMouseEnter={() => this.handleMouseEnter(rel.entity)} onMouseLeave={() => this.handleMouseLeave(rel.entity)}>
                     {rel.text}
                  </p>
                ))}
              </Row>
            </Col>


          </Row>
        </Container>

      </div>

    )
  }

}


export default ExploreCard;
