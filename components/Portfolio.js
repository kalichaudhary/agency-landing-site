import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'

const Portfolio = () => (
  <Fragment>
    <Row center="xs">
      <Col xs={12}>
        <div className="title">
          Our Lastest Works
        </div>
      </Col>
      <Col xs={12}>
        <div className="description">
        It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        </div>
      </Col>
    </Row>
    <Row center="xs">
      <Col xs={12}>
        <ul>
          <li>All</li>
          <li>Mobile App</li>
          <li>Web Design</li>
          <li>Dashboard</li>
        </ul>
      </Col>
    </Row>
    <Row className="portfolio-list">
      <Col xs={12}>
        <Row>
          <Col xs={12}>
            <img src="/static/img1.png" alt="" width="100%" />
          </Col>
          <Col xs={12}>
            <Row between="xs">
              <Col xs={4}>
                <img src="/static/img2.png" alt="" />
              </Col>
              <Col xs={4}>
                <img src="/static/img3.png" alt="" />
              </Col>
              <Col xs={4}>
                <img src="/static/img4.png" alt="" />
              </Col>
            </Row>
            <Row between="xs">
              <Col xs={4}>
                <img src="/static/img5.png" alt="" />
              </Col>
              <Col xs={4}>
                <img src="/static/img6.png" alt="" />
              </Col>
              <Col xs={4}>
                <img src="/static/img7.png" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row between="xs">
              <Col xs={4}>
                <img src="/static/img9.png" alt="" />
              </Col>
              <Col xs={4}>
                <img src="/static/img8.png" alt="" />
              </Col>
              <Col xs={4}>
                <img src="/static/img10.png" alt="" />
              </Col>
            </Row>
            <Row between="xs">
              <Col xs={1} />
              <Col xs={4}>
                <img src="/static/img11.png" alt="" />
              </Col>
              <Col xs={4}>
                <img src="/static/img12.png" alt="" />
              </Col>
              <Col xs={1} />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
    <style jsx>{`
  
      .title {
        letter-spacing: 0;
        color: #1E2F4F;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 40px;
        line-height: 38px;
        margin: 10px 5px;
        border-bottom: 
      }

      .description {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0;
        color: #747F92;
        margin: 10px;
      }

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
      }

      li:nth-child(1) {
        color: #1B8CFD;
      }
    `}</style>
  </Fragment>
)

export default Portfolio
