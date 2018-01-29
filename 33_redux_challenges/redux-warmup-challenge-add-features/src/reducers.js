import { combineReducers } from 'redux';
import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING,
  SELECT_MUSEUM
} from './actions/types';

const paintingsReducer = (state = [], action) => {
  console.log('in the Paintingsreducer', action);
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_PAINTING:
      return state.filter(painting => painting.id !== action.id);
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  console.log('in the ActivePaintingID reducer', action);
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case FETCH_PAINTINGS:
      return action.payload[0].id;
    case DELETE_PAINTING:
      console.log('action in DELETE', action);
      return action.id + 1;
    default:
      return state;
  }
};

const visiblePaintingsReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case SELECT_MUSEUM:
      return action.museumName;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  visiblePaintings: visiblePaintingsReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
