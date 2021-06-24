import {
  createStore,
  applyMiddleware,
  compose,
} from "redux"
import thunk from "redux-thunk"
import appReducers from "redux/reducers"

const middleware = [
  thunk,
]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(appReducers, composeEnhancers(applyMiddleware(...middleware)))
