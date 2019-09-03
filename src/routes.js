import React from 'react'
import New from './pages/New'
import Generos from './pages/Generos'
import Edite from './pages/Edite'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path='/new' component={New} />
        <Route path='/generos' component={Generos} />
        <Route path='/edite' component={Edite} />
        <Redirect path='*' to='/generos' />
      </Switch>
    </Router>
  )
}
