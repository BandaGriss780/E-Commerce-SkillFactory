import { FirebaseDB } from "../../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export const getData = async () => {
    const dataFetch = await getDocs(collection(FirebaseDB, "Products"))
    const data = []

    dataFetch.forEach(doc => {
        data.push({ ...doc.data(), id: doc.id })
    })

    return data
}

export const myProducts = await getData()
