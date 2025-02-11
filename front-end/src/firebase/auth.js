import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const signUp = async(email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = async(email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const logOut = async () => {
    return signOut(auth);
}

export {signIn, signUp, logOut};