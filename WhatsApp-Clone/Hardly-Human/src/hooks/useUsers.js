import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

export default function useUsers(user) {
  const [snapshot] = useCollection(
    db.collection("users").orderBy("timestamp", "desc")
  );

  const users = [];

  if (user) {
    snapshot?.docs.forEach((doc) => {
      const id =
        doc.id > user.uid ? `${doc.id}${user.uid}` : `${user.uid}${doc.id}`;

      if (doc.id !== user.uid) {
        users.push({
          id,
          userID: doc.id,
          ...doc.data(),
        });
      }
    });
  }

  return users;
}
