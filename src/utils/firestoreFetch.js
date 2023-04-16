import { query, orderBy, where, collection, getDocs} from "@firebase/firestore";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "shoes"), where("categoryId", "==", idCategory));
    } else {
        q = query(collection(db, "shoes"), orderBy("name"));
    };
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "shoes", idItem);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}

export const firestoreCreateOrder = async (products, client, validate, calcTotal, clearCart) => {
    if (!validate()) return;
    
    const productsForDB = products.map(item => ({
        id: item.id,
        title: item.name,
        price: item.price,
        quantity: item.quantity
    }));

    let order = {
        client: {
            firstName: client.firstName,
            lastName: client.lastName,
            phone: client.phone,
            email: client.email
        },
        total: calcTotal(),
        items: productsForDB,
        date: serverTimestamp()
    };

    const createOrderInFirestore = async () => {
        // Add a new document with a generated id
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
    }

    createOrderInFirestore()
        .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
    
    clearCart();
}