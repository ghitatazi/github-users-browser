import React, { Component } from 'react';
import AlertContainer from 'react-alert';
import PropTypes from 'prop-types';
import ErrorIcon from '../resources/error_icon.png';

const alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'light',
    time: 60000,
    transition: 'fade'
}

class Alert extends Component {
	constructor(props) {
		super(props);
		this.getStatus = this.getStatus.bind(this);
		this.state = {
			display: 'none'
		}
	}

	showAlert() {
		this.msg.show('Github API rate limit exceeded, try again later or refresh page until it works again', {
			time: 2000,
			type: 'error',
			icon: <img src={ErrorIcon} alt="" />
    	});
	}

	getStatus(show) {
		if (show === true) {
			this.setState({ display: 'inline-block' });
			this.showAlert();
		} else if (show === false) {
			this.setState({ display: 'none' });
		}
	}

	componentDidMount() {
		const { showAlert } = this.props;
		this.getStatus(showAlert);
	}

	componentWillReceiveProps(nextProps) {
		this.getStatus(nextProps.showAlert);
	}

	render() {
		const containerDivStyle = { display: this.state.display };
		return (
			<div style={containerDivStyle}>
				<AlertContainer ref={a => this.msg = a} {...alertOptions} />
			</div>
		)
	}
}

Alert.propTypes = {
	showAlert: PropTypes.bool.isRequired
};

export default Alert;