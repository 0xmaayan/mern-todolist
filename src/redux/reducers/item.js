import { INITIAL_STATE } from '../../common/app-const';

import {
  ADD_ITEM,
  SITE_FETCH_ITEMS,
  TOGGLE_ITEM_STATUS,
  DELETE_ITEM,
  IS_LOADING,
  HAS_ERROR,
} from '../actions/types';

export default function (state = INITIAL_STATE.list, action) {
  switch(action.type) {

    case ADD_ITEM:
      return {...state, items: state.items.concat(action.payload) };

    case SITE_FETCH_ITEMS:
      return {...state, items: action.payload};

    case TOGGLE_ITEM_STATUS:
      let newState = state.items.map(todo =>
        (todo._id === action.payload._id)
          ? {...todo, completed: todo.completed}
          : todo
        )
      return {...state, items: newState};

    case DELETE_ITEM:
      let removeIndex = state.items.map(function(item) { return item._id; }).indexOf(action.payload._id);
      state.items.splice(removeIndex, 1);
      return {...state, items: state.items};

    case IS_LOADING:
      return {...state, isLoading: action.isLoading};

    case HAS_ERROR:
      return {...state, hasError: action.hasError};

    default:
      return state;

  }

}
