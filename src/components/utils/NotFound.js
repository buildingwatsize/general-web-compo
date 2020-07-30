import React from 'react'
import { withRouter } from 'react-router-dom'

const goHome = (props) => {
  props.history.push('/')
}

function NotFound(props) {
  return (
    <div>
      <button onClick={() => goHome(props)}>Go Home</button>
    </div>
  )
}

export default withRouter(NotFound)
