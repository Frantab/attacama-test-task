import React from 'react';
import {connect} from 'react-redux';

import {addPatient, addRelative, addPhone} from '../../actions';

import './App.css';
const data = require('../../data/madhouse.json');

/** This class represents main component App. */
class App extends React.Component {
	parseData() {
		data.forEach(patient => {
			const relatives = (patient.kids.has_relatives || {}).records;

			this.props.addPatient(patient.data);
			if (relatives) {
				relatives.forEach(relative => {
					const phones = (relative.kids.has_phone || {}).records;

					this.props.addRelative(relative.data);

					if (phones) {
						phones.forEach(phone => {
							this.props.addPhone(phone.data);
						});
					}
				});
			}
		});
	}

	/**
     * This function is automatically called after component mount.
     */
	componentDidMount() {
		this.parseData();
	}

	/**
     * This function returns jsx result of App component.
     */
	render() {
		return (
			<div className='App' />
		);
	}
}

const mapStateToProps = state => ({
	patients: state.patients,
	relatives: state.relatives,
	phones: state.phones
});

export default connect(mapStateToProps, {addPatient, addRelative, addPhone})(App);
