import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../components/Details';

describe('testing components', () => {
  it('test details component', () => {
    const data = render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
    expect(data).toMatchSnapshot();
  });
});
