/* eslint-disable no-unused-vars */
import cat from "../assets/image/product-hunt.webp"
import googleLogo from "../assets/icon/google-color-svgrepo-com.svg";

import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function ModalVote ({closeModalVote}){


    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleGoogleSignIn = async (e) => {
        
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("User logged in with Google:", user);
            closeModalVote(); 
            navigate("/"); 
        } catch (error) {
            setError(error.message);
            console.error("Error while connecting with Google:", error.message);
        }
    };

    return (
        <div className="modalVote" onClick={closeModalVote}>
            <button className="close-button" onClick={closeModalVote}>
            X
            </button>
            <div className="modalVote-content" onClick={(e) => e.stopPropagation()}>
                <img src={cat} alt="cat" style={{width: "30%"}} />
                <h2>Sign up to vote</h2>
                <p className="parag">Join our community of friendly folks discovering and sharing the latest products in tech.</p>
                <div className="auth-google">
                        <button onClick={handleGoogleSignIn} className="google-btn">
                            <img src={googleLogo} alt="googleLogo" />
                            Sign in whith Google
                        </button>
                    </div>
                <div className="social">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="0 0 512 512"><path fill="#30384a" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="0 0 512 512"><path fill="#1877f2" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="0 0 384 512"><path fill="#000000" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="0 0 448 512"><path fill="#0072b1" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </div>
                <p className="advice">We'll never post to any of your accounts without your permission.</p>
            </div>
        </div>
    );
}