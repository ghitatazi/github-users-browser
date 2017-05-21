import 'babel-polyfill';
import { combineReducers } from 'redux';
import { SET_USERS, ADD_USER_REPOSITORIES, DISPLAY_DETAILS, CLEAR_DETAILS } from '../constants/ActionConstants';

const users = (state = [], action) => {
	switch (action.type) {
		case SET_USERS:
			return action.allUsers

		case ADD_USER_REPOSITORIES:
			return state.map( (item, index) => {
				if (item.login !== action.login) {
					return item;
				}
				return {
					...item,
					repositories: action.repositories
				}
			})

		default:
			return state;
	}
}

const details = (state = { displayDetails: false, userSelected: '' }, action) => {
	switch (action.type) {
		case DISPLAY_DETAILS:
			return {
				displayDetails: true,
				userSelected: action.login
			}
		case CLEAR_DETAILS:
			return {
				displayDetails: false,
				userSelected: ''
			}
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	users,
	details,
});

export default rootReducer;
