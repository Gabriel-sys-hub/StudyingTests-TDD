import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";

import App from '../App';

describe('Testing Button component', () => {
  it('Testing if the button apper in Home section', async () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByRole } = render(
      <Router history={ history }>
        <App />
      </Router>
    );

    const button = getByRole('button', { name: /VideoGame/i });

    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toContain('VideoGame')
  })
});

describe('Testing Component Header', () => {
  it('Testing if the header appers on the Home Page', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByTestId } = render(
      <Router history={ history }>
        <App />
      </Router>
    );

    const header = getByTestId('header-lenght');
    
    expect(header).toBeInTheDocument();
  });
})
