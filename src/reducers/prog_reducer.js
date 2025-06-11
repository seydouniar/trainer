import {
    DELETE_PROG_FAILED,
    FETCH_EXERCICES_FAILED,
    FETCH_EXERCICES_SUCCESS,
    FETCH_PROG_FAILED,
    FETCH_PROG_SUCCESS,
    FETCH_SEANCE_FAILED,
    FETCH_SEANCE_SUCCESS,
} from "../actions/types"

const INITIAL_STATE ={};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_PROG_SUCCESS:
            return {...state,programmes:action.payload};
            
        case FETCH_PROG_FAILED:
            return {...state,error:action.payload};

        case DELETE_PROG_FAILED:
            return{...state,error:action.payload};

        case FETCH_SEANCE_SUCCESS:
            const updt_prog = state.programmes.map(it=>{
                if(it.id===action.payload.id){
                    it.seances = action.payload.seances;
                    return it;
                }else{
                    return it
                }
            });
            

            return {...state,programmes:updt_prog};
        
        case FETCH_EXERCICES_SUCCESS:
            const new_prog = state.programmes.map(p=>{
                p.seances.map(s=>{
                    if(s.id===action.payload.seance_id&&p.id===action.payload.prog_id){
                        s.exercices = action.payload.exercices
                        return s
                    }else{
                        s.exercices=[];
                        return s
                    }
                })
                return p
            })
            
           
            return {...state,programmes:new_prog}
        case FETCH_EXERCICES_FAILED:
            return {...state, error:action.payload}
        
        case FETCH_SEANCE_FAILED:
            return {...state,error:action.payload}

        
        default:
            return state;
    }
}
