import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "./firebaseConfig";



const addDocument = async(collectionName, data) => {
  const colRef = collection(db, collectionName)
  return await addDoc(colRef, data);
}

// function to get all documents
const getDocuments = async(collectionName) => {
    const colRef = collection(db, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => ({  ...doc.data(),  id: doc.id, }));
}

// to update all documents
const updateDocument = async (collectionName, docId, data) => {
  const docRef = doc(db, collectionName, docId);
  return await updateDoc(docRef, data);
};
  
// // Function to delete a document
const deleteDocument = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  return await deleteDoc(docRef);
};

  export { addDocument, getDocuments, updateDocument, deleteDocument };
