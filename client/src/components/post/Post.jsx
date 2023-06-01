import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  // const PF = "http://localhost:5000/api/images/"
  return (
    <div className="post">
      <img className="postImg" src={post.photo} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">
              {/* <Link className="link" to="/posts?cat=Music"> */}
              {c.name}
              {/* </Link> */}
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
