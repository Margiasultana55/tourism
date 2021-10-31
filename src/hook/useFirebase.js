import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoole = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);

            })
            .catch(error => {
                setError(error.message)
            })
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePass = e => {
        setPassword(e.target.value);
    }

    const signInUsingEmail = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be 6 character')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');


            })
            .catch(error => {
                setError(error.message)
            })
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');


            })
            .catch(error => {
                setError(error.message)
            })
    }


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user);
                setUser(user);

            }
        })
    }, [])
    return {
        user,
        error,
        email,
        password,
        isLogin,
        signInUsingGoole,
        handleEmail,
        handlePass,
        signInUsingEmail,

        toggleLogin,
        logOut
    }

}
export default useFirebase;