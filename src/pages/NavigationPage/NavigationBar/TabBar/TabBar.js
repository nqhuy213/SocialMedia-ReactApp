import React, { Fragment, useState } from 'react'
import './TabBar.scss'
import { Search, Button, Icon, Divider } from 'semantic-ui-react'
import { history } from '../../../../history'

export default function TabBar({activePage, handleChangePage}) {

  const [selectedTab, setSelectedTab] = useState(
    {
      [activePage]:true
    }
  )

  const handleOnClick = (e) => {
    setSelectedTab({[e.target.name]:true})
    handleChangePage(e.target.name)
    history.push(`/${e.target.name}`)
  }

  return (
    <Fragment>
      <Button icon className={selectedTab.home? 'navbar-item tab-icon selected': 'navbar-item tab-icon'} name='home' onClick={handleOnClick}>
        <Icon name='home' size='large' className={selectedTab.home ? 'tabbar-item selected' : 'tabbar-item'}/>
        {
          selectedTab.home ? <Divider className='selected-indicator'/> : null
        }
      </Button>
      
      <Button icon className={selectedTab.watch? 'navbar-item tab-icon selected': 'navbar-item tab-icon'} name='watch' onClick={handleOnClick}>
        <Icon name='youtube play' size='large' className={selectedTab.watch ? 'tabbar-item selected' : 'tabbar-item'}/>
        {
          selectedTab.watch ? <Divider className='selected-indicator'/> : null
        }
        
      </Button>

      <Button icon className={selectedTab.marketplace? 'navbar-item tab-icon selected': 'navbar-item tab-icon'} name='marketplace' onClick={handleOnClick}>
        <Icon name='warehouse' size='large' className={selectedTab.marketplace ? 'tabbar-item selected' : 'tabbar-item'}/>
        {
          selectedTab.marketplace ? <Divider className='selected-indicator'/> : null
        }
      </Button>

      <Button icon className={selectedTab.group? 'navbar-item tab-icon selected': 'navbar-item tab-icon'} name='group' onClick={handleOnClick}>
        <Icon name='group' size='large' className={selectedTab.group ? 'tabbar-item selected' : 'tabbar-item'}/>
        {
          selectedTab.group ? <Divider className='selected-indicator'/> : null
        }
      </Button>

      <Button icon className={selectedTab.game? 'navbar-item tab-icon selected': 'navbar-item tab-icon'} name='game' onClick={handleOnClick}>
        <Icon name='gamepad' size='large' className={selectedTab.game ? 'tabbar-item selected' : 'tabbar-item'}/>
        {
          selectedTab.game ? <Divider className='selected-indicator'/> : null
        }
      </Button>
    </Fragment>
  )
}
