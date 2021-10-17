import React from "react";
import "./App.css";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import useWindowSize from "./hooks/useWindowSize";
import useAuthUser from "./hooks/useAuthUser";
import { Route, Redirect } from "react-router-dom";

export default function App() {
  const page = useWindowSize();
  const user = useAuthUser();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app" style={{ ...page }}>
      <Redirect to={page.isMobile ? "/chats" : "/"} />
      <div className="app__body">
        <Sidebar user={user} page={page} />
        <Route path="/room/:roomId">
          <Chat user={user} page={page} />
        </Route>
      </div>
    </div>
  );
}
