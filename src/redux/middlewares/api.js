import { API } from '../actions/types';
import { httpRequestAction } from '../actions/api';

const api = ({dispatch, getState}) => next => {
    return action => {
        if (action.type !== API) {
            return next(action);
        }
        httpRequestAction(action, dispatch);
    };
};

export default api;