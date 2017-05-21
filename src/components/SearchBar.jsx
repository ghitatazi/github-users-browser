import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import '../styles/SearchBar.css';

const SearchBar = ({ onChangeValue }) => {
	return (
		<FormControl type="text" placeholder="Search..." onChange={onChangeValue} />
	)
}

SearchBar.propTypes = {
	onChangeValue: PropTypes.func.isRequired
};

export default SearchBar;