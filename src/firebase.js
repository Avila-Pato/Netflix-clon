
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAxW2OXTtgfW90cKKfPo2zRbMYuV1MlaSY",
  authDomain: "netflix-clone-4e843.firebaseapp.com",
  projectId: "netflix-clone-4e843",
  storageBucket: "netflix-clone-4e843.appspot.com",
  messagingSenderId: "398242802823",
  appId: "1:398242802823:web:c29063f9c88ba34fb65c22"
};


// Inicializa la aplicación Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firebase Auth para manejar la autenticación
const auth = getAuth(app);

// Obtén la instancia de Firestore para interactuar con la base de datos
const db = getFirestore(app);


const translateFirebaseError = (errorCode) => {
    const errorMessages = {
      "auth/email-already-in-use": "El correo electrónico ya está en uso.",
      "auth/invalid-email": "El correo electrónico no es válido.",
      "auth/operation-not-allowed": "La operación no está permitida.",
      "auth/weak-password": "La contraseña es demasiado débil.",
      "auth/user-disabled": "El usuario está deshabilitado.",
      "auth/user-not-found": "El usuario no fue encontrado.",
      "auth/wrong-password": "La contraseña es incorrecta.",
      // Puedes añadir más errores según lo necesites
    };
  
    return errorMessages[errorCode] || "Ocurrió un error desconocido.";
  };

// Función para registrar un nuevo usuario

const signup = async(name, email, password ) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,
             email, password);
             const user = res.user;
             await addDoc(collection(db, "users"), {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
             });
    } catch (error) {
        console.log(error.message);
        toast.error(translateFirebaseError(error.code));
        // toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const login = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error.message);
        toast.error(translateFirebaseError(error.code));
        // toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const logout = () => {
    auth.signOut();
}

export {
    auth,
    db,
    signup,
    login,
    logout,
}