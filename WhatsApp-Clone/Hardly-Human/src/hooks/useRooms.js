import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

export default function useRooms() {
  const [snapshot] = useCollection(
    db.collection("rooms").orderBy("timestamp", "desc")
  );

  const rooms = snapshot?.docs.map((doc) => ({
    id: doc.id,
    userID: doc.id,
    ...doc.data(),
  }));

  return rooms;
}
