import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from '../App';

describe('Tests of App component.', () => {
  test('App component should render without crash.', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});