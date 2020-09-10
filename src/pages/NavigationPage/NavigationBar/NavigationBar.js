import React from 'react'
import './NavigationBar.scss'
import logo from './logo.png'
import { Search} from 'semantic-ui-react'
import TabBar from './TabBar/TabBar'

export default function NavigationBar({activePage, handleChangePage}) {
  
  return (
    <div className='navbar-container'>
      <div className='left-flex'>
        <img alt='logo-image' src={logo} className='navbar-item logo-img'/>
        <Search className='navbar-item search-box' />
      </div>
      <div className='middle-flex tabbar'>
        <TabBar activePage={activePage} handleChangePage={handleChangePage}/>
      </div>
      <div className='right-flex'>
        
      </div>
    </div>
  )
}
