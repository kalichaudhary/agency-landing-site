import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'

const CompanyLogo = () => (
  <Fragment>
    <Row>
      <Col xs={12}>
        <img
          src="/static/company-logo2.png"
          alt=""
          className="company-logo-container"/>
      </Col>
    </Row>
    <style jsx>{`
        .company-logo-container {
          width: 100%;
          height: 45px;
          opacity: 1;
          margin: 30px 0px;
        }
      `}</style>
  </Fragment>
)

export default CompanyLogo
