import { combineReducers } from 'redux';
import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, FILTER_BY_MUSEUM } from './actions/types';

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_PAINTING:
      return state.filter(painting => painting.id !== action.id);
    case FILTER_BY_MUSEUM:
      return state.filter(painting => painting.museum.name === 'National Gallery of Art, Washington D.C.');
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case DELETE_PAINTING:
      return 1;
    case FETCH_PAINTINGS:
      const index = Math.floor(Math.random() * action.payload.length)
      return action.payload[index].id;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
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
