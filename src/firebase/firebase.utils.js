import { initializeApp } from 'firebase/app';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth)return;

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
    const createdAt = new Date()
    console.log(snapShot)

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);