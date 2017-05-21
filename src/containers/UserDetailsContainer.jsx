import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

const mapStateToProps = (state) => {
	return {
		users: state.users,
		show: state.details.displayDetails,
		userSelected: state.details.userSelected
	}
}

const UserDetailsContainer = connect(mapStateToProps)(UserDetails);

export default UserDetailsContainer;