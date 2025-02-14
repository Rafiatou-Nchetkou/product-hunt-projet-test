import { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig.js";
import { useSelector, useDispatch } from "react-redux";
import { loadCommentCount } from "../Redux/commentSlice.js";

// import { loadComments } from "../Redux/commentsActions";

import tagIcon from "../assets/icon/tag-03-svgrepo-com.svg";
import commentIcon from "../assets/icon/message-circle-svgrepo-com.svg";

import Modal from "./Modal.js";
import ModalVote from "./ModalVote.js";
import VoteButton from "./VoteButton.js";
 

export default function Product({ image, textTitle, textDiscribe, textAbout1, textAbout2, textAbout3, productId, id}) {

    const commentCount = useSelector(state => state.comments.comments[productId]?.commentCount);
    const dispatch = useDispatch();
    useEffect(() => {
        // Charger le commentCount depuis localStorage au démarrage
        dispatch(loadCommentCount(productId));
      }, [dispatch, productId]);


    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [focusComment, setFocusComment] = useState(false);    
    const [showModal, setShowModal] = useState(false);

    const [ isLoggedIn, setIsLoggedIn] = useState(false);
    // const [numberOfVotes, setNumberOfVotes] = useState(0); 


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

    
    const openModal = () => {
        setIsModalOpen(true); 
        setFocusComment(false);
    };

    const openCommentSection = (e) => {
        e.stopPropagation();
        setIsModalOpen(true);
        setFocusComment(true); 
      };

    const closeModal = () => {
        setIsModalOpen(false); 
    };
    
    const closeModalVote = () => {
        setShowModal(false); 
    };

    // Fonction pour ouvrir le modal de vote
    const openVoteModal = (e) => {
        e.stopPropagation(); // Stoppe la propagation pour ne pas déclencher le modal général
        setShowModal(true); // Ouvre le modal de vote
    };

    return (
        <div>
    
            <div key={productId} className="produit" onClick={openModal}>
                <div className="produit-left">
                    <div className="imageProduit">
                        {image && <img src={image} alt={textTitle} />}
                    </div>
                    <div className="descriptionProduit">
                        <div className="textTitle">
                            <a href="/">{textTitle}</a>
                        </div>
                        <div className="textDiscribe">
                            {textDiscribe}
                        </div>
                        <span className="textList">
                            <img src={tagIcon} alt="tagIcon" />
                            <ul>
                                <li>{textAbout1}</li>
                                <li>{textAbout2}</li>
                                <li>{textAbout3}</li>
                            </ul>
                        </span>
                    </div>
                </div>
                
                <div className="produit-right">
                    <div className="commentaire">
                        <button type="button" onClick={openCommentSection} className="vote-button">
                            <div className="button-content">
                                <img src={commentIcon} alt="tagIcon" />
                                <span> {commentCount !== undefined ? commentCount : 0}</span>
                            </div>
                        </button>
                    </div>
                    <VoteButton productId={productId} initialVotes={0} styleClass="vote-button"  onClick={(e) => e.stopPropagation()}/>
                </div>
            </div>

            {isModalOpen && (
                <Modal
                closeModal={closeModal} 
                image={image}
                textTitle={textTitle}
                textDiscribe={textDiscribe}
                textAbout1={textAbout1}
                textAbout2={textAbout2}
                textAbout3={textAbout3}
                focusComment={focusComment} 
                id={productId}
                />
            )}
            {showModal && <ModalVote closeModalVote={closeModalVote}/>}
        </div>
    );
}
