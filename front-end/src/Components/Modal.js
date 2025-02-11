import icone3 from "../assets/icon/chart-bar-svgrepo-com.svg";
import icone4 from "../assets/icon/team-3.svg";
import icone5 from "../assets/icon/at-sign-26-svgrepo-com.svg";

import img1 from "../assets/image/5ada07ce-5838-44af-a0ea-51a12b689f1b.png";
import img2 from "../assets/image/3c27d8ab-1aa2-42a5-af24-5adcfb295709.png";
import img3 from "../assets/image/53cb4d93-ee40-4938-8028-2b8d856a6429.png";

import './modal.css';

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase/firebaseConfig"; 
import {addDocument, getDocuments } from '../firebase/firestore';
import VoteButton from "./VoteButton";

export default function Modal ({ closeModal, id, image, textTitle, textDiscribe, textAbout1, textAbout2, textAbout3, focusComment, setNumberOfComments, productId }){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    const commentSectionRef = useRef(null);
    const textAreaRef = useRef(null); 

    // Faire défiler le modal jusqu'à la section des commentaires si focusComment est vrai
    useEffect(() => {
      if (focusComment && commentSectionRef.current) {
        console.log('Scroll to comment section');
        commentSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [focusComment]);

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

    // Fonction pour ajuster la hauteur de la textarea
    const adjustTextAreaHeight = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';  // Réinitialiser la hauteur
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;  // Ajuster la hauteur
        }
    };
    // Mettre à jour la hauteur de la textarea chaque fois que le commentaire change
    useEffect(() => {
        adjustTextAreaHeight();
    }, [newComment]);

     // Fonction pour soumettre un commentaire
     const handleCommentSubmit = async () => {
        if (newComment.trim()) {
          try {
            const user = auth.currentUser;
            const commentData = {
                productId: id, 
                text: newComment,
                userId: user ? user.uid : null, 
                email: user ? user.email : null, 
                timestamp: new Date(),
            };
            
            // Ajouter le commentaire à la collection "comments"
            await addDocument("comments", commentData);
            setNewComment(""); 
            loadComments();
          } catch (err) {
            console.error("Error loading comments: ", err);
          }
        }
      };
    
        // Fonction pour charger les commentaires du produit
        const loadComments = useCallback(async () => {
            try {
            const allComments = await getDocuments("comments");
            const filteredComments = allComments.filter(comment => comment.productId === id);
            setComments(filteredComments);
            setNumberOfComments(filteredComments.length);
            } catch (err) {
            console.error("Error loading comments: ", err);
            }
        }, [id, setNumberOfComments]); 
        
        // Charger le nombre de commentaires à l'initialisation
        useEffect(() => {
            loadComments();
        }, [loadComments]); 
      

    return (
        <>
            <div className="modal" onClick={closeModal}>
                <button className="close-button" onClick={closeModal}>
                    X
                </button>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    
                    <div className="modal-bloc1">
                        <div className="modal-bloc1-left">
                            <div className="rocket">
                                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 14.9998L9 11.9998M12 14.9998C13.3968 14.4685 14.7369 13.7985 16 12.9998M12 14.9998V19.9998C12 19.9998 15.03 19.4498 16 17.9998C17.08 16.3798 16 12.9998 16 12.9998M9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998M9 11.9998H4C4 11.9998 4.55 8.96976 6 7.99976C7.62 6.91976 11 7.99976 11 7.99976M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0044 5.97223 15.9878C5.43516 15.9712 4.91088 16.1535 4.5 16.4998Z" stroke="#414c5f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <p>This is a launch from Heron Data</p>
                        </div>
                        <div className="modal-bloc1-right">
                            <a href="/">See 9 previous launches</a>
                        </div>
                    </div>

                    <div className="modal-bloc2">
                        <div className="modal-bloc2-left">
                            <div className="logo">
                                <img src={image} alt={textTitle} style={{width: "64px"}} />
                            </div>
                            <div className="info">
                                <span style={{fontSize: "24px", fontWeight: "600"}}>{textTitle}</span> <br />
                                <span style={{fontSize: "18px"}}>{textDiscribe}</span>
                            </div>
                        </div>
                        <div className="modal-bloc2-right">
                            <button className="visit">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" stroke="#414c5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Visit</p>
                            </button>
                            {/* <button className="upvote">
                                <svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g data-name="Layer 2">
                                        <g data-name="arrow-up">
                                            <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/>
                                            <path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1zM8 14h7.9L12 9.18z"/>
                                        </g>
                                    </g>
                                </svg>
                                <p>Upvote 103</p>
                            </button> */}
                            <VoteButton productId={productId} initialVotes={0} styleClass="upvote"  />
                        </div>
                    </div>

                    <div className="modal-bloc3">
                        <p>Heron's AI lets you bulk upload, automatically classify and rename documents with your own custom naming template or schema.</p>
                        <p>Free</p>
                    </div>

                    <div className="modal-bloc4">
                        <div className="modal-bloc4-left">
                            <span>
                                <p>Launch tags:</p> 
                                <span className="modal-bloc4-left-textList">
                                    <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 11L13.4059 3.40589C12.887 2.88703 12.6276 2.6276 12.3249 2.44208C12.0564 2.27759 11.7638 2.15638 11.4577 2.08289C11.1124 2 10.7455 2 10.0118 2L6 2M3 8.7L3 10.6745C3 11.1637 3 11.4083 3.05526 11.6385C3.10425 11.8425 3.18506 12.0376 3.29472 12.2166C3.4184 12.4184 3.59136 12.5914 3.93726 12.9373L11.7373 20.7373C12.5293 21.5293 12.9253 21.9253 13.382 22.0737C13.7837 22.2042 14.2163 22.2042 14.618 22.0737C15.0747 21.9253 15.4707 21.5293 16.2627 20.7373L18.7373 18.2627C19.5293 17.4707 19.9253 17.0747 20.0737 16.618C20.2042 16.2163 20.2042 15.7837 20.0737 15.382C19.9253 14.9253 19.5293 14.5293 18.7373 13.7373L11.4373 6.43726C11.0914 6.09136 10.9184 5.9184 10.7166 5.79472C10.5376 5.68506 10.3425 5.60425 10.1385 5.55526C9.90829 5.5 9.6637 5.5 9.17452 5.5H6.2C5.0799 5.5 4.51984 5.5 4.09202 5.71799C3.7157 5.90973 3.40973 6.21569 3.21799 6.59202C3 7.01984 3 7.57989 3 8.7Z" stroke="#606b7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <ul>
                                        <li>{textAbout1}</li>
                                        <li>{textAbout2}</li>
                                        <li>{textAbout3}</li>
                                    </ul>
                                </span>
                            </span>
                        </div>
                        <div className="modal-bloc4-right">
                            <div className="icon">
                                <span>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                        <g id="SVGRepo_iconCarrier"> <path d="M19.4003 18C19.7837 17.2499 20 16.4002 20 15.5C20 12.4624 17.5376 10 14.5 10C11.4624 10 9 12.4624 9 15.5C9 18.5376 11.4624 21 14.5 21L21 21C21 21 20 20 19.4143 18.0292M18.85 12C18.9484 11.5153 19 11.0137 19 10.5C19 6.35786 15.6421 3 11.5 3C7.35786 3 4 6.35786 4 10.5C4 11.3766 4.15039 12.2181 4.42676 13C5.50098 16.0117 3 18 3 18H9.5" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                                    </svg>
                                </span>
                                <span>
                                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                        <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#344054"/> </g>
                                    </svg>
                                </span>
                                <span>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 7L12 3M12 3L8 7M12 3V15M21 11V17.7992C21 18.9193 21 19.4794 20.782 19.9072C20.5903 20.2835 20.2843 20.5895 19.908 20.7812C19.4802 20.9992 18.9201 20.9992 17.8 20.9992H6.2C5.0799 20.9992 4.51984 20.9992 4.09202 20.7812C3.71569 20.5895 3.40973 20.2835 3.21799 19.9072C3 19.4794 3 18.9193 3 17.7992V11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <span>
                                    <img src={icone3} alt="icone" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="modal-bloc5">
                        <div className="modal-bloc5-left">
                            <div className="rocket">
                                <img src={icone4} alt="icone4" style={{width: "30px", height: "30px"}}/>
                            </div>
                            <p>Meet the team</p>
                        </div>
                        <div className="modal-bloc5-right">
                            <div className="tof">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="/">Show more</a>
                        </div>
                    </div>

                    <div className="modal-bloc6">
                        <img src={img1} alt="img1" />
                        <img src={img2} alt="img2" />
                        <img src={img3} alt="img3" />                 
                    </div>

                    <div className="modal-bloc7">
                        <button className="discuss">Launch discussions</button>
                        <button className="review">Reviews</button>                
                    </div>

                   <div className="modal-bloc8" ref={commentSectionRef}>
                        <textarea  placeholder="What do you think?" value={newComment} ref={textAreaRef} onChange = {(e) => {setNewComment(e.target.value); adjustTextAreaHeight();}} />
                        <div className="modal-bloc8-right">
                            <img src={icone5} alt="icone5"/>
                            {isLoggedIn ? (
                                <button onClick={handleCommentSubmit}>Send</button>
                            ) : (
                                <Link to="/connect">Login to Comment</Link>
                            )}
                        </div>  
                    </div>

                    <div className="modal-bloc9">
                        {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="modal-comment">
                                <div className="modal-comment-up">
                                    <div className="info-user">
                                        <span></span>
                                    </div>
                                    <div className="user-comment">
                                        <small>By: {comment.email || "Anonymous"}</small>  {/* Afficher l'email de l'utilisateur */}
                                        <p>{comment.text}</p>
                                    </div>
                                </div>
                                <div className="mention">
                                    <small>{new Date(comment.timestamp.seconds * 1000).toLocaleString()}</small>
                                </div>
                            </div>
                        ))
                        ) : (
                        <p>No comments yet. Be the first to comment!</p>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}
