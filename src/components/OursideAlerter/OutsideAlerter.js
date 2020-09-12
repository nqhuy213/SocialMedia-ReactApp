/**
 * A component to handle clik outside of a div
 * Reference: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component?fbclid=IwAR0NczF2u2ErdcMpRj5Ba5lJ9XtKRO2SvQArikS48oLZq06zBF2IUmCjfLA
 */

import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.onOutsideClicked(event);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  onOutsideClicked: PropTypes.func.isRequired,
};
