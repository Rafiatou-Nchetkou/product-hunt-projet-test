import { setProducts, setLoading, setError } from "../Redux/productSlice";
import { getDocuments, addDocument } from "../firebase/firestore";

// on charge les produits depuis Firebase et localStorage
export const loadProducts = async (dispatch) => {
    dispatch(setLoading(true));

    // on vérifie si les produits existent dans le localStorage
    let products = JSON.parse(localStorage.getItem("products"));
    
    if (products && products.length > 0) {
        dispatch(setProducts(products));
        dispatch(setLoading(false));
    } else {
        try {
            const data = await getDocuments("products");
            dispatch(setProducts(data));  
            localStorage.setItem("products", JSON.stringify(data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
};

// Ajouter un produit dans Firebase, Redux et localStorage
export const addProduct = async (dispatch, product) => {
  try {
    
        await addDocument("products", product);

        let currentProducts = JSON.parse(localStorage.getItem("products")) || [];

        currentProducts.push(product);

        localStorage.setItem("products", JSON.stringify(currentProducts));

        dispatch(setProducts(currentProducts));
    } catch (error) {
        console.error("Erreur lors de l'ajout du produit:", error);
    }
};
