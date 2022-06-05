import { useState,useEffect } from "react";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import SideBar from "../../components/sideBar/SideBar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

 
    useEffect(() => {
        const fetchPost = async () => {
          const res = await axios.get("/posts" +search);
          setPosts(res.data)
        };
        fetchPost();
      }, [search]);
      
    
    return (
        <>
            <Header/>
            <div className="home">
                <Post posts={posts}/>
                <SideBar />
            </div>
        </>
    )
}
