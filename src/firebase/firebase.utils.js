import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {            //firebase configuration file
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

// initialize app
const app = initializeApp(firebaseConfig);

// save infomation on db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return null;     // if userAuth is empty

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log("Successfully created user")
        } catch(error) {
            console.log("error creating user!", error.message);
        }
    }

    return userRef;
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {            //firebase configuration file
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

// initialize app
const app = initializeApp(firebaseConfig);

// save infomation on db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return null;     // if userAuth is empty

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log("Successfully created user")
        } catch(error) {
            console.log("error creating user!", error.message);
        }
    }

    return userRef;
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {            //firebase configuration file
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

// initialize app
const app = initializeApp(firebaseConfig);

// save infomation on db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return null;     // if userAuth is empty

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log("Successfully created user")
        } catch(error) {
            console.log("error creating user!", error.message);
        }
    }

    return userRef;
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {            //firebase configuration file
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

// initialize app
const app = initializeApp(firebaseConfig);

// save infomation on db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return null;     // if userAuth is empty

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log("Successfully created user")
        } catch(error) {
            console.log("error creating user!", error.message);
        }
    }

    return userRef;
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {            //firebase configuration file
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

// initialize app
const app = initializeApp(firebaseConfig);

// save infomation on db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return null;     // if userAuth is empty

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log("Successfully created user")
        } catch(error) {
            console.log("error creating user!", error.message);
        }
    }

    return userRef;
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {            //firebase configuration file
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

// initialize app
const app = initializeApp(firebaseConfig);

// save infomation on db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return null;     // if userAuth is empty

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log("Successfully created user")
        } catch(error) {
            console.log("error creating user!", error.message);
        }
    }

    return userRef;
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);