import initialState from "redux/initialState"
import actions from "../actions/names"
import _ from "underscore"


export const wordsLoading = (state = initialState.wordsLoading, action) => {
  switch (action.type) {
    case actions.FETCH_WORDS_BEGIN:
      return true
    case actions.FETCH_WORDS_SUCCESS:
      return false
    case actions.FETCH_WORDS_FAILURE:
      return false
    default:
      return state
  }
}

export const wordCounts = (state = initialState.wordCounts, action) => {
  switch (action.type) {
    case actions.FETCH_WORDS_SUCCESS:
      return action.wordCounts
    case actions.FETCH_WORDS_FAILURE:
      return {}
    default:
      return state
  }
}

export const urlHistory = (state = initialState.urlHistory, action) => {

  switch (action.type) {
    case actions.FETCH_WORDS_SUCCESS:
      let newObj = {}
      newObj.label = action.url
      let labels = _.pluck(state, "label")
      if (labels.indexOf(action.url) !== -1) {
        state.splice(labels.indexOf(action.url), 1)
        state.push(newObj)
        return state
      } else {
        state.push(newObj)
        return state
      }
    default:
      return state
  }
}
