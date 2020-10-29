import React from 'react';
import data from './data.json';
import ReactDOM from 'react-dom';
import Question from './Question';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Question data={data}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });