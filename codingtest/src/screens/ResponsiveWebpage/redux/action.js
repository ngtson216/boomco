import { API_URLS } from '../../../config/api';
import { apiCall } from '../../../utils/apiCall';
import PREFIX from '../../../redux/frefix';
import TYPE from './type';
import {
    isDispatchCalling,
    isDispatchSuccess,
    isDispatchFailed,
} from '../../../helpers/dispatchDedicate';

const { RESPONSIVE } = PREFIX;

const {
    GET_ALL_TODO,
    ADD_TODO,
    DELETE_TODO
} = TYPE;

const getAllTodoType = { prefix: RESPONSIVE, type: GET_ALL_TODO };

export const getListTodo = (payload) => async (dispatch) => {
    const api = API_URLS.getAllTodo(payload);
    dispatch(isDispatchCalling(getAllTodoType));
    const { response, error } = await apiCall({ ...api });
    if (!error) {
        dispatch(isDispatchSuccess(getAllTodoType, response));
    }
    else dispatch(isDispatchFailed(getAllTodoType, error))
}

const addTodoType = { prefix: RESPONSIVE, type: ADD_TODO };

export const addTodo = (payload) => async (dispatch) => {
    const api = API_URLS.addTodo();
    dispatch(isDispatchCalling(addTodoType));
    const { response, error } = await apiCall({ ...api, payload });
    if (!error) {
        dispatch(isDispatchSuccess(addTodoType, response));
    }
    else dispatch(isDispatchFailed(addTodoType, error))
}

const delTodoType = { prefix: RESPONSIVE, type: DELETE_TODO };

export const delTodo = (payload) => async (dispatch) => {
    const api = API_URLS.delTodo();
    dispatch(isDispatchCalling(delTodoType));
    const { response, error } = await apiCall({ ...api, payload });
    if (!error) {
        dispatch(isDispatchSuccess(delTodoType, response));
    }
    else dispatch(isDispatchFailed(delTodoType, error))
}
