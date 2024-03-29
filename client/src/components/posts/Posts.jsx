import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) {
  return (
    <div className="posts">
    {posts?.map(item => (
      <Post key={item.id} post={item} />
    ))}
    </div>
  );
}
