import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home';

describe('testing components', () => {
    it('test Home component', () => {
      const data = render(
        <Provider store={store}>
          <Home />
        </Provider>,
      );
      expect(data).toMatchSnapshot();
    });
  });