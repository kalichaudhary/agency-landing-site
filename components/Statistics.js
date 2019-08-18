import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Icon from './Icon'

const Statistics = () => (
  <Fragment>
    <Row>
      <Col xs={12}>
        <div className="statistics">
          <div className="icon">
            <Icon
              src="/static/project-icon.png"
              label="projects"/>
          </div>
          <div className="main">
            <div className="total">
              4500+
            </div>
            <div className="title">
              Complete Project
            </div>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="statistics">
          <div className="icon">
            <Icon
              src="/static/globe.png"
              label="available country" />
          </div>
          <div className="main">
            <div className="total">
              300+
            </div>
            <div className="title">
              Available Country
            </div>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="statistics">
          <div className="icon">
            <Icon
              src="/static/user.png"
              label="user worldwide" />
          </div>
          <div className="main">
            <div className="total">
              4000+
            </div>
            <div className="title">
              User Worldwide
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <style jsx>{`
      .statistics {
        display: flex;
        justify-content: center;
        margin: 20px 0px;
      }

      .statistics .icon {
        margin-top: 20px;
      }

      .statistics .icon-trophy {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background: url('/static/ellipse.png');
        margin-top: 20px;
      }

      .statistics .main {
        margin: 10px;
      }

      .statistics .total {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 50px;
        line-height: 66px;
        letter-spacing: 0;
        color: #1E2F4F;
      }

      .statistics .title {
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        text-align: left;
        letter-spacing: 0;
        color: #1B8CFD;
      }


    `}</style>
  </Fragment>
)

export default Statistics
