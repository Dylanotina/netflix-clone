import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent( target ) {
  const [content, setContent] = useState([]);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    async function fetchAPI() {
      try {
        let snapshot = await firebase.firestore().collection(target).get();
        let allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPI();
  }, [firebase, target]);

  return { [target]: content };
}
