import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, getByLabelText } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";

import App from '../App';

describe('Testing fireEvent Button', () => {
  it('Testing when you click in the button, the text apper in the screen', async () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByRole, getByLabelText } = render(
      <Router history={ history }>
        <App />
      </Router>
    );

    const button = getByRole('button', { name: /VideoGame/i });

    fireEvent.click(button);
    const input = getByLabelText('Name');

    expect(input).toBeInTheDocument();
  });
});
