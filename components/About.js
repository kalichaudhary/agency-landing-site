import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'

const About = () => (
  <Fragment>
    <Row>
      <Col xs={12}>
        <div className="company-logo-container">
          <img src="/static/company-logo4.png" alt=" " width="100%" height="100%" />
        </div>
      </Col>
    </Row>
    <style jsx>{`
         .company-logo-container {
           width: 410px;
           height: 44px;
           margin: 30px 0px;
        }
      `}</style>
  </Fragment>
)

export default About
