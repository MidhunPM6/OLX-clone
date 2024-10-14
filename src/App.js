import React, {useContext } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./Context/ContextAuth";
import Home from "./Pages/Home";
import { auth, db } from "./Firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Sell from "./Pages/Sell";
import View from "./Pages/ViewPost";
import Poster from "./Context/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);
    onAuthStateChanged(auth, async (user) => {
      if(user){
      const uid = user.uid;
      const userDocRef = doc(db, "Users", uid);
      try{
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUser(userData.name);
      } else {
        console.log("No user data found");
      }

    }catch(error){
      console.error("Error getting document from Firestore:", error);
    
    }
  }else{
    console.log("User Signed Out")
  }
    
  })

  return (
    <div>
    <Poster>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Poster>



    </div>
  );
}

export default App;
