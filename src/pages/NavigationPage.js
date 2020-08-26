import React, { Fragment, useState } from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import NewsFeedPage from './NewsFeedPage/NewsFeedPage'
import './NavigationPage.scss'
import WatchPage from './WatchPage/WatchPage'
export default function NavigationPage({page}) {

  const [activePage, setActivePage] = useState(page)

  const handleChangePage = (page) => {
    setActivePage(page)
  }

  var page;
  switch (activePage){
    case 'home':
      page = <NewsFeedPage/>
      break
    case 'watch':
      page = <WatchPage/>
      break
    default:
      page = <NewsFeedPage/>
      break
  }
  
  return (
    <Fragment>
      <NavigationBar activePage={activePage} handleChangePage={handleChangePage}/>
      <div className='page-container'>
        {page}
      </div>
    </Fragment>
  )
}
