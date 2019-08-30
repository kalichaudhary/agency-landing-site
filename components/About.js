import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'

const About = () => (
  <Fragment>
    <Row center="xs">
      <Col xs={12}>
        <div className="about-main">
          <div className="title">
            About us
          </div>
        </div>
      </Col>
      <Col xs={12} left="xs" right="sm">
        <div className="about-img-container">
          <img src="/static/undraw_note_list_etto.png" alt=" " />
        </div>
      </Col>
      <Col xs={12}>
        <div className="about-main">
          <div className="main">
            We Will Plan, Design and Developing & Maintain Project
          </div>
          <div className="description">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or- less normal distribution of letters.
          </div>
          <div className="read-more-btn">
            <span>read more</span>
          </div>
        </div>
      </Col>
    </Row>
    <style jsx>{`
        .about-img-container {
          margin: 30px 0px;
          background: url('/static/undraw_note_list_bg.png');
        }

        .about-main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 30px 0px;
        }
    
        .about-main .title {
          text-transform: uppercase;
          font-family: 'Roboto';
          font-weight: 500;
          font-size: 18px;
          line-height: 38px;
          letter-spacing: 0;
          color: #1B8CFD;
          width: 91px;
          height: 26px;
          margin: 10px 5px;
        }
    
        .about-main .main {
          font-family: 'Roboto';
          font-weight: 700;
          font-size: 30px;
          line-height: 46px;
          letter-spacing: 0;
          color: #1E2F4F;
          margin: 10px 5px;
        }
         
        .about-main .description {
          font-family: 'Roboto';
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          letter-spacing: 0;
          color: #747F92;
          margin: 20px 5px;
        }

        .read-more-btn {
          background: #1B8CFD 0% 0% no-repeat padding-box;
          box-shadow: 0px 3px 24px #1B8CFD;
          border-radius: 25px;
          padding: 10px 23px;
          margin: 30px 0px;
        }
    
        .read-more-btn span {
          text-transform: uppercase;
          text-align: center;
          font: Bold 15px/20px Roboto;
          letter-spacing: 0;
          color: #FFFFFF;
        }
      `}</style>
  </Fragment>
)

export default About
