import { useState, useEffect } from "react";

import { auth } from "../firebase/firebaseConfig.js";

import Modal from "./Modal.js";
import ModalVote from "./ModalVote.js";
import VoteButton from "./VoteButton.js";

// import { addDocument, getDocuments } from "../firebase/firestore.js"; 

export default function Product({ image, textTitle, textDiscribe, textAbout1, textAbout2, textAbout3, productId}) {

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [focusComment, setFocusComment] = useState(false);    
    const [showModal, setShowModal] = useState(false);
    const [numberOfComments, setNumberOfComments] = useState(0);

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
                            <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 11L13.4059 3.40589C12.887 2.88703 12.6276 2.6276 12.3249 2.44208C12.0564 2.27759 11.7638 2.15638 11.4577 2.08289C11.1124 2 10.7455 2 10.0118 2L6 2M3 8.7L3 10.6745C3 11.1637 3 11.4083 3.05526 11.6385C3.10425 11.8425 3.18506 12.0376 3.29472 12.2166C3.4184 12.4184 3.59136 12.5914 3.93726 12.9373L11.7373 20.7373C12.5293 21.5293 12.9253 21.9253 13.382 22.0737C13.7837 22.2042 14.2163 22.2042 14.618 22.0737C15.0747 21.9253 15.4707 21.5293 16.2627 20.7373L18.7373 18.2627C19.5293 17.4707 19.9253 17.0747 20.0737 16.618C20.2042 16.2163 20.2042 15.7837 20.0737 15.382C19.9253 14.9253 19.5293 14.5293 18.7373 13.7373L11.4373 6.43726C11.0914 6.09136 10.9184 5.9184 10.7166 5.79472C10.5376 5.68506 10.3425 5.60425 10.1385 5.55526C9.90829 5.5 9.6637 5.5 9.17452 5.5H6.2C5.0799 5.5 4.51984 5.5 4.09202 5.71799C3.7157 5.90973 3.40973 6.21569 3.21799 6.59202C3 7.01984 3 7.57989 3 8.7Z" stroke="#606b7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
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
                                <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>{numberOfComments}</span>
                            </div>
                        </button>
                    </div>
                    <VoteButton productId={productId} initialVotes={0} styleClass="vote-button"  />
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
                setNumberOfComments={setNumberOfComments}
                />
            )}
            {showModal && <ModalVote closeModalVote={closeModalVote} />}
        </div>
    );
}
