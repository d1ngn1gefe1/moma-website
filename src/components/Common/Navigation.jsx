import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { NavLink, NavBanner } from './NavbarElements';
class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const links = Navigation.links;
    // const { open } = this.state;
    return (
      <Navbar
        fixed="top"
        expand="lg"
        bg="#3AAFA9"
        className={'navbar'}
      >
          <NavBanner as={Link} to="/">MOMA</NavBanner>
          <Nav className="ms-auto" />
          <Nav>
            {
              links.map(link => {
                let currUrl = this.props.history.location.pathname;
                let to = currUrl.includes(link.to) ? currUrl : link.to;
                return (
                  <NavLink as={Link} to={to} key={link.text}>
                    {link.text}
                  </NavLink>
                )
              })
            }
          </Nav>
      </Navbar>
    )
  }

}

Navigation.links = [
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/download',
    text: 'Download',
  },
  {
    to: '/publication',
    text: 'Publication',
  },
  {
    to: '/explore',
    text: 'Explore',
  },
];

export default withRouter(Navigation);
