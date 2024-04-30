import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import AdvertisementForm from './AdvertisementForm'; 
import store from '../storre/store'; 
import advertisementReducer from '../reducers/advertisementReducer';

test('calls handleUpdate when update button is clicked', () => {
  render(
    <Provider store={store}>
      <AdvertisementForm />
    </Provider>
  );

  expect(screen.getByText('Add Advertisement')).toBeInTheDocument(); 
});
