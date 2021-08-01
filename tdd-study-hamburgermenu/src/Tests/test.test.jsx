import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import App from '../App';

describe('Routes', () => {
  it('When we pass route with path `/` the page Home should render', async () => {
    const history = createMemoryHistory();
    history.push('/');

    const { container } = render(
      <Router history={ history }>
        <App />
      </Router>
    );

    expect(container.innerHTML).toMatch(/Home/);
  })

  it('404 page should be render when pathname do not match with none routes', async () => {
    const history = createMemoryHistory();
    history.push('/wrong-url');

    const { container } = render(
      <Router history={ history }>
        <App />
      </Router>
    );

    expect(container.innerHTML).toMatch(/Page not found/);
  });
})