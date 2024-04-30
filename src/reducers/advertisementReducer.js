
import { ADD_ADVERTISEMENT, UPDATE_ADVERTISEMENT, DELETE_ADVERTISEMENT } from '../actions/advertisementActions';

const initialState = {
  advertisements: [],
};

const advertisementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADVERTISEMENT:
      
      const newAdvertisement = {
        ...action.payload,
        id: Math.random().toString(36).substr(2, 9), 
      };
      return {
        ...state,
        advertisements: [...state.advertisements, newAdvertisement],
      };
    case DELETE_ADVERTISEMENT:
      return {
        ...state,
        advertisements: state.advertisements.filter(advertisement => advertisement.id !== action.payload),
      };
    case UPDATE_ADVERTISEMENT:
      return {
        ...state,
        advertisements: state.advertisements.map(advertisement => {
          if (advertisement.id === action.payload.id) {
            return { ...advertisement, ...action.payload };
          }
          return advertisement;
        }),
      };
    default:
      return state;
  }
};

export default advertisementReducer;
