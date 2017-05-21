import 'babel-polyfill';
import { SET_USERS, ADD_USER_REPOSITORIES, DISPLAY_DETAILS, CLEAR_DETAILS, SHOW_ALERT } from '../constants/ActionConstants';
import fetch from 'isomorphic-fetch';

export const showAlert = () => {
	return {
		type: SHOW_ALERT
	}
}

export const setUsers = (allUsers) => {
	return {
		type: SET_USERS,
		allUsers
	}
}

export const filterListOfUsers = (jsonData, value) => {
	return (dispatch) => {
		if ("items" in jsonData) {
			let filteredUsers = jsonData["items"]
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
		} else {
			dispatch(showAlert());
		}
	}
}

export const getListOfUsers = (value) => {
	return (dispatch) => {
		if (value !== '') {
			return fetch('https://api.github.com/search/users?q='+value, {
				method: 'get',
				headers: {
					'Access-Control-Allow-Origin': '*',
				}
			})
			.then(response => response.json())
			.then(json => {
				dispatch(filterListOfUsers(json, value))
			})
		} else {
			var filteredUsers = [];
			dispatch(setUsers(filteredUsers));
		}
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

export const getUserRepositories = (jsonData, login) => {
	return (dispatch) => {
		let userRepos = jsonData
			.filter(repoObj => {
				return repoObj["owner"]["login"] === login;
			})
			.map(repoObj => repoObj["name"]);
		dispatch(addUserRepositories(login, userRepos));
	}
}

export const getRemoteRepositories = (login) => {
	return (dispatch) => {
		return fetch('https://api.github.com/users/'+login+'/repos', {
				method: 'get',
				headers: {
					'Access-Control-Allow-Origin': '*',
				}
			})
			.then(response => response.json())
			.then(json => dispatch(getUserRepositories(json, login)))
	}
}

export const showUserDetails = (login) => {
	return (dispatch) => {
		dispatch(getRemoteRepositories(login));
		dispatch(displayDetails(login));
	}
}
