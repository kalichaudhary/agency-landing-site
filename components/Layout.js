import React from 'react'
import PropTypes from 'prop-types'

const layoutStyle = {
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  opacity: 1,
  margin: '20px 0px',
}

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
