import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import NavBar from 'components/NavBar'
import FontView from 'components/FontView'
import LoadingView from 'components/LoadingView'

const contentStyle = {
  marginTop: "48px",
  padding: "16px"
}

const viewList = [
  {
    pathname: "/",
    component: <div>Hello World</div>
  },
  {
    pathname: "/font_view",
    component: <FontView />
  },
  {
    pathname: "/loading_view",
    component: <LoadingView />
  },
]

const LandingPage = ({ history }) => {
  const [currentView, setCurrentView] = useState(null)

  useEffect(() => {
    console.log(history.location.pathname);
    const foundView = viewList.find(el => el.pathname === history.location.pathname)
    setCurrentView(foundView?.component)
  }, [history.location.pathname])

  return (
    <div>
      <NavBar />
      <div style={contentStyle}>
        {currentView}
      </div>
    </div>
  )
}

export default withRouter(LandingPage)
