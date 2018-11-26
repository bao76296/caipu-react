
import defaultState from './defaultState';
import { GET_MAIN_LIST , GET_MAIN_HOT_CLASSIFY_LIST } from './actionType';

const reducer = (state = defaultState, action) => {
    let new_state = Object.assign({}, state);

    switch(action.type) {

        case GET_MAIN_LIST + '_FULFILLED' : {
            new_state.list = action.payload.data.data;
            break;
        }
        case GET_MAIN_HOT_CLASSIFY_LIST + '_FULFILLED' : {
            new_state.hotClassifyList = action.payload.data.data
        }

    }
    return new_state 
}

export default reducer;