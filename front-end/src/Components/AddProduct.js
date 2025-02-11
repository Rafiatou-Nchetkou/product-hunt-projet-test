import  { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/productsLocalStorage';


function AddProductForm() {

  const dispatch = useDispatch();

  const [textTitle, setTextTitle] = useState('');
  const [textDiscribe, setTextDiscribe] = useState('');
  const [image, setImage] = useState('');
  const [textAbout1, setTextAbout1] = useState('');
  const [textAbout2, setTextAbout2] = useState('');
  const [textAbout3, setTextAbout3] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

    //Fonction pour gérer l'image télécharger
    const handleImageUpload = async (e) => {
        const file = e.target.files[0]; 

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const previewUrl = reader.result
                ImageUpload(file, previewUrl)
            }
            reader.readAsDataURL(file)
        }
        // Fonction pour gérer le téléchargement de l'image
        const ImageUpload = (file, preview) => {
            setImage(preview)
            console.log("Uploaded file", file)
        }
    };

    // Fonction pour gérer la soumission du formulaire
    const today = new Date();
    const handleSubmit = async (e) => {
        e.preventDefault()
        const productData = {
        textTitle,
        textDiscribe,
        image,
        textAbout1,
        textAbout2,
        textAbout3,
        createdDate : today
    };
    try {

        addProduct(dispatch, productData);
        setSuccessMessage('Produit ajouté avec succès !');
  
        setTextTitle('');
        setTextDiscribe('');
        setImage('');
        setTextAbout1('');
        setTextAbout2('');
        setTextAbout3('');
  
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (error) {
        console.error("Erreur lors de l'ajout du produit:", error);
      }

    };


  return (
    <div className="container-form">
      <form onSubmit={handleSubmit} className='styled-form'>
            <h1>Submit a product</h1>
            <label>Enter the name of the application</label>
            <input
            type="text"
            placeholder="Product Title"
            value={textTitle}
            onChange={(e) => setTextTitle(e.target.value)}
            /> <br />
            <label>Enter the description of the application</label>
            <textarea
            placeholder="Product Description"
            value={textDiscribe}
            onChange={(e) => setTextDiscribe(e.target.value)}
            /> <br />
            <label>Enter the application logo</label>
            <input
            type="file"
            placeholder="Product Image URL"
            onChange={handleImageUpload}
            /> <br />
            <label>Enter application domains</label>
            <input
            type="text"
            placeholder="Feature 1"
            value={textAbout1}
            onChange={(e) => setTextAbout1(e.target.value)}
            />
            <input
            type="text"
            placeholder="Feature 2"
            value={textAbout2}
            onChange={(e) => setTextAbout2(e.target.value)}
            />
            <input
            type="text"
            placeholder="Feature 3"
            value={textAbout3}
            onChange={(e) => setTextAbout3(e.target.value)}
            /> <br />
            <button type="submit">Add Product</button>

            {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
    
  );
}

export default AddProductForm;
