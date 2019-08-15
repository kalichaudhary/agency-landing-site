const layoutStyle = {
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  opacity: 1
}

const Layout = props => {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}

export default Layout