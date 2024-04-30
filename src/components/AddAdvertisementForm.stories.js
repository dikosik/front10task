import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import AdvertisementForm from './AdvertisementForm';
import store from '../storre/store'; // Поправляем путь к файлу store

export default {
  title: 'Components/AdvertisementForm',
  component: AdvertisementForm,
};

export const Default = () => (
  <Provider store={store}>
    <AdvertisementForm />
  </Provider>
);
