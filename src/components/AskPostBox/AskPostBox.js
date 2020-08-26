import React from 'react'
import './AskPostBox.scss'
import { Segment , Image, Button} from 'semantic-ui-react'

export default function AskPostBox({openPostForm}) {
  return (
    <Segment className='ask-post-box-wrapper'>
      <div className='avatar-container'>
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' className='avatar-img' circular />
      </div>
      <div className='ask-button-container'>
        <Button className='ask-button' fluid onClick={openPostForm}>
          <span>What are your thinking?</span>
        </Button>
      </div>
    </Segment>
  )
}
