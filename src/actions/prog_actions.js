import {getDatabase,set,ref,push,onValue,update} from 'firebase/database';
import {auth} from '../firebase';
import { DELETE_PROG_FAILED, DELETE_PROG_SUCCESS, FETCH_PROG_FAILED, FETCH_PROG_SUCCESS } from './types';
import { ca } from 'date-fns/locale';

export const createProgramme = ({name,days},callback)=>(dispatch)=>{
    const db=getDatabase();
    const userId = auth.currentUser.uid;
    const progListRef = ref(db,'users/'+userId+'/programmes');
    const newProgRef = push(progListRef);
    set(newProgRef,{
        name:name,
        days:days
    }).then(()=>{callback()})
    .catch((e)=>console.log(e));
}

//Get all programme
export const getProgrammes = ()=>async(dispatch)=>{
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const refdb = ref(db,'users/'+userId+'/programmes');
    await onValue(refdb,(snapshot)=>{
        let programmes=[];
        snapshot.forEach((childSnapshot)=>{
            programmes.push({...childSnapshot.val(),id:childSnapshot.key});
        });
        dispatch({type:FETCH_PROG_SUCCESS,payload:programmes})
        console.log(programmes);
    },
    (error)=>{
        dispatch({type:FETCH_PROG_FAILED,payload:error})
        console.log(error);
    })
}

export const deleteProgramme = (prog_id)=>async(dispatch)=>{
    const db=getDatabase();
    const userId = auth.currentUser.uid;
    const rmRef = ref(db,'users/'+userId+'/programmes/'+prog_id);
    set(rmRef,null).then(()=>{
        dispatch({type:DELETE_PROG_SUCCESS,payload:prog_id});
    }).catch((error)=>{
        dispatch({type:DELETE_PROG_FAILED,payload:error})
    });
}

export const addExerciceToProgramme = (exercice,callback)=>async(dispatch)=>{
    console.log(exercice);
    
    const db=getDatabase();
    const userId = auth.currentUser.uid;
    const addRef = ref(db,'users/'+userId+'/programmes/'+exercice.pro_id+'/exercices');
    const exoRef = push(addRef);
    set(exoRef,{
        cat:exercice.cat,
        id:exercice.id,
        name : exercice.name,
        repetition: exercice.repetition,
        serie: exercice.serie,
        poids: exercice.poids
    }).then(()=>callback()).catch((e)=>console.log(e))
}