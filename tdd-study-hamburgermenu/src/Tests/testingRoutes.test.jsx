import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import App from '../App';

describe('Testing Routes', () => {
  it('When we pass route with path `/` the page Home should render', async () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>
    );

    const home = getByText('Hello')

    expect(home.innerHTML).toMatch('Hello');
  })

  it('404 page should be render when pathname do not match with none routes', async () => {
    const history = createMemoryHistory();
    history.push('/wrong-url');

    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>
    );

    const pageNotFound = getByText(/O que você procurava, parece não estar mais aqui/i);

    expect(pageNotFound.innerHTML).toMatch("O que você procurava, parece não estar mais aqui");
  });
})