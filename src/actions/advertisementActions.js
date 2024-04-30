export const ADD_ADVERTISEMENT = 'ADD_ADVERTISEMENT';
export const UPDATE_ADVERTISEMENT = 'UPDATE_ADVERTISEMENT';
export const DELETE_ADVERTISEMENT = 'DELETE_ADVERTISEMENT';

export const addAdvertisement = (advertisement) => ({
  type: ADD_ADVERTISEMENT,
  payload: advertisement,
});

export const updateAdvertisement = (advertisement) => ({
  type: UPDATE_ADVERTISEMENT,
  payload: advertisement,
});

export const deleteAdvertisement = (advertisementId) => ({
  type: DELETE_ADVERTISEMENT,
  payload: advertisementId,
});
 