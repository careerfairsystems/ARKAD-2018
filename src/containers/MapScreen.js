import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCompanies } from '../actions/company'
import toggleChangeMap from '../actions/map'
import MapScreen from '../screens/Map/MapScreen'

const mapStateToProps = state => ({
  loading: state.companyReducer.loading,
  error: state.companyReducer.error,
  maps: state.mapReducer.maps
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCompanies, toggleChangeMap }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen)
