// import react, { useState } from "react"; 
// import firebase from "firebase";


// function ImageUpload(){
//     const [singleImage, setSingleImage] = useState("");

//     function handleImage(e){
//         e.preventDefault();
//         let pickedFile;
//         if (e.target.files && e.target.files.length > 0){
//             pickedFile = e.target.files[0];
//             setSingleImage(pickedFile);
//         }
//       }
  
//       function uploadImage(e){
//         e.preventDefault();
//         const uploadTask = storage.ref("Image")
//         .child("Image1")
//         .put(Image);
//         uploadTask.on(
//           "state_changed",
//           (snapshot) => {
//             let progress = ((snapshot.bytesTransferred/snapshot.totalBytes) * 100);
//             console.log(progress);
//           },
//           (error) => {
//             console.log(err);
//           },
//           () => {
//             storage.ref("Image")
//             .child("Image1")
//             .getDownloadUrl()
//             .then((imageUrl) => {
//               db.collection("Images")
//               .add({
//                 imgUrl: imageUrl,
//               });
//             });
//           }
//         );
//       }


//     return (
//         <div>
//             <h1>uploading image</h1>
//         </div>
//     );
// }

// export default ImageUpload;



//--------------composant AddProoduct avec l'envoi des images
// import React, { useState } from 'react';
// import { addDocument, getDocuments } from '../firebase/firestore';
// import { db, storage } from '../firebase/firebaseConfig';

// function AddProductForm() {
//   const [textTitle, setTextTitle] = useState('');
//   const [textDiscribe, setTextDiscribe] = useState('');
//   const [image, setImage] = useState(null);
//   const [textAbout1, setTextAbout1] = useState('');
//   const [textAbout2, setTextAbout2] = useState('');
//   const [textAbout3, setTextAbout3] = useState('');
//   const [products, setProducts] = useState([]);

//   // Fonction pour gérer la soumission du formulaire
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productData = {
//       textTitle,
//       textDiscribe,
//       image,
//       textAbout1,
//       textAbout2,
//       textAbout3,
//     };    
  


//     try {
//       // Télécharger l'image dans Firebase Storage
//       const uploadTask = storage.ref("images").child(image.name).put(image);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log(progress);
//         },
//         (error) => {
//           console.error("Upload error: ", error);
//         },
//         async () => {
//           const imageUrl = await uploadTask.snapshot.ref.getDownloadURL();
//           productData.image = imageUrl;  // Ajoutez l'URL de l'image à votre objet productData

//           // Ajouter le produit dans Firestore avec l'URL de l'image
//           await addDocument("products", productData);

//           // Réinitialiser les champs du formulaire
//           setTextTitle('');
//           setTextDiscribe('');
//           setImage(null);  // Réinitialiser l'image
//           setTextAbout1('');
//           setTextAbout2('');
//           setTextAbout3('');

//           // Récupérer les produits après l'ajout
//           const fetchedProducts = await getDocuments("products");
//           setProducts(fetchedProducts);
//         }
//       );
//     } catch (error) {
//         console.error("Error uploading image and adding product: ", error);
//       }
//   };

//    // Fonction pour gérer la sélection de l'image
//    const handleImage = (e) => {
//     const file = e.target.files[0]; // Récupérer le fichier sélectionné
//     if (file) {
//       setImage(file);  // Mettre à jour l'état avec l'image sélectionnée
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Product Title"
//         value={textTitle}
//         onChange={(e) => setTextTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Product Description"
//         value={textDiscribe}
//         onChange={(e) => setTextDiscribe(e.target.value)}
//       />
//       <input
//         type="file"
//         accept="image/*"
//         placeholder="Product Image URL"
//         onChange={handleImage}
//       />
//       <input
//         type="text"
//         placeholder="Feature 1"
//         value={textAbout1}
//         onChange={(e) => setTextAbout1(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Feature 2"
//         value={textAbout2}
//         onChange={(e) => setTextAbout2(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Feature 3"
//         value={textAbout3}
//         onChange={(e) => setTextAbout3(e.target.value)}
//       />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// }

// export default AddProductForm;




// Fonction utilisée pour envoyer une image dans firebase via le lien de l'adresse de l'image
// import { storage } from '../firebase/firebaseConfig'; // Assurez-vous que votre fichier firebaseConfig.js exporte storage
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase Storage

// console.log("FILE!!!", file)
// if (!file) return;
// setImage(file);
// // Crée une référence pour le fichier dans Firebase Storage
// const imageRef = ref(storage, `images/${file.name}`);

// try {
//   // Télécharge l'image sur Firebase Storage
//   const snapshot = await uploadBytes(imageRef, file);
//   console.log('Fichier téléchargé:', snapshot);

//   // Récupère l'URL de l'image téléchargée
//   const imageUrl = await getDownloadURL(snapshot.ref);
//   setImage(imageUrl); // Mettez à jour l'état avec l'URL de l'image
// } catch (error) {
//   console.error("Erreur lors du téléchargement de l'image:", error.message);
// }