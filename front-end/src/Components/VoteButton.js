import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { addDocument, getDocuments } from '../firebase/firestore';
import ModalVote from './ModalVote';

export default function VoteButton({ productId, initialVotes, styleClass }) {
    const [numberOfVotes, setNumberOfVotes] = useState(initialVotes || 0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [hasVoted, setHasVoted] = useState(false); // Nouvel état pour savoir si l'utilisateur a déjà voté

    // Vérifier si l'utilisateur est connecté
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    // Vérifier si l'utilisateur a déjà voté
    useEffect(() => {
        const checkIfUserHasVoted = async () => {
            if (!isLoggedIn) return;

            try {
                const allVotes = await getDocuments('votes');
                const userId = auth.currentUser.uid;
                const userVote = allVotes.find(vote => vote.productId === productId && vote.userId === userId);

                if (userVote) {
                    setHasVoted(true); // L'utilisateur a déjà voté
                }
            } catch (err) {
                console.error('Error checking votes: ', err);
            }
        };

        checkIfUserHasVoted();
    }, [isLoggedIn, productId]);

    // Récupérer le nombre de votes au démarrage
    useEffect(() => {
        const loadVotes = async () => {
            try {
                const allVotes = await getDocuments('votes');
                const filteredVotes = allVotes.filter(vote => vote.productId === productId);
                setNumberOfVotes(filteredVotes.length);
            } catch (err) {
                console.error('Error loading votes: ', err);
            }
        };

        loadVotes();
    }, [productId]);

    // Fonction pour gérer l'incrémentation des votes
    const handleVoteClick = async (e) => {
        e.stopPropagation();

        // Si l'utilisateur n'est pas connecté, on montre le modal
        if (!isLoggedIn) {
            setShowModal(true);
            return;
        }

        // Si l'utilisateur a déjà voté, on ne fait rien
        if (hasVoted) return;

        try {
            const userId = auth.currentUser.uid;
            const voteData = {
                productId,
                userId,
                timestamp: new Date(),
            };

            // Ajouter un vote
            await addDocument('votes', voteData);

            // Incrémenter le nombre de votes
            setNumberOfVotes(prev => prev + 1);
            setHasVoted(true); 
        } catch (err) {
            console.error('Erreur lors de l\'enregistrement du vote:', err);
        }
    };

    const closeModalVote = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button type="button" onClick={handleVoteClick}  className={`${styleClass} ${hasVoted ? 'voted' : ''}`}>
                <div className="button-content">
                    {/* Changer la couleur du SVG si l'utilisateur a voté */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="12.5"
                        viewBox="0 0 320 512"
                        style={{
                            fill: hasVoted ? '#ff6f61' : '#ffffff', // Change de couleur (rouge si voté, blanc sinon)
                        }}
                    >
                        <path
                            d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                        />
                    </svg>
                    <span>{numberOfVotes}</span>
                </div>
            </button>

            {showModal && <ModalVote closeModalVote={closeModalVote} />}
        </div>
    );
}
