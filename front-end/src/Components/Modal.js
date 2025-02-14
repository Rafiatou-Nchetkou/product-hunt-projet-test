import rocket from "../assets/icon/rocket-02-svgrepo-com.svg";
import arrowUpSquare from "../assets/icon/arrow-up-right-from-square-svgrepo-com.svg";
import tagIcon from "../assets/icon/tag-03-svgrepo-com.svg";
import messageIcon from "../assets/icon/message-circle-chat-svgrepo-com (1).svg";
import saveIcon from "../assets/icon/save-svgrepo-com.svg";
import arrowUpBracket from "../assets/icon/arrow-up-from-bracket-svgrepo-com.svg";
import icone3 from "../assets/icon/chart-bar-svgrepo-com.svg";
import icone4 from "../assets/icon/team-3.svg";
import icone5 from "../assets/icon/at-sign-26-svgrepo-com.svg";

import img1 from "../assets/image/5ada07ce-5838-44af-a0ea-51a12b689f1b.png";
import img2 from "../assets/image/3c27d8ab-1aa2-42a5-af24-5adcfb295709.png";
import img3 from "../assets/image/53cb4d93-ee40-4938-8028-2b8d856a6429.png";

import './modal.css';

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig"; 
import { useDispatch, useSelector } from "react-redux";
import { loadComments, addComment, setIsLoggedInAction } from "../Redux/commentStorage";

import VoteButton from "./VoteButton";


export default function Modal ({ closeModal, id, image, textTitle, textDiscribe, textAbout1, textAbout2, textAbout3, focusComment, productId }){

    const [localComment, setLocalComment] = useState("");

    const commentSectionRef = useRef(null);
    const textAreaRef = useRef(null); 

    const dispatch = useDispatch();
    const { comments, isLoggedIn } = useSelector(state => state.comments);
    const productComments = comments[id]?.comments || []; 


    // Faire défiler le modal jusqu'à la section des commentaires si focusComment est vrai
    useEffect(() => {
      if (focusComment && commentSectionRef.current) {
        console.log('Scroll to comment section');
        commentSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [focusComment]);

    useEffect(() => {
        dispatch(loadComments(id));  // Charger les commentaires pour le produit
    }, [dispatch, id]);

      // Vérifier si l'utilisateur est connecté
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // Mettre à jour l'état de connexion dans Redux
                dispatch(setIsLoggedInAction(true));
            } else {
                dispatch(setIsLoggedInAction(false));
            }
        });
        return () => unsubscribe();
    }, [dispatch]);

    const handleChangeComment = (e) => {
        setLocalComment(e.target.value); 
        adjustTextAreaHeight();
      };
    
      // Ajuster la hauteur de l'input
      const adjustTextAreaHeight = () => {
        if (textAreaRef.current) {
          textAreaRef.current.style.height = 'auto';
          textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
      };

    const handleCommentSubmit = async () => {
        if (localComment.trim()) {
          const user = auth.currentUser;
          const commentData = {
            productId: id,
            text: localComment,
            userId: user ? user.uid : null,
            email: user ? user.email : null,
            timestamp: new Date().getTime(),
          };
          dispatch(addComment(commentData, id));  // Ajouter le commentaire
          setLocalComment("");  // Réinitialiser l'input du commentaire
        }
      };
      

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
                                <img src={rocket} alt="rocket" />
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
                                <img src={arrowUpSquare} alt="arrowUpSquare" />
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
                                    <img src={tagIcon} alt="tagIcon" />
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
                                    <img src={messageIcon} alt="messageIcon" />
                                </span>
                                <span>
                                    <img src={saveIcon} alt="saveIcon" /> 
                                </span>
                                <span>
                                    <img src={arrowUpBracket} alt="arrowUpBracket" />
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
                        <textarea  placeholder="What do you think?" value={localComment} ref={textAreaRef} onChange = {handleChangeComment} />
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
                        {productComments && productComments.length > 0 ? (
                        productComments.map((comment, index) => (
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
                                    <small>{new Date(comment.timestamp).toLocaleString()}</small>
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
