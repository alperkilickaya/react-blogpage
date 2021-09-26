import firebase from "./firebase";
import { useState, useEffect } from "react";


export const addBlog = (newBlog) => {
  const blogRef = firebase.database().ref("blog");
  blogRef.push(newBlog);
};

