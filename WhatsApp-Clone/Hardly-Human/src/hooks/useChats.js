import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

export default function useChats(user) {
  const [snapshot] = useCollection(
    user
      ? db
          .collection("users")
          .doc(user.uid)
          .collection("chats")
          .orderBy("timestamp", "desc")
      : null
  );

  const chats = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return chats;
}
