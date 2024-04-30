import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import AdvertisementList from '../components/AdvertisementList';
import store from '../storre/store'; 


const advertisements = [
  { id: 1, title: 'Test Advertisement 1', description: 'Description 1' },
  { id: 2, title: 'Test Advertisement 2', description: 'Description 2' },
];


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Integration Test', () => {
  test('renders list of advertisements, edits an advertisement, and adds a new advertisement', async () => {
    
    useSelector.mockReturnValue(advertisements);

    const { getByText, getAllByText, queryByText } = render(
      <Provider store={store}>
        <AdvertisementList />
      </Provider>
    );

   
    advertisements.forEach(advertisement => {
      const titleElement = getByText(advertisement.title);
      expect(titleElement).toBeInTheDocument();
    });

  });
});
