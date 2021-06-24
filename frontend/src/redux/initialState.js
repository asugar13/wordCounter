import _ from "underscore"
import mainState from "modules/main/initialState"

// Add the reducers from the submodules generated with gen
export default _.extend({},
    mainState
)
