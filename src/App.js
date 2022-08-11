import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feeds from "./components/feed/Feeds";
import Widget from "./components/widgets/Widget";
import { selectUser } from "./features/userSlice";
import Login from "./features/login/login";
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (<Login/>)
      :(
        <div className="app_body">
        <Sidebar />
        <Feeds />
        <Widget />
      </div>
      ) 
      }
       
    </div>
  );
}

export default App;
