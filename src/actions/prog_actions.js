import {getDatabase,serverTimestamp,set,ref,push,onValue} from 'firebase/database';
import {auth} from '../firebase';
import {   FETCH_EXERCICES_FAILED, FETCH_EXERCICES_SUCCESS, FETCH_PROG_FAILED, FETCH_PROG_SUCCESS, FETCH_SEANCE_FAILED, FETCH_SEANCE_SUCCESS } from './types';


export const createProgramme = ({name},callback)=>(dispatch)=>{
    const db=getDatabase();
    const userId = auth.currentUser.uid;
    const progListRef = ref(db,'users/'+userId+'/programmes');
    const newProgRef = push(progListRef);
    set(newProgRef,{
        name,
        createAt: serverTimestamp()
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
            //get exercices 
            programmes.push(
                {
                ...childSnapshot.val(),
                id:childSnapshot.key, 
            });
        });
        dispatch({type:FETCH_PROG_SUCCESS,payload:programmes})
    },
    (error)=>{
        dispatch({type:FETCH_PROG_FAILED,payload:error})
    })
}

export const deleteProgramme = (prog_id)=>async(dispatch)=>{
    const db=getDatabase();
    const userId = auth.currentUser.uid;
    const rmRef = ref(db,'users/'+userId+'/programmes/'+prog_id);
    set(rmRef,null).then(()=>{
       console.log("suppression de "+prog_id);
       
    }).catch((error)=>{
       console.log(error);
       
    });
}

//Ajouter de la séance
export const  ajouterSeance = (seance,callback)=>async(dispatch)=>{
    
    
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const newRef = ref(db,'users/'+userId+'/seances/'+seance.prog_id);
    const seancesRef = push(newRef)
    set(seancesRef,{name:seance.name}).then(()=>callback()
    ).catch((err)=>console.log(err.message))
}

export const getSeances = (prog)=>async(dispatch)=>{
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const newRef = ref(db,'users/'+userId+'/seances/'+prog.id);
    onValue(newRef,(snapshot)=>{
        let seances = [];
        snapshot.forEach((childSnapshot)=>{
            seances.push({
                ...childSnapshot.val(),
                id:childSnapshot.key
            })
        });
        dispatch({type:FETCH_SEANCE_SUCCESS,payload:{seances,id:prog.id}})
    },(error)=>{dispatch({type:FETCH_SEANCE_FAILED, payload:error})})
}

export const addExercicieToSeance = (exercice)=>async(dispatch) =>{
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const newRef = ref(db,'users/'+userId+'/exercices/'+exercice.seance_id);
    const exoRef = push(newRef);
    set(exoRef,{name:exercice.name,categorie:exercice.cat})

}

export const getExercicesSeance = (prog_id,id)=>async(dispatch)=>{
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const exoRef = ref(db,'users/'+userId+'/exercices/'+id);
    
 
    
    onValue(exoRef,(snapshot)=>{
        
        let exercices =[]
        snapshot.forEach(snapshotChild=>{
            exercices.push({
                ...snapshotChild.val(),id:snapshotChild.key,
            })
        });
        dispatch({type:FETCH_EXERCICES_SUCCESS,payload:{exercices,prog_id,seance_id:id}})
    }, (error)=>{
        dispatch({type:FETCH_EXERCICES_FAILED,payload:error})
    }
)


}