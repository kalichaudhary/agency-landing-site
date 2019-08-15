import { Row, Col } from 'react-flexbox-grid'
import { Fragment } from 'react'

const Nav = ({ name }) => {
  return (
    <Fragment>
      <li>{name}</li>
      <style jsx>{`
        li {
          text-align: left;
          font: Bold 16px/21px Roboto;
          letter-spacing: 0;
          color: #1E2F4F;
          list-style: none;
          margin: 5px;
          display: inline;
          font-weight: 500;
        }
      `}</style>
    </Fragment>
  )
}

const Header = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={2} md={1} lg={1}/>
        <Col md={10} lg={10}>
          <Row between="xs">
            <Col md={6} lg={6}>
              <div>
              <img src="/static/Logo.png" alt="my image" className="logo-container"/>
              </div>
            </Col>
            <Col md={6} lg={6}>
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
        </Col>
        <Col xs={2} md={1} lg={1}/>
      </Row>
      <Row between="xs">
          <Col xs={2} md={1} lg={1}/>
          <Col xs={20} md={10} lg={10}>
            <Row>
              <Col xs={10} md={5} lg={5}>
                <div className="main-header-text">The Best Agency For Your Creative Business</div>
                <div className="sub-header-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <button className="get-started-btn">GET STARTED</button>
              </Col>
              <Col xs={2} md={1} lg={1}/>
              <Col xs={10} md={5} lg={5}>
                <div className="img-container">
                  <img src="/static/Illustrations.png" alt="my image" />
                </div>
              </Col>
              <Col xs={2} md={1} lg={1}/>
            </Row>
          </Col>
          <Col xs={2} md={1} lg={1}/>
      </Row>
      <style jsx>{`
        ul {
          padding: 0;
        }

        .img-container {
          margin-bottom: 30px;
        }
        .logo-container {
          margin: 59px 0px;
          height: 33px;
        }

        .header-links {
          margin: 59px 0px;
        }

        .main-header-text {
          text-align: left;
          font: Bold 80px/95px Roboto;
          font-size: 3.8em;
          letter-spacing: 0;
          color: #1E2F4F;
          margin-top: 5px;
        }

        .sub-header-text {
          text-align: left;
          font: Regular 16px/30px Roboto;
          letter-spacing: 0;
          color: #747F92;
          margin-top: 20px;
        }

        .get-started-btn {
          background: #1B8CFD 0% 0% no-repeat padding-box;
          color: #FFFFFF;
          border-radius: 25px;
          font-size: 15px;
          padding: 15px 27px 15px 28px;
          margin-top: 30px;
        }
      `}</style>
    </Fragment>
  )
}

export default Header