import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, FILTER_BY_MUSEUM } from './types';
import artworks from '../data/artworks';

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(id) {
  console.log("in deletePainting action creator")
  return { type: DELETE_PAINTING, id };
}

export function filterByMuseum() {
  console.log("in filter by museum action creator")
  return { type: FILTER_BY_MUSEUM};
}
