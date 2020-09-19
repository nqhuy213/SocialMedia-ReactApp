import React, {useState, Fragment} from 'react';
import './NewsFeedPage.scss';
import AskPostBox from '../../components/AskPostBox/AskPostBox';
import {Modal} from 'semantic-ui-react';
import PostForm from './PostForm/PostForm';
import PostItemList from '../../components/PostItemList/PostItemList';
import usePosts from './_usePosts';
import useActiveFriends from './_useActiveFriends';
import ActiveUserBar from './ActiveUserBar/ActiveUserBar';
import { useSelector } from 'react-redux';

export default function NewsFeedPage() {
  const {activeFriends} = useActiveFriends();
  const {posts, likePost, commentPost, likeComment} = usePosts();
  const [openPostForm, setOpenPostForm] = useState(false);
  const user = useSelector(state => state.Auth.user)
  return (
    <Fragment>
      <div className="page-container news-feed-page">
        <div className="left-flex-container"></div>

        <div className="middle-flex-container">
          <div className="ask-post-box-container">
            <AskPostBox openPostForm={() => setOpenPostForm(true)} />
          </div>
          <div className="post-list-container">
            <PostItemList
              items={posts}
              likePost={likePost}
              commentPost={commentPost}
              likeComment={likeComment}
            />
          </div>
        </div>

        <div className="right-flex-container">
          <ActiveUserBar activeUsers={activeFriends} />
        </div>
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
          user={user}
          closePostForm={() => {
            setOpenPostForm(false);
          }}
        />
      </Modal>
    </Fragment>
  );
}
