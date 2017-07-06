import React from 'react'
import Helmet from 'react-helmet'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Nav from './component/nav'
import HomePage from './component/page/home'
import OtherPage from './component/page/other'
const APP_NAME = 'My App Name'
const App = function() {
  return (
    <div>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route path='/other*' render={() => <OtherPage />} />
      </Switch>
    </div>
  )
}
export default App
