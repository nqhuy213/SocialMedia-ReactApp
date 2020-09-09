import React, {useState, Fragment, useEffect} from 'react';
import './NewsFeedPage.scss';
import AskPostBox from '../../components/AskPostBox/AskPostBox';
import {Modal} from 'semantic-ui-react';
import PostForm from '../../components/PostForm/PostForm';
import PostItemList from '../../components/PostItemList/PostItemList';
import { useDispatch, useSelector } from 'react-redux';
import usePosts from './_usePosts';
import { fetchNewsFeed, updatePost } from '../../redux/actions/post';
import { getUserId } from '../../utils/user';

export default function NewsFeedPage({props}) {
  // const {posts, likePost} = usePosts();
  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   /**Fetch data here */
  //   console.log(posts);
  // }, [posts]);
  const [openPostForm, setOpenPostForm] = useState(false);
  const posts = useSelector(state => state.NewsFeed.data.posts.items)
  const socket = useSelector(state => state.Socket.socket)
  const dispatch = useDispatch()

  const likePost = (userId = getUserId(), postId) => {
    socket.emit('like_post', {userId, postId})
  }

  useEffect(() => {
    dispatch(fetchNewsFeed())
    if(socket){
      socket.on('update_post', (post) => {
        dispatch(updatePost(post))
      })
    }
  },[socket])


  return (
    <Fragment>
      <div className="page-container news-feed-page">
        <div className="left-flex-container"></div>
        <div className="middle-flex-container">
          <div className="ask-post-box-container">
            <AskPostBox openPostForm={() => setOpenPostForm(true)} />
          </div>
          <div className="post-list-container">
            <PostItemList items={posts} onLikePost={likePost}/>
          </div>
        </div>
        <div className="left-flex-container"></div>
      </div>
      <Modal
        className="post-form-modal"
        basic
        size="tiny"
        dimmer="inverted"
        open={openPostForm}
        onClose={() => setOpenPostForm(false)}
      >
        <PostForm
          closePostForm={() => {
            setOpenPostForm(false);
          }}
        />
      </Modal>
    </Fragment>
  );
}
