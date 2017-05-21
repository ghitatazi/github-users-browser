import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../styles/UserDetails.css';

const cellFormatter = (cell, row) => {
	return (
		<span>{row}</span>
	);
};

class UserDetails extends Component {
	constructor(props) {
		super(props);
		this.getDisplayStatus = this.getDisplayStatus.bind(this);
		this.state = {
			display: 'none'
		}
	}

	getDisplayStatus(showValue) {
		if (showValue === true) {
			this.setState({ display: 'inline-block' });
		} else if (showValue === false) {
			this.setState({ display: 'none' });
		}
	}

	componentDidMount() {
		const { show } = this.props;
		this.getDisplayStatus(show);
	}

	componentWillReceiveProps(nextProps) {
		const { show } = this.props;
		if (nextProps.show !== show) {
			this.getDisplayStatus(nextProps.show);
		}
	}

	render() {
		const { users, userSelected } = this.props;
		const containerDivStyle = {
			display: this.state.display,
			width: '400px',
			height: '400px',
			border: '1px solid #ddd',
			marginTop: '20px',
			marginLeft: '120px',
			marginBottom: '20px'
		}
		return (
			<div style={containerDivStyle}>
				{users.map( (item, index) => {
					if (item.login === userSelected) {
						return (
							<div key={item.login}>
								<div>
									<img src={item.avatar_url} alt="avatar" className={"avatar"}/>
									<span className={"login"}>{item.login}</span>
								</div>
								<h5 className={"repo-title"}>Repositories</h5>
								<div className={"table-container"}>
									<BootstrapTable tableHeaderClass={"col-hidden"} data={ item.repositories } height='170px' scrollTop={ 'Top' }>
										<TableHeaderColumn dataField='name' isKey dataFormat={cellFormatter} width='50%'></TableHeaderColumn>
									</BootstrapTable>
								</div>
							</div>
						)
					}
				})}
			</div>
		)
	}
}

UserDetails.propTypes = {
	users: PropTypes.array.isRequired,
	show: PropTypes.bool.isRequired,
	userSelected: PropTypes.string.isRequired
};

export default UserDetails;