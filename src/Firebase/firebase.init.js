
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.conig";

const initializeAuthentication =()=>{

    initializeApp(firebaseConfig);
}  



export default initializeAuthentication;