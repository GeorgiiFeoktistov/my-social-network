import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=2f7afbba57171b8e4710585d82edbb122ee451d4-9262149-images-thumbs&n=13" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
