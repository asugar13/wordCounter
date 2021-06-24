import React from "react"
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom"
import Main from "modules/main/containers/Main"
import NotFound from "lib/components/NotFound"

export default () => {

  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/" component={Main} />

          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}