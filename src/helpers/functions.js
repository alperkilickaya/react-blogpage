import firebase from "./firebase";
import { useState, useEffect } from "react";


export const addBlog = (newBlog) => {
  const blogRef = firebase.database().ref("blog");
  blogRef.push(newBlog);
};


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

