
import _ from "underscore"
import { NotificationManager } from "react-notifications"
import actions from "./names"

export const getWords = (url) => async (dispatch, getState) => {
  dispatch({
    type: actions.FETCH_WORDS_BEGIN,
  })
  try {
    const appUrl = "http://localhost:3000/main/word-count"
    let data = {
      request: url,
    };
    const otherParam = {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      method: "POST"
    };

    let wordCounts = await fetch(appUrl, otherParam)
    if (wordCounts.status !== 200) {
      dispatch({
        type: actions.FETCH_WORDS_FAILURE,
      })
      return NotificationManager.error("Bad URL")
    } else {

      wordCounts = await wordCounts.json()

      dispatch({
        type: actions.FETCH_WORDS_SUCCESS,
        wordCounts,
        url,
      })
    }


  } catch (error) {
    console.log(error)
    dispatch({
      type: actions.FETCH_WORDS_FAILURE,
    })
    NotificationManager.error("Bad URL")
  }
}