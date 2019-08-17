import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Icon = ({ src, label }) => (
  <Fragment>
    <img src={src} alt={label} className="icon"/>
    <style jsx>{`
        .icon {
          width: 60px;
          height: 60px;
        }
      `}</style>
  </Fragment>
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Icon
