import React, { useState } from "react";
import "./sellForm.css";
import { imageDB, db, auth } from "../../Firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'

function SellForm() {
  const [productname, setProductname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState('');
  const user = auth.currentUser;
  const Navigate=useNavigate()


  const date=new Date()

  // const uploadhandle = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file);
  // };

  const posthandle = async () => {
    
    const imgRef =  ref(imageDB, `/images  ${image.name +v4()}`);
    await uploadBytes(imgRef, image).then((data) => {
      getDownloadURL(data.ref)
        .then((imageurl)=> {
         console.log(imageurl)
         setUrl(imageurl)
        })
        .then(async () => {
           const valRef =  collection(db, "Dataupload")
          await addDoc(valRef, {
            productname,
            imagelink:url,
            category,
            price,
            userId: user.uid,
            date:date.toDateString()
          })
          
        })
        
    })
    
    
   
  
    
  }
 

  return (
    <div  >
      <div className="mainwrapper">
        <h1>Post Items</h1>
        <div className="formwrapper">
          <form>
            <div className="inputfeild1">
              <input
                type="text"
                placeholder="Enter Product Name"
                value={productname}
                onChange={(e) => setProductname(e.target.value)}
              />
            </div>
            <div className="inputfeild2">
              <input
                type="text"
                placeholder="Enter The category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="inputfeild3">
              <input
                type="text"
                placeholder="Enter The Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <img
                className="formimg"
                width="150px"
                height="150px"
                alt=""
                src={image ? URL.createObjectURL(image) : null}
              />
            </div>
          
              <input
                className="formfile"
                type="file"
                id="myFile"
                name="filename"
                onChange={(e)=>setImage(e.target.files[0])}
              />
              <div>
                <button className="postbtn" type="button" onClick={posthandle}>
                  Post
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SellForm;
