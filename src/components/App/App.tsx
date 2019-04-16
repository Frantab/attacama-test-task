import * as React from 'react';

import './App.css';

/** Interfase for props of App */
interface IAppProps {}

/** Interfase for state of App */
interface IAppState {}

/** This class represents main component App. */
class App extends React.Component<IAppProps, IAppState> {
    /**
     * This function returns jsx result of App component.
     */
    render() {
        return (
            <div className='App'>
                <h1>Attacama test task</h1>
            </div>
        );
    }
}

export default App;