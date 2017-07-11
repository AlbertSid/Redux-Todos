import { combineReducers } from 'redux';


import byId, * as fromById from './byid'
import createList, * as fromList from './createList'

// console.log(fromById)
// console.log(fromList)

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const Todos = combineReducers({
  byId,
  listByFilter
});

export default Todos

export const getVisibleTodos = (state, filter) => {
  const ids =fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId,id));
};

export const getIsFetching =  (state, filter) => fromList.getIsFetching(state.listByFilter[filter]);


export const getErrorMessage = (state, filter) => fromList.getErrorMessage(state.listByFilter[filter]);

