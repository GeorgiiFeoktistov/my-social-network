import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=ee7463258e1ad1d1191d8783982d893b1c6ec1fe-9699933-images-thumbs&n=13" />
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
