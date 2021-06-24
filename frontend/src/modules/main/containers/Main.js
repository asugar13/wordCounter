import Main from "../components/Main"
import {
    connect
} from "react-redux"
import {
    getWords
} from "../actions/main"

const mapStateToProps = (state, ownProps) => {
    return {
        wordsLoading: state.wordsLoading,
        urlHistory: state.urlHistory,
        wordCounts: state.wordCounts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWords: (url) => dispatch(getWords(url))
    }
}

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default MainContainer