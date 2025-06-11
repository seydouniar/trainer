import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    ERROR_CHANGED,
    NAME_CHANGED,
    TAILLE_CHANGED,
    POIDS_CHANGED,
    AGE_CHANGED,
    FETCH_USER_SUCCESS,
    FETCH_PROG_FAILED
} from './types';

import {auth} from '../firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {getDatabase,set,ref,onValue} from 'firebase/database';

export const emailChanged = (text)=>(dispatch)=>{
    dispatch({type:EMAIL_CHANGED,payload:text})
}

export const passwordChanged = (text)=>(dispatch)=>{
    dispatch({type:PASSWORD_CHANGED,payload:text})
}

export const errorChanged=(text)=>(dispatch)=>{
    dispatch({type:ERROR_CHANGED,payload:text})
}

export const nameChanged = (text)=>(dispatch)=>{
  dispatch({type:NAME_CHANGED,payload:text});  
}

export const tailleChanged = (text)=>(dispatch)=>{
    dispatch({type:TAILLE_CHANGED,payload:text});  
}

export const poidsChanged = (text)=>(dispatch)=>{
    dispatch({type:POIDS_CHANGED,payload:text});  
}

export const ageChanged = (text)=>(dispatch)=>{
    dispatch({type:AGE_CHANGED,payload:text});  
}

export const imageChanged = (text)=>(dispatch)=>{
    dispatch({type:IMAGE_CHANGED,payload:text});  
}

export const signUpFirebase = ({email,password},callback,errFunction)=>async(dispatch)=>{
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({type:LOGIN_SUCCESS,payload:user});
            callback()
            // ...
        })
        .catch((error) => {
            dispatch({type:LOGIN_FAILED,payload:getErrorMessage(error)});
            errFunction(error);
        });
}

export const signInFirebase = ({email,password},callback,errFunction)=>async(dispatch)=>{
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({type:LOGIN_SUCCESS,payload:user});
            callback()
            // ...
        })
        .catch((error) => {
            dispatch({type:LOGIN_FAILED,payload:getErrorMessage(error)});
            errFunction(error);
        });
}

export const disconnect=(callback)=>async(dispatch)=>{
    signOut(auth).then(()=>{
        callback();
    }
    ).catch((e)=>{
       console.log(e);
       
    })
}

export const authStateChanged = (connected,disconnected)=>async(dispatch)=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch({type:LOGIN_SUCCESS,payload:user});
            connected();
        } else {
            dispatch({type:LOGIN_FAILED});
            disconnected();
        }
      });
}

export const setUserProfile = (user,callback)=>async(disptch)=>{
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const refdb = ref(db,'users/'+userId+'/profile');
    set(refdb,{
        name:user.name,
        taille:user.taille,
        poids:user.poids,
        age:user.age,
        image: 'url'
    }).then(()=>callback()).catch((err)=>console.log(err)
    )
}

export const getUserProfile = ()=>async(disptch)=>{
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const refdb = ref(db,'users/'+userId+'/profile');
    onValue(refdb,(snapshot)=>{
        const user = snapshot.val();
        disptch({type:FETCH_USER_SUCCESS,payload:user})
    }),(error)=>{disptch({type:FETCH_PROG_FAILED,payload:error.message})}
}

const getErrorMessage = (error) =>{
    switch(error.code){
        case "auth/email-already-exists":
            return "Cet adresse email existe déjà";
        case "auth/invalid-credential":
            return "Email ou mot de passe incorrectes";
        case "auth/internal-error":
            return "erreur serveur";
        case "auth/user-not-found":
            return "utilisateur non trouvable";
        default:
            return "erreur inconnu";
    }
}