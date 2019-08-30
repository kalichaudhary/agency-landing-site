import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Icon from './Icon'

const Statistics = () => (
  <Fragment>
    <Row className="wrapper">
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
        <div className="statistics trophy">
          <div className="icon-trophy">
            <Icon
              src="/static/trophy.png"
              label="trophy"
              width="20px"
              height="20px" />
          </div>
          <div className="main">
            <div className="total">
              110
            </div>
            <div className="title">
              Award Winner
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
      .wrapper {
        display: flex;
        flex-direction: column;
      }

      .statistics {
        display: flex;
        justify-content: center;
        margin: 20px 0px;
      }

      .statistics.trophy {
        margin-right: 30px;
      }

      .statistics .icon {
        margin-top: 20px;
      }

      .statistics .icon-trophy {
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('/static/ellipse.png');
        margin-top: 20px;
        margin-right: 5px;
        width: 50px;
        height: 50px;
      }

      .statistics .main {
        margin: 10px;
      }

      .statistics.trophy .main {
        margin-left: 10px;
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
