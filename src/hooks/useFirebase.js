import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  function signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      setError("");
    });
  }
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user =result.user;
        console.log(user);
        setError('');
      })
      .catch((error) => {
             setError(error.message);
      });
  };
  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
       const user =result.user;
       console.log(user);
        updateProfile(auth,user, {
          displayName: {user}
        }).then(() => {
          // Profile updated!
          // ...
        })
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return {
    user,
    signInWithGoogle,
    logOut,
    handleUserRegister,
    handleUserLogin, error
  };
};

export default useFirebase;
