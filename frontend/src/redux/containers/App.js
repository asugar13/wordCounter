import App from "redux/components/App"
import {
  connect,
} from "react-redux"
import {
} from "redux/actions/app"

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

export default AppContainer
