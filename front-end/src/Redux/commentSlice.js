import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: {},
  newComment: "",
  isLoggedIn: false,
  loading: false,
  error: null,
  commentCount: {}, 
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action) => {
        const productId = action.payload.productId;
        state.comments[productId] = {
          comments: action.payload.comments,
          commentCount: action.payload.comments.length, // On garde le nombre de commentaires
        };
        return state;
    },
      // Nouvelle action pour charger commentCount depuis localStorage
      loadCommentCount: (state, action) => {
        const productId = action.payload;
        const savedCount = localStorage.getItem(`commentCount_${productId}`);
        if (savedCount) {
          state.comments[productId] = {
            ...state.comments[productId],
            commentCount: parseInt(savedCount), // Récupère et met à jour le commentCount
          };
        }
      },
    setNewComment: (state, action) => {
        const { productId, newComment } = action.payload;
  
        if (state.comments[productId]) {
          state.comments[productId].comments = [...state.comments[productId].comments, newComment];
          state.comments[productId].commentCount += 1;
        } else {
          state.comments[productId] = {
            comments: [newComment], 
            commentCount: 1,
          };
        }
        // Sauvegarde dans localStorage
        localStorage.setItem(`commentCount_${productId}`, state.comments[productId].commentCount);
        return state;
    },
    
    
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      return state;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
    setError: (state, action) => {
      state.error = action.payload;
      return state;
    }
  },
});

export const { setComments, setNewComment, setIsLoggedIn, setLoading, setError, loadCommentCount } = commentSlice.actions;

export default commentSlice.reducer;
