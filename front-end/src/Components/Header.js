import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { auth } from '../firebase/firebaseConfig'; // Assurez-vous d'importer Firebase auth
import { signOut } from 'firebase/auth'; // Importer la fonction pour déconnecter un utilisateur

import logo from '../assets/image/PHLogoDark.png'; 
import loupe from '../assets/icon/search.png';
import mailIcon from '../assets/icon/mail-open-alt-svgrepo-com.svg';
import arrowRight from '../assets/icon/arrow-narrow-circle-broken-down-svgrepo-com.svg';
import MainNavigation from './MainNavigation';


export default function Header(){      

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Vérifier si l'utilisateur est connecté
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        // Nettoyage de l'abonnement à l'état de l'utilisateur lors du démontage du composant
        return () => unsubscribe();
    }, []);

    // Fonction de déconnexion
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false); // Mettre à jour l'état de la connexion
            navigate('/'); // Rediriger vers la page d'accueil après la déconnexion
        } catch (error) {
            console.error("Erreur lors de la déconnexion: ", error);
        }
    };

    return (

        <div>
            <div className="navBar">
                <div className='headLeft'>
                    <img src={logo} alt="Logo"className='logo' />
                    <div className="search">
                        <img src={loupe} alt="Loupe" className='icon'/>
                        <input type='text' placeholder='Search ( ctrl + k )'/>
                    </div>
                </div>

                <MainNavigation/>

                <div className="headRight">
                    <div className="subscribe">
                        <img src={mailIcon} alt='mailIcon'/>
                        <a href="http://">Subscribe</a>
                    </div>
                    <div className="auth">
                        <img src={arrowRight} alt='arrowRight' />
                        {isLoggedIn ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link to="/connect">Sign in</Link>
                        )}
                    </div>
                </div>
            </div>
        </ div>
    );
}