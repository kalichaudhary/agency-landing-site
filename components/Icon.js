import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Icon = ({ src, label, width, height }) => (
  <Fragment>
    <img src={src} alt={label} className="icon" />
    <style jsx>{`
        .icon {
          width: ${width || '60px'};
          height: ${height || '60px'};
        }
      `}</style>
  </Fragment>
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default Icon
