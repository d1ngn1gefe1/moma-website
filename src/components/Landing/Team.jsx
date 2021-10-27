import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Member from '../../assets/icons/member.svg';


class Team extends PureComponent {

  render() {
    let { members } = this.props;
    return (
        <div className="team">
          <Container className="team-container">
            <Row>
              <h3 className="team-title"> Our Team </h3>
            </Row>
            {members.map(row => (
              <Row>
                {row.map(member => (
                  <Col md={3} className="team-card">
                    <div className="headshot">
                      <img className="headshot-img" src={member.img} alt={member.name} />
                    </div>
                    <div className="name"> { member.name } </div>
                    <div className="role">{ member.role }</div>
                    <div className="org">{ member.org }</div>
                  </Col>
                ))}
              </Row>
            ))}

          </Container>
        </div>
    )

  }

}

Team.defaultProps = {
  members: [
    [
      {
         name: 'Zelun (Alan) Luo',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Wanze Xie',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Linden Li',
         role: 'Undergraduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Bingxian (Kevin) Chen',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
    ],
    [{
         name: 'Emily Jin',
         role: 'Undergraduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Ruochen (Chloe) Liu',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Tina Li',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Zhuoyi Huang',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
    ],
    [
      {
         name: 'Siddharth Kapoor',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Yiyun Liang',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Michael Cooper',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Juan Carlos',
         role: 'Adjunct Professor',
         org: 'Stanford University',
         img: Member,
      },
    ],
    [
      {
         name: 'Ehsan Adeli',
         role: 'Assistant Professor',
         org: 'Stanford University',
         img: Member,
      },
      {
         name: 'Fei-Fei Li',
         role: 'Professor',
         org: 'Stanford University',
         img: Member,
      }
    ]
  ]

}

export default Team;
