import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBarContainer from '../containers/SearchBarContainer';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const tableDivStyle = {
	marginTop: '20px',
	marginBottom: '20px',
	width: '250px'
}

const cellFormatter = (cell, row) => {
	return (
		<div>
			<span>{row.login}</span>
		</div>
	);
};

class UsersList extends Component {
	componentDidMount() {
		const { getUsers } = this.props;
		getUsers();
	}

	render() {
		const { users, onSelectUser, onDeselectUser } = this.props;
		const onSelectCallback = (row, isSelected) => {
			if (isSelected === true) {
				onSelectUser(row.login);
			} else {
				onDeselectUser();
			}
		}
		const selectRowProp = {
			mode: 'radio',
			bgColor: 'pink',
			hideSelectColumn: true,
			clickToSelect: true,
			onSelect: onSelectCallback
		};
		return (
			<div style={tableDivStyle}>
				<BootstrapTable data={ users } selectRow={ selectRowProp }>
					<TableHeaderColumn dataField='login' isKey dataFormat={cellFormatter}>
						<SearchBarContainer/>
					</TableHeaderColumn>
		      	</BootstrapTable>
	      	</div>
		)
	}
}

UsersList.propTypes = {
	users: PropTypes.array.isRequired,
	onSelectUser: PropTypes.func.isRequired
};

export default UsersList;