import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

export default function useChatMessages(roomId) {
  const [snapshot] = useCollection(
    roomId
      ? db
          .collection("rooms")
          .doc(roomId)
          .collection("messages")
          .orderBy("timestamp", "asc")
      : null
  );

  const messages = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return messages;
}
