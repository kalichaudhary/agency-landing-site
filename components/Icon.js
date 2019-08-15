import { Fragment } from 'react'

const Icon = ({ src, label }) => {
  return (
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
}

export default Icon