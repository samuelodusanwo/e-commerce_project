import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore();

firestore.collection('user').doc('7vfwviMN8DIcM3JgRmaa').collection('cartItem').doc('4B9ToZLdxB9x7VdOyjWO');
firestore.doc('/user/7vfwviMN8DIcM3JgRmaa/cartItem/4B9ToZLdxB9x7VdOyjWO');
firestore.doc('/user/7vfwviMN8DIcM3JgRmaa/cartItem');
