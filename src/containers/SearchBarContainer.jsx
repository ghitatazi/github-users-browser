import { connect } from 'react-redux';
import { filterListOfUsers, clearDetails } from '../actions/ActionsCreator';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeValue: (e) => {
      		dispatch(filterListOfUsers(e.target.value));
      		dispatch(clearDetails());
    	}
	}
}

const SearchBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;