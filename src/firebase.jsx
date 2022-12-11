
  import { initializeApp } from "firebase/app";
  import {getAuth,GoogleAuthProvider,signInWithPopup,signOut} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3RcdN6FdImOJ-q5S_vuEYRTBc84m8OzE",
  authDomain: "clonenetflix-34aff.firebaseapp.com",
  projectId: "clonenetflix-34aff",
  storageBucket: "clonenetflix-34aff.appspot.com",
  messagingSenderId: "823134422878",
  appId: "1:823134422878:web:a9b2a61f4598ca8d5df1cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export const signInWithGoogle=()=>
{
signInWithPopup(auth,provider).then((result)=>
{
  console.log("Result is "+result);
const name=result.user.displayName;
const profilePic=result.user.photoURL;
localStorage.setItem("name",name);
localStorage.setItem("profilePic",profilePic);
}).catch((error)=>
{
  console.log(error);
});
}

export const signOutFromGoogle=()=>
{
signOut(auth).then((result)=>
{
  alert("Successfully logged out");
}).catch((e)=>
{
console.log(e);
});
}
