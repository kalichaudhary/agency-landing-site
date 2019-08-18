import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'

const ContactBanner = () => (
  <Fragment>
    <Row>
      <Col xs={12}>
        <div className="contact-banner-container">
          <div className="banner-main-text">
            We can help you to grow up your online business
          </div>
          <div className="contact-btn">
            <span>contact now</span>
          </div>
        </div>
      </Col>
    </Row>
    <style jsx>{`
         .contact-banner-container {
           width: 100%;
           height: 120px;
           background: url('/static/contact-banner.png');
           margin: 30px 0px;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
        }

        .contact-banner-container .banner-main-text {
          font-family: 'Roboto';
          font-weight: 700;
          font-size: 15px;
          line-height: 30px;
          letter-spacing: 0;
          color: #FFFFFF;
        }

        .contact-banner-container .contact-btn {
          background: #FFFFFF 0% 0% no-repeat padding-box;
          border-radius: 25px;
          width: 90px;
          height: 20px;
          margin: 10px;
        }
        .contact-btn span {
          text-align: center;
          text-transform: uppercase;
          font-family: 'Roboto';
          font-weight: 500;
          font-size: 8px;
          line-height: 16px;
          letter-spacing: 0;
          color: #1B8CFD;
          margin: 15px;
        }


      `}</style>
  </Fragment>
)

export default ContactBanner
