import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import img2 from "./image/pink-teddy-bear-dummy_23-2147622341.webp";
import img3 from "./image/277-2772086_user-female-skin-type-4-icon-icon.png";
export default function Feed() {
    const navigate=useNavigate();
    // states
  const [comment, setComment] = useState("");
  const [output, setOutput] = useState([]);
  const [img, setImg] = useState("");
  // functions for taking the value from input boxes
  const commentHandler = (e) => {
    setComment(e.target.value);
  };
  const UploadFileHandler = (event) => {
    // upload abd display image
    let p1=(URL.createObjectURL(event.target.files[0]));
    setImg(p1)
  };
//   post button function
  const postHandler = (e) => {
    var obj = {
      data: comment,
      image:img,
      id: Math.random(),
    };
    console.log(obj);
    if (obj.data === "") {
      alert("Please write something");
    } else {
      setOutput([...output, obj]);
    }
  };
//   edit function
  const editHandler = (val) => {
    for (let i = 0; i < output.length; i++) {
      document.getElementById("Submit_id").disabled = true;
      if (val === output[i].id) {
        setComment([output[i].data]);
        output.splice(i, 1);
      }
    }
  };
//   delete function
  const deleteHandler = (val) => {
    for (let i = 0; i < output.length; i++) {
      if (val === output[i].id) {
        output.splice(i, 1);
      }
    }
    setOutput([...output]);
  };
//   back to main page
  const backButtonHandler=()=>{
    navigate('/')
  }
  
  return (
    <div className="feed">
      <div>
        <div className="profilearea">
          <img className="profileimg" src={img3} alt="" />
          <b>Lucky gupta with 50 others</b>
        </div>
        <img className="postimg" src={img2} alt="" />
      </div>
      <div className="comment">
        <p>❤️25</p>
        <textarea
          name=""
          id=""
          value={comment}
          onChange={commentHandler}
          placeholder="write comment Here"
        ></textarea>
        <br />
        <button className="postbutton" onClick={postHandler}>
          post
        </button>
        <div>
          <ul>
            {output.map((element) => (
              <li><div className="displayimg"><img id="img1" src={element.image} alt="" /></div> 
              {element.data} {""}{" "}
                <button id="Submit_id" onClick={() => editHandler(element.id)}>
                  edit
                </button>{" "}
                <button onClick={() => deleteHandler(element.id)}>
                  Delete
                </button>{" "}
              </li>
            ))}
          </ul>{" "}
        </div>
        <input id="files" type="file" onChange={UploadFileHandler} />
        <div><button onClick={backButtonHandler} className="postbutton">Back</button></div>
      </div>
     
    </div>
  );
}
