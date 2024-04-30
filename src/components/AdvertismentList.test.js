import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import AdvertisementList from './AdvertisementList';
import store from '../storre/store'; 



describe('AdvertisementList component', () => {

  test('renders list of advertisements', () => {
    
    const { getByText } = render(
      <Provider store={store}>
        <AdvertisementList />
      </Provider>
    );

    const titleElement = getByText('Advertisements');
    expect(titleElement).toBeInTheDocument();
  });


 
});
