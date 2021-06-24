import { combineReducers } from "redux"
import _ from "underscore"
import * as appReducers from "./reducers/app"
import * as mainReducers from "modules/main/reducers/main"

// Combining reducers
_.extend(
  appReducers,
  mainReducers
)

export default combineReducers(appReducers)
