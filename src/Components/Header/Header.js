import React, { useContext } from "react";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextAuth";
import { auth } from "../../Firebase/config";
import { signOut } from "firebase/auth";



function Header() {
  const { User } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handlesellBtn=()=>{
    Navigate('/sell')
  }

  const btnHandler = () => {
    Navigate("/login");
  };

  const logoutHandle=async()=>{
  await signOut(auth).then(()=>{
    window.location.reload(false)
    Navigate('/')
  }).catch((error)=>{
    console.error("error signing"+error)

  })

  }
 

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
            <span className="loginclick" onClick={btnHandler}>
              {User ? `Welcome ${User}` : "Login"}
            </span>
          <hr />
        </div>
        <div>
         {User && <span className="logoutbtn" onClick={logoutHandle}>Logout</span>}
        </div>

        <div className="sellMenu" onClick={handlesellBtn}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
