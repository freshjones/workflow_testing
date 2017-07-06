import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import HomePage from './component/page/home'
import OtherPage from './component/page/other'

const App = function() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route path='/other*' render={() => <OtherPage />} />
      </Switch>
    </div>
  )
}
export default App
