import React, { useContext, useEffect, useState } from 'react';
import './View.css';

import { PostContext } from '../../Context/PostContext';
import { db } from '../../Firebase/config';
import { collection, query, where,getDocs} from 'firebase/firestore';
function View() {
  const { postDetails } = useContext(PostContext);
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    const { userId } = postDetails;

    // Create the query using Firestore modular API
    const userQuery = query(collection(db, 'Users'), where('id', '==', userId));
    // Fetch the documents using getDocs
    getDocs(userQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setSeller(doc.data());
        console.log(doc.data());
        
        
      })
    })
  })
    
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imagelink}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.productname}</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{seller.name}</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
