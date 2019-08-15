import { Row, Col } from 'react-flexbox-grid'
import { Fragment } from 'react'
import Icon from './Icon';

const Services = () => {
  return (
    <Fragment>
      <Row>
      <Col xs={4} md={2} />
      <Col xs={16} md={8}>
        <Row>
          <Col xs={12} md={6}>
            <Row top="xs">
              <Col xs={12} md={6}>
                <div className="service service-bl">
                  <Icon src="/static/code.png" label="development" />
                  <div className="title">
                    Development
                  </div>
                  <div className="description">
                    Lorem ipsum dummy text are
                  </div>
                </div>
                <div className="service service-wh">
                  <Icon src="/static/product.png" label="product design" />
                  <div className="title">
                    Product Design
                  </div>
                  <div className="description">
                    Lorem ipsum dummy text are
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="service service-wh product">
                  <Icon src="/static/research.png" label="ui/ux research" />
                  <div className="title">
                    UI/UX Research
                  </div>
                  <div className="description">
                    Lorem ipsum dummy text are
                  </div>
                </div>
                <div className="service service-wh">
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
          </Col>
          <Col xs={12} md={6}>
          </Col>
        </Row>
      </Col>
      <Col xs={4} md={2} />
    </Row>
    <style jsx>{`
      .title {
        margin: 10px;
      }

      .description {
        margin: 10px;
      }

      .service {
        border-radius: 5px;
        width: 270px;
        height: 245px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px 30px 50px 30px;
      }

      .service-bl {
        background: transparent linear-gradient(229deg, #0682FF 0%, #3AA3FF 100%) 0% 0% no-repeat padding-box;
        box-shadow: 0px 6px 20px #1B8CFD;
      }

      .service-wh {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 6px 20px #1B8CFD;
        border-radius: 5px;
      }

      .product {
        margin-top: 132px;
      }
    `}</style>
    </Fragment>
  )
}

export default Services