import { GoogleLogin } from '@react-oauth/google';


const GoogleSignIn = () => {
    const responseGoogle = (response) => {
        console.log(response);
        // Ici, vous pouvez envoyer le token reçu à votre backend pour valider et connecter l'utilisateur.
    };

    return (
        <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => console.log('Connexion échouée')}
        />
    );
};

export default GoogleSignIn;
