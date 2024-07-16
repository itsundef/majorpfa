import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyBBK6P2FIbo7viDWme0vMLTvTcFEiT8KUI",
	authDomain: "pfa24-a947d.firebaseapp.com",
	projectId: "pfa24-a947d",
	storageBucket: "pfa24-a947d.appspot.com",
	messagingSenderId: "4650331096",
	appId: "1:4650331096:web:356f435839b4833182a0ad"
  };

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

export const signInWithGoogle = () => {
	signInWithPopup(auth, new GoogleAuthProvider())
		.then(res => console.log('Sign In with Google done!'))
		.catch(err => console.log(err)
	);
}

export const signOut = () => {
	auth.signOut()
		.then(res => console.log('Successfully Sign Out.'))
		.catch(err => console.log(err)
	);
}