import firebase from "./firebase";
import { useState, useEffect } from "react";



export const addBlog = (newBlog) => {
  

  const storageRef = firebase.storage().ref().child(`images/${newBlog.id}.jpg`);
  storageRef.put(newBlog.image).then(()=>{
    const url = firebase.storage().ref().child(`images/${newBlog.id}.jpg`).getDownloadURL()
    .then((url)=>{
      newBlog.url = url
      const blogRef = firebase.database().ref("blog");
      blogRef.push(newBlog);
    })
    


  })
  
};


/* export const addImage = (image,id) => {
  const storageRef = firebase.storage().ref().child(`images/${id}.jpg`);
  storageRef.put(image).then((snapshot)=>{
    console.log(snapshot.metadata)

    const url = firebase.storage().ref().child(`images/${id}.jpg`).getDownloadURL()
    .then((url)=>{
      console.log("downloadUrl:",url)
      
    }) 
    
  })
} */


export const useFetch = () => {
  const [blogList, setBlogList] = useState([])

useEffect(()=>{
  const blogRef = firebase.database().ref("blog")
  blogRef.on("value", (snapshot)=>{

    const blogs = snapshot.val();
    const blogArray = [];

    for(let id in blogs){
      blogArray.push({id, ...blogs[id]})
    }
    setBlogList(blogArray);
  });
},[]);

return {blogList};

}

