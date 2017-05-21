import 'babel-polyfill';
import users from '../resources/users.json';
import repositories from '../resources/repositories.json';
import { SET_USERS, ADD_USER_REPOSITORIES, DISPLAY_DETAILS, CLEAR_DETAILS } from '../constants/ActionConstants';

export const setUsers = (allUsers) => {
	return {
		type: SET_USERS,
		allUsers
	}
}

export const setListOfUsers = () => {
	return (dispatch) => {
		let allUsers = users["items"]
			.map(userObj => {
				return {
					login: userObj["login"],
					avatar_url: userObj["avatar_url"],
					repositories: []
				}
			});
		dispatch(setUsers(allUsers));
	}
}

export const filterListOfUsers = (value) => {
	return (dispatch) => {
		let filteredUsers = users["items"]
			.filter(userObj => {
				return userObj["login"].startsWith(value);
			})
			.map(userObj => {
				return {
					login: userObj["login"],
					avatar_url: userObj["avatar_url"],
					repositories: []
				}
			});
		dispatch(setUsers(filteredUsers));
	}
}

export const displayDetails = (login) => {
	return {
		type: DISPLAY_DETAILS,
		login
	}
}

export const clearDetails = () => {
	return {
		type: CLEAR_DETAILS
	}
}

export const addUserRepositories = (login, repositories) => {
	return {
		type: ADD_USER_REPOSITORIES,
		login,
		repositories
	}
}

export const getUserRepositories = (login) => {
	return (dispatch) => {
		let userRepos = repositories
			.filter(repoObj => {
				return repoObj["owner"]["login"] === login;
			})
			.map(repoObj => repoObj["name"]);
		dispatch(addUserRepositories(login, userRepos));
	}
}

export const showUserDetails = (login) => {
	return (dispatch) => {
		dispatch(getUserRepositories(login));
		dispatch(displayDetails(login));
	}
}
