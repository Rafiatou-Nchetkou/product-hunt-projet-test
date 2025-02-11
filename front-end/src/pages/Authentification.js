import cat from "../assets/image/product-hunt.webp"
import googleLogo from "../assets/icon/google-color-svgrepo-com.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signIn, signUp  } from "../firebase/auth";

import { useDispatch } from 'react-redux';
import { setUser } from "../Redux/userSlice"; 

export default function Authentification (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [ isSignUpActive, setSignUpActive ] = useState(true);

    const dispatch = useDispatch();  // Hook Redux pour dispatcher l'utilisateur
    const navigate = useNavigate();

    const handleFormChange = (e) => {
        e.preventDefault();
        setSignUpActive(!isSignUpActive);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("All fields must be filled in!");
            return;
        }
        try {
            // Tentative de création d'un compte
            await signUp(email, password);
            setError(null); 
            alert("Your account has been successfully created! You can now log in.");
            navigate("/"); 
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already in use. Please choose another one.");
            } else {
                setError("An error has occurred : " + err.message); 
            }
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("All fields must be filled in!");
            return;
        }
        try {
            await signIn(email, password);
            setError(null); 
            navigate("/");
        } catch (err) {
            setError("Incorrect credentials. Please try again.");
        }
    };
    
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value); 
        if (error) {
            setError(null); 
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.stopPropagation();
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("User logged in with Google:", user);

             // Dispatch l'action pour stocker l'utilisateur dans Redux
            dispatch(setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
            }));

            // Optionnellement, stocker l'utilisateur dans localStorage pour persister la session
            localStorage.setItem('user', JSON.stringify(user));

            navigate("/"); 
        } catch (error) {
            setError(error.message);
            console.error("Error while connecting with Google:", error.message);
        }
    };

    return (
        <>
            <div className="auth-container">
               
            
                <form onSubmit={isSignUpActive ? handleSignUp : handleSignIn}>

                    <div className="image-cat"><img src={cat} alt="cat" /></div>
                    <h2>{isSignUpActive ? "Sign Up" : "Sign In"}</h2>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        onChange={handleInputChange(setEmail)}
                        placeholder="Enter your email"
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        id="password"
                        onChange={handleInputChange(setPassword)}
                        placeholder="Enter your password"
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}
                    
                   <div className="boutons">
                        <button type="submit" className="submit-btn">
                            {isSignUpActive ? "Sign Up" : "Sign In"}
                        </button>

                        <button onClick={handleFormChange} className="sign-btn">
                            {isSignUpActive ? "Already have an account? Sign In" : "Create an account"}
                        </button>
                    </div>

                    <div className="auth-google">
                        <button onClick={handleGoogleSignIn} className="google-btn">
                            <img src={googleLogo} alt="googleLogo" />
                            Sign in whith Google
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
