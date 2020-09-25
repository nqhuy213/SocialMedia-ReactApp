import React, { Fragment, useRef, useCallback} from "react";
import PropTypes from 'prop-types'

export default function InfiniteScroll(props) {
  const observer = useRef();
  const lastElementCallback = useCallback(node =>{
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        props.bottomCallback()
      }
    })
    if(node) observer.current.observe(node)
  }, [])


  let ref = lastElementCallback
  return (
    <Fragment>
      {React.Children.map(props.children, (child, i) => {
        if(React.Children.count(props.children) === i + 1) {
          return React.cloneElement(child, {ref})
        }else{
          return child
        }
      })}
    </Fragment>
  )
}

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  bottomCallback: PropTypes.func.isRequired,
};
