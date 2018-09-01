// action types
import {
  API,
  ADD_ITEM,
  TOGGLE_ITEM_STATUS,
  SITE_FETCH_ITEMS,
  SET_CHOSEN_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  IS_LOADING,
  HAS_ERROR
} from './types';
// api
import {api} from './api';
// config
import { config } from '../../common/config';

export const siteFetchItems = () => (api({
  type: API,
  payload: {
    url: {
      base: config.API_URL,
      endpoint: 'items/'
    },
    method: 'get',
    params : {},
    loader:  (bool) => itemsIsLoading(bool),
    success: (data) => siteFetchDataSuccess(data),
    failure: (data) => itemsHasError(data)
  }
}));

export const fetchChosenItem = (id) => (api({
  type: API,
  payload: {
    url: {
      base: config.API_URL,
      endpoint: 'items/' + id
    },
    method: 'get',
    data : {},
    loader:  (bool) => itemsIsLoading(bool),
    success: (data) => setChosenItem(data),
    failure: (data) => itemsHasError(data)
  }
}));

export const addNewItem = (item) => (api({
  type: API,
  payload: {
    url: {
      base: config.API_URL,
      endpoint: 'items/'
    },
    method: 'post',
    data : {name: item.name, amount: item.amount},
    loader:  (bool) => itemsIsLoading(bool),
    success: (data) => addItem(data),
    failure: (data) => itemsHasError(data)
  }
}));

export const toggleItemAsComplete = (item) => (api({
  type: API,
  payload: {
    url: {
      base: config.API_URL,
      endpoint: 'items/' + item._id
    },
    method: 'put',
    data : {completed: item.completed,name: item.name, amount: item.amount},
    loader:  (bool) => itemsIsLoading(bool),
    success: (data) => toggleItemStatus(data),
    failure: (data) => itemsHasError(data)
  }
}));

export const onDeleteItem = (item) => (api({
  type: API,
  payload: {
    url: {
      base: config.API_URL,
      endpoint: 'items/' + item._id
    },
    method: 'delete',
    data : {},
    loader:  (bool) => itemsIsLoading(bool),
    success: (data) => deleteItem(data),
    failure: (data) => itemsHasError(data)
  }
}));

export const onUpdateItem = (item, data) => (api({
  type: API,
  payload: {
    url: {
      base: config.API_URL,
      endpoint: 'items/' + item._id
    },
    method: 'put',
    data : {name: data.name, amount: data.amount},
    loader:  (bool) => itemsIsLoading(bool),
    success: (data) => updateItem(data),
    failure: (data) => itemsHasError(data)
  }
}));


export function addItem(data){
  return {
    type: ADD_ITEM,
    payload: data
  };
}

export function toggleItemStatus(data){
  return {
    type: TOGGLE_ITEM_STATUS,
    payload: data
  };
}

export function setChosenItem(data){
  return {
    type: SET_CHOSEN_ITEM,
    payload: data
  };
}

export function deleteItem(data){
  return {
    type: DELETE_ITEM,
    payload: data
  };
}

export function updateItem(data){
  return {
    type: UPDATE_ITEM,
    payload: data
  };
}

export function siteFetchDataSuccess(data){
  return {
    type: SITE_FETCH_ITEMS,
    payload: data
  };
}

export function itemsIsLoading(bool){
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function itemsHasError(bool){
  return {
    type: HAS_ERROR,
    hasError: bool
  };
}
