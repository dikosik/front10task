import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux'; 
import AdvertisementItem from './AdvertisementItem';
import store from '../storre/store'; 
describe('AdvertisementItem component', () => {
  test('renders advertisement title and description', () => {
    
    const advertisement = { id: 1, title: 'Test Advertisement', description: 'Test Description' };
    
    
    const { getByText } = render(
      <Provider store={store}>
        <AdvertisementItem advertisement={advertisement} />
      </Provider>
    );
    
    
    const titleElement = getByText('Test Advertisement');
    const descriptionElement = getByText('Test Description');
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  
});
