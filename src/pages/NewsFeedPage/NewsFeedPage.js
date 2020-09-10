import React, {useState, Fragment, useEffect} from 'react';
import './NewsFeedPage.scss';
import AskPostBox from '../../components/AskPostBox/AskPostBox';
import {Modal} from 'semantic-ui-react';
import PostForm from '../../components/PostForm/PostForm';
import PostItemList from '../../components/PostItemList/PostItemList';
import usePosts from './_usePosts';
import useActiveUser from './_useActiveUser'
import ActiveUserBar from './ActiveUserBar/ActiveUserBar';

export default function NewsFeedPage() {
  const {activeUsers} = useActiveUser()
  const {posts, likePost, commentPost} = usePosts();
  const [openPostForm, setOpenPostForm] = useState(false);

  

  return (
    <Fragment>
      <div className="page-container news-feed-page">
        <div className="left-flex-container">

        </div>

        <div className="middle-flex-container">
          <div className="ask-post-box-container">
            <AskPostBox openPostForm={() => setOpenPostForm(true)} />
          </div>
          <div className="post-list-container">
            <PostItemList items={posts} likePost={likePost} commentPost={commentPost}/>
          </div>
        </div>

        <div className="right-flex-container">
          <ActiveUserBar activeUsers={activeUsers}/>
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
          closePostForm={() => {
            setOpenPostForm(false);
          }}
        />
      </Modal>
    </Fragment>
  );
}
