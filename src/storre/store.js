import { createStore } from 'redux';
import rootReducer from '../reducers/advertisementReducer'; 

const store = createStore(rootReducer);

export default store;
