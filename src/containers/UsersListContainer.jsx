import { connect } from 'react-redux';
import { setListOfUsers, showUserDetails, clearDetails } from '../actions/ActionsCreator';
import UsersList from '../components/UsersList';

const mapStateToProps = (state) => {
	return {
		users: state.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: () => {
			dispatch(setListOfUsers());
		},
		onSelectUser: (login) => {
			dispatch(showUserDetails(login));
		},
		onDeselectUser: () => {
			dispatch(clearDetails());
		}
	}
}

const UsersListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersList);

export default UsersListContainer;