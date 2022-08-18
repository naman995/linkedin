import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feeds from "./components/feed/Feeds";
import Widget from "./components/widgets/Widget";
import { selectUser ,login ,logout} from "./features/userSlice";
import Login from "./Pages/Login/login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./components/feed/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispach = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is loged out
        dispach(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // user is loged in
        dispach(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feeds />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
