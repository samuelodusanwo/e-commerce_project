import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const app = {
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

initializeApp(app);
export const firestore = getFirestore();
export const auth = getAuth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return null;

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);


    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log("User successfully created!")
        } catch (error) {
            console.log("error created user:", error.message);
        }
    }

}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);