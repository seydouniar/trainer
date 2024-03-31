import {
    DELETE_PROG_FAILED,
    DELETE_PROG_SUCCESS,
    FETCH_PROG_FAILED,
    FETCH_PROG_SUCCESS,
} from "../actions/types"

const INITIAL_STATE ={};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_PROG_SUCCESS:
            return {...state,programmes:action.payload};
        case FETCH_PROG_FAILED:
            return {...state,error:action.payload};
        case DELETE_PROG_FAILED:
            return{...state,error:action.payload}
        default:
            return state;
    }
}
