import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfKuJspd2FQ86-gl8NWN43YKWMl2pQGZ8",
  authDomain: "fir-sample-cafd6.firebaseapp.com",
  projectId: "fir-sample-cafd6",
  storageBucket: "fir-sample-cafd6.appspot.com",
  messagingSenderId: "412249241022",
  appId: "1:412249241022:web:b3b71276db82565ba7f5ef"
};

firebase.initializeApp(firebaseConfig);