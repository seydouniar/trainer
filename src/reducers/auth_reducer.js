import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    ERROR_CHANGED,
    NAME_CHANGED,
    TAILLE_CHANGED,
    POIDS_CHANGED,
    IMAGE_CHANGED,
    FETCH_USER_SUCCESS,
    FETCH_PROG_FAILED,
    AGE_CHANGED
} from '../actions/types';
const INITIAL_STATE = {
  email:'',
  password:'',
  user:null,
  error:null
}
export default (state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state,user:action.payload,error:null};
    case LOGIN_FAILED:
      return {...state,user:null,error:action.payload,email:"",password:""};
    case EMAIL_CHANGED:
      return {...state,email:action.payload};
    case PASSWORD_CHANGED:
      return {...state,password:action.payload};
    case ERROR_CHANGED:
        return {...state,error:action.payload};
    case NAME_CHANGED:
        return {...state,user:{...state.user,name:action.payload}}
    case TAILLE_CHANGED:
       return {...state,user:{...state.user,taille:action.payload}}
    case POIDS_CHANGED:
        return {...state,user:{...state.user,poids:action.payload}}
    case IMAGE_CHANGED:
        return {...state,user:{...state.user,image:action.payload}}
    case AGE_CHANGED:
        return {...state,user:{...state.user,age:action.payload}}
    case FETCH_USER_SUCCESS:
        return {...state,user:Object.assign(state.user,action.payload) }
    case FETCH_PROG_FAILED:
        return {...state, error:action.payload} 
    default:
      return state;
  }
}