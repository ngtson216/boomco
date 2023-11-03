import { fromJS } from 'immutable';
import TYPE from './type';
import {
    isCallingApi,
    isSuccessfulApiCall,
    isFailedApiCall,
} from '../../../helpers/actionDedicate';
const { GET_ALL_TODO, ADD_TODO, DELETE_TODO } = TYPE;

const initialState = fromJS({
    listTodo: [],
    success: false,
})

const respPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TODO: {
            if (isCallingApi(action)) {
                return state.merge(
                    fromJS({
                        listTodo: [],
                        success: false,
                    })
                );
            };
            if (isSuccessfulApiCall(action)) {
                return state.merge(
                    fromJS({
                        listTodo: action.payload.data,
                    })
                );
            };
            if (isFailedApiCall(action)) {
                return state.merge(
                    fromJS({

                    })
                );
            };
        }
        // eslint-disable-next-line no-fallthrough
        case ADD_TODO: {
            if (isCallingApi(action)) {
                return state.merge(
                    fromJS({
                        success: false,
                    })
                );
            };
            if (isSuccessfulApiCall(action)) {
                return state.merge(
                    fromJS({
                        success: true,
                    })
                );
            };
            if (isFailedApiCall(action)) {
                return state.merge(
                    fromJS({
                        success: false,
                    })
                );
            };
        }// eslint-disable-next-line no-fallthrough
        case DELETE_TODO: {
            if (isCallingApi(action)) {
                return state.merge(
                    fromJS({
                        success: false,
                    })
                );
            };
            if (isSuccessfulApiCall(action)) {
                return state.merge(
                    fromJS({
                        success: true,
                    })
                );
            };
            if (isFailedApiCall(action)) {
                return state.merge(
                    fromJS({
                        success: false,
                    })
                );
            };
        }
        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    };
};

export default respPageReducer;