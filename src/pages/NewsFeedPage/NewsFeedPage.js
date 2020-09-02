import React, { useState, Fragment } from 'react'
import './NewsFeedPage.scss'
import AskPostBox from '../../components/AskPostBox/AskPostBox'
import { Modal } from 'semantic-ui-react'
import PostForm from '../../components/PostForm/PostForm'
import PostItem from '../../components/PostItem/PostItem'
import PostItemList from '../../components/PostItemList/PostItemList'
import { useSelector } from 'react-redux'

export default function NewsFeedPage({props}) {
  const newsFeedLoading = useSelector(state => state.NewsFeed.loading)
  const [openPostForm, setOpenPostForm] = useState(false)
  return (
    <Fragment>
      <div className='page-container news-feed-page'>
        <div className='left-flex-container'>
        </div>
        <div className='middle-flex-container'>
          <div className='ask-post-box-container'>
            <AskPostBox openPostForm={() => setOpenPostForm(true)}/>
          </div>
          <div className='post-list-container'>
            <PostItemList/>
          </div>
        </div>
        <div className='left-flex-container'>

        </div>
      </div>
      <Modal basic size='tiny' dimmer='inverted' open={openPostForm} onClose={() => setOpenPostForm(false)}>
        <PostForm/>
      </Modal>
    </Fragment>
    
  )
}
