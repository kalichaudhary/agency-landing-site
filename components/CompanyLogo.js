import { Row, Col } from 'react-flexbox-grid'
import { Fragment } from 'react'

const CompanyLogo = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={20} md={10} lg={10}>
          <img src="/static/company-logo.png" alt="my image" className="company-logo"/> 
        </Col>
        <Col xs={20} md={2} lg={2} />
      </Row>
      <style jsx>{`
         .company-logo {
           margin: 0;
        }
      `}</style>
    </Fragment>
  )
}

export default CompanyLogo