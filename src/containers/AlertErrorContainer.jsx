import { connect } from 'react-redux';
import Alert from '../components/Alert';

const mapStateToProps = (state) => {
	return {
		showAlert: state.showAlert,
	}
}

const AlertErrorContainer = connect(mapStateToProps)(Alert);

export default AlertErrorContainer;