import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
        My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are you?' likesCount='12'/>
            <Post message='It is my first post!' likesCount='45'/>
        </div>
      </div>
    );
}

export default MyPosts