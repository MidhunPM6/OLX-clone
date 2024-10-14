import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { db } from '../../Firebase/config';
import { collection ,getDocs} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../Context/PostContext';

function Posts() {
  const [post,setPost]=useState([])
  const {setPostDetails}=useContext(PostContext)
  

  const Navigate=useNavigate()
  useEffect(()=>{
    const colRef=collection(db,"Dataupload")
    getDocs(colRef).then((snapshot)=>{
     const allpost=snapshot.docs.map((product)=>{
      return{
        ...product.data(),
        id:product.id
        
        
      }

      })
      setPost(allpost)

    })

  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards" >
          {post.map(product=>{
            return(
          <div
            className="card"
            onClick={()=>setPostDetails(product)} onDoubleClick={()=>Navigate("/view")}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imagelink} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.productname}</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
            )
          })}
        </div>
      
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
