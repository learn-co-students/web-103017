import { createStore } from 'redux';
import rootReducer from './reducers';
import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const configureStore = () => {
  // right now there's not too much additional set up we are doing
  // but there could be in the future
  return createStore(rootReducer, applyMiddleware(reduxThunk));
  // return createStore(rootReducer);
};

export default configureStore;
