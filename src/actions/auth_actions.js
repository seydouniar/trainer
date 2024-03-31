import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    ERROR_CHANGED
} from './types';

import {auth} from '../firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

export const emailChanged = (text)=>(dispatch)=>{
    dispatch({type:EMAIL_CHANGED,payload:text})
}

export const passwordChanged = (text)=>(dispatch)=>{
    dispatch({type:PASSWORD_CHANGED,payload:text})
}

export const errorChanged=(text)=>(dispatch)=>{
    dispatch({type:ERROR_CHANGED,payload:text})
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

export const disconnect=()=>async(dispatch)=>{
    signOut(auth).then(()=>{
        dispatch({type:LOGIN_FAILED});}
    ).catch((e)=>{
        dispatch({type:LOGIN_FAILED, payload:getErrorMessage(e)});
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