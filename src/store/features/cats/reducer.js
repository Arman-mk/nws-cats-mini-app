import {GET_RECORDS_REQUEST_STATE} from "../../initialState.js";
import {getAsyncActionName} from "../../helpers.js";
import {CATS, CATS_CATEGORIES} from "./actionTypes.js";

export const CAT_REDUCER = "cats";

const STATE = {
    cats:GET_RECORDS_REQUEST_STATE,
    cats_categories:GET_RECORDS_REQUEST_STATE,
};

const catReducer = (
    state= STATE,
    action
) => {
    const {type,payload} = action;

    console.info(
        `%c ACTION :: ${action.type} `,
        ' background: #136675; color:#fff',
        action
    );

    switch (type) {
        case getAsyncActionName(CATS).REQUEST:
            return {
                ...state,
                cats:{
                    ...state.cats,
                    loading: true,
                    success: false,
                    fail: false,
                }
            };
        case getAsyncActionName(CATS).SUCCESS:
            return {
                ...state,
                cats:{
                    ...state.cats,
                    loading: false,
                    success: true,
                    fail: false,
                    data:payload?.options?.withLoadMore ? [...state.cats.data, ...payload?.data] : payload?.data
                }
            };
        case getAsyncActionName(CATS).FAIL:
            return {
                ...state,
                cats:{
                    ...state.cats,
                    loading: false,
                    success: false,
                    fail: true,
                }
            };

        case getAsyncActionName(CATS_CATEGORIES).REQUEST:
            return {
                ...state,
                cats_categories:{
                    ...state.cats_categories,
                    loading: true,
                    success: false,
                    fail: false,
                }
            };
        case getAsyncActionName(CATS_CATEGORIES).SUCCESS:
            return {
                ...state,
                cats_categories:{
                    ...state.cats_categories,
                    loading: false,
                    success: true,
                    fail: false,
                    data:payload?.data || []
                }
            };
        case getAsyncActionName(CATS_CATEGORIES).FAIL:
            return {
                ...state,
                cats_categories:{
                    ...state.cats_categories,
                    loading: false,
                    success: false,
                    fail: true,
                }
            };

        default:
            return state;
    }
};

export default catReducer;