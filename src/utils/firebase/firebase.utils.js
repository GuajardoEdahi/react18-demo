import {initializeApp} from 'firebase/app'
import {
    getAuth,  
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

import {

  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgKQKFdDRc48ihO31AvGRSi1_S66OFDR8",
    authDomain: "crwn-clothing-db-1cc53.firebaseapp.com",
    projectId: "crwn-clothing-db-1cc53",
    storageBucket: "crwn-clothing-db-1cc53.appspot.com",
    messagingSenderId: "713463219804",
    appId: "1:713463219804:web:bed83c8ec4171a34164899"
  };
  
  // Initialize Firebase
  const fireaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: "select_account"
  })

 export const auth = getAuth()
 export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider)
 export const db = getFirestore()

 export const createUserDocumentFromAuth = async(userAuth)=>{
  const userDocRef = doc(db,'users', userAuth.uid)

  
  const userSnapshot = await getDoc(userDocRef)

  //if user data does not exist

  if(!userSnapshot.exists()){
    const {displayName, email}=userAuth

    const createdAt = new Date()
     //Create user
    try{
      await setDoc(
          userDocRef,
          {
            displayName,
            email,
            createdAt
          }
        )
    }catch(error){
      console.log('ERROR WHILE CREATING USER:',error.message)
    }
  }
    //If user data exists
     //return userDocRef
    return userDocRef

 }