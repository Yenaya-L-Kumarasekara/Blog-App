import Posts from "../posts/Posts";
import "./Post.css";

export default function Post({posts}) {
    return (
        <div className="post">
            {posts.map(p=>(
                <Posts post={p} />    
            ))}
        </div>
    )
}
