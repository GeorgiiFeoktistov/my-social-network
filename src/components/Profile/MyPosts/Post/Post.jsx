import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=2f7afbba57171b8e4710585d82edbb122ee451d4-9262149-images-thumbs&n=13" />
      { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  );
};

export default Post;
