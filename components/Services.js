import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Icon from './Icon'

const Services = () => (
  <Fragment>
    <Row center="xs">
      <Col xs={12} first="xs" last="sm">
        <div className="service-main">
          <div className="title">
            Services
          </div>
          <div className="main">
            We Provide Awesome Services to our Customers
          </div>
          <div className="description">
            The point of using Lorem Ipsum is that it has a more-or- less normal
            distribution of letters.
          </div>
          <div className="more-details-btn">
            <span>more details</span>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="service-item service-item-bl">
          <Icon src="/static/code.png" label="development" />
          <div className="title">
              Development
          </div>
          <div className="description">
              Lorem ipsum dummy text are
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="service-item service-item-wh">
          <Icon src="/static/product.png" label="product design" />
          <div className="title">
            Product Design
          </div>
          <div className="description">
            Lorem ipsum dummy text are
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="service-item service-item-wh item-product">
          <Icon src="/static/research.png" label="ui/ux research" />
          <div className="title">
            UI/UX Research
          </div>
          <div className="description">
            Lorem ipsum dummy text are
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="service-item service-item-wh">
          <Icon src="/static/digital.png" label="digital marketing" />
          <div className="title">
            Digital Marketing
          </div>
          <div className="description">
            Lorem ipsum dummy text are
          </div>
        </div>
      </Col>
    </Row>
    <style jsx>{`
    .service-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .service-main .title {
      text-transform: uppercase;
      font: Medium 20px/38px Roboto;
      letter-spacing: 0;
      color: #1B8CFD;
      width: 91px;
      height: 26px;
      margin: 10px 5px;
    }

    .service-main .main {
      font: Bold 30px/46px Roboto;
      letter-spacing: 0;
      color: #1E2F4F;
      margin: 10px 5px;
    }
     
    .service-main .description {
      font: Regular 16px/30px Roboto;
      letter-spacing: 0;
      color: #747F92;
      margin: 20px 5px;
    }

    .service-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      width: 270px;
      height: 245px;
      margin: 10px 40px;
    }

    .service-item .title {
      margin: 10px;
      text-align: center;
      font: Bold 25px/33px Roboto;
      letter-spacing: 0;
    }

    .service-item .description {
      margin: 10px;
      text-align: center;
      font: Regular 16px/26px Roboto;
      letter-spacing: 0;
    }

    .service-item-bl {
      background: transparent linear-gradient(229deg, #0682FF 0%, #3AA3FF 100%) 
                  0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 20px #1B8CFD;
      color: #FFFFFF;
    }

    .service-item-wh {
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 20px #1B8CFD;
      color: #1E2F4F;
    }

    .item-product {
      margin-top: 20px;
    }

    .more-details-btn {
      box-shadow: 0px 1px 5px #1B8CFD;
      border: 2px solid #1B8CFD;
      border-radius: 25px;
      padding: 10px 23px;
      margin: 30px 0px;
    }

    .more-details-btn span {
      text-transform: uppercase;
      text-align: center;
      font: Bold 15px/20px Roboto;
      letter-spacing: 0;
      color: #1B8CFD;
    }
  `}</style>
  </Fragment>
)

export default Services
