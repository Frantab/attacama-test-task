import * as React from 'react';
import { connect } from 'react-redux';

import { addPatient, addRelative, addPhone } from '../../actions';

import './App.css';
const data = require('../../data/madhouse.json');

/** Interfase for props of App */
interface IAppProps {}

/** Interfase for state of App */
interface IAppState {}

/** This class represents main component App. */
class App extends React.Component<IAppProps, IAppState> {
    private parseData() {
        data.forEach((patient: { data: object, kids: { has_relatives: { records: object } }}) => {
            const relatives = (patient.kids.has_relatives || {}).records;

            this.props.addPatient(patient.data);
            if (relatives) {
                relatives.forEach((relative: { data: object, kids: { has_phone: { records: object } } }) => {
                    const phones = (relative.kids.has_phone || {}).records;

                    this.props.addRelative(relative.data);

                    if (phones) {
                        phones.forEach((phone: { data: object }) => {
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
        return  (
            <div className='App' />
        );
    }
}

const mapStateToProps = (state: { patients: array, relatives: array, phones: array }) => ({
    patients: state.patients,
    relatives: state.relatives,
    phones: state.phones
});

export default connect(mapStateToProps, { addPatient, addRelative, addPhone })(App);