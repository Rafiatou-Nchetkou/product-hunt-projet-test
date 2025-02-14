import { setComments, setNewComment, setIsLoggedIn, setLoading, setError } from './commentSlice.js';
import { getDocuments, addDocument } from "../firebase/firestore";

// Charger les commentaires depuis Firebase ou localStorage
export const loadComments = (productId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const storedComments = localStorage.getItem(`product_${productId}_comments`);
    let comments = [];

    if (storedComments) {
        try {
            comments = [...JSON.parse(storedComments)];  // Crée une copie
          } catch (error) {
            console.error("Error parsing comments from localStorage", error);
            comments = {};  // Si les données sont corrompues, on réinitialise à un tableau vide
          }
        } else {
          // Récupérer les commentaires depuis Firebase si non présents dans localStorage
          const allComments = await getDocuments("comments");
          comments = allComments.filter(comment => comment.productId === productId);
  
        // Convertir les timestamps en objets Date 
        comments = comments.map(comment => {
          const convertedComment = { ...comment };
          if (convertedComment.timestamp && convertedComment.timestamp.toDate) {
            convertedComment.timestamp = convertedComment.timestamp.toDate();
          } else {
            // Assurer qu'il y a toujours un timestamp valide
            convertedComment.timestamp = new Date();
          }
          return convertedComment;
        });
  
        // Trier les commentaires du plus récent au plus ancien
        comments.sort((a, b) => b.timestamp - a.timestamp);
        localStorage.setItem(`product_${productId}_comments`, JSON.stringify(comments));
      }
  
      // Stocker le nombre de commentaires dans le localStorage
      const commentCount = comments.length;
      localStorage.setItem(`product_${productId}_commentCount`, commentCount);
  
      // Mettre à jour Redux avec les commentaires et leur nombre
      dispatch(setComments({ productId, comments }));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
};

// Ajouter un commentaire dans Firebase et dans localStorage
export const addComment = (commentData, productId) => async (dispatch) => {
    try {
      await addDocument("comments", commentData);
  
      // Charger les commentaires existants depuis le localStorage
      const storedComments = localStorage.getItem(`product_${productId}_comments`);
      let updatedComments = storedComments ? [...JSON.parse(storedComments)] : [];
      updatedComments = [...updatedComments, commentData];  // Crée une nouvelle copie
  
      // Trier les commentaires par timestamp (du plus récent au plus ancien)
      updatedComments.sort((a, b) => b.timestamp - a.timestamp);
  
      // Mettre à jour le localStorage avec les nouveaux commentaires
      localStorage.setItem(`product_${productId}_comments`, JSON.stringify(updatedComments));
  
    // Mettre à jour le nombre de commentaires dans le localStorage
    const updatedCommentCount = updatedComments.length;
    localStorage.setItem(`product_${productId}_commentCount`, updatedCommentCount);

      // Mise à jour de Redux
    dispatch(setNewComment({ productId, newComment: commentData }));
    } catch (error) {
    dispatch(setError(error.message));
    }
  };
  

// Mettre à jour l'état du commentaire
export const setNewCommentAction = (productId, newComment) => (dispatch) => {
    dispatch(setNewComment({ productId, newComment }));
};

// Mettre à jour l'état de l'utilisateur connecté
export const setIsLoggedInAction = (isLoggedIn) => (dispatch) => {
  dispatch(setIsLoggedIn(isLoggedIn));
};
