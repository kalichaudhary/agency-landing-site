import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

const Nav = ({ name }) => (
  <Fragment>
    <li>{name}</li>
    <style jsx>{`
      li {
        text-align: center;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0;
        color: #1E2F4F;
        list-style: none;
        margin: 10px;
        display: block;
        font-weight: 500;
      }
    `}</style>
  </Fragment>
)

Nav.propTypes = {
  name: PropTypes.string.isRequired,
}

const Header = () => (
  <Fragment>
    <Row center="xs">
      <Col xs={12}>
        <img alt=" " className="logo-container" src="/static/Logo.png" />
      </Col>
      <Col xs={12}>
        <ul className="header-links">
          <Nav name="HOME" />
          <Nav name="ABOUT US" />
          <Nav name="SERVICES" />
          <Nav name="PORTFOLIO" />
          <Nav name="BLOG" />
          <Nav name="CONTACT US" />
        </ul>
      </Col>
    </Row>
    <Row>
      <Col xs={12} className="img-container" first="xs" last="sm">
        <img src="/static/Illustrations.png" alt=" " width="335px" height="351px"/>
      </Col>
      <Col xs={12}>
        <div className="main-header">
          <div className="main-header-text">
            The Best Agency For
            Your Creative Business
          </div>
          <div className="sub-header-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="get-started-btn">
            <button>GET STARTED</button>
          </div>
        </div>
      </Col>
    </Row>
    <style jsx>{`
        ul.header-links {
          padding: 0;
          margin: 20px 0px;
        }

        .img-container {
          margin: 30px 0px;
        }

        .logo-container {
          margin: 20px 0px;
          height: 33px;
        }

        .main-header {
          text-align: center;
        }

        .main-header-text {
          text-align: center;
          font: Bold 30px/45px Roboto;
          font-family: 'Roboto';
          font-weight: 700;
          font-size: 2em;
          letter-spacing: 0;
          color: #1E2F4F;
          margin-top: 5px;
        }

        .sub-header-text {
          text-align: center;
          font-family: 'Roboto';
          font-weight: 400;
          font-size: 0.7em;
          letter-spacing: 0;
          color: #747F92;
          margin-top: 20px;
        }

        .get-started-btn {
          display: inline-block;
          background: #1B8CFD 0% 0% no-repeat padding-box;
          color: #FFFFFF;
          border-radius: 25px;
          font-size: 15px;
          padding: 8px;
          margin-top: 30px;
        }

        .get-started-btn button{
          color: #FFFFFF;
        }
      `}</style>
  </Fragment>
)

export default Header
