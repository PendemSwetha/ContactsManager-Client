import React, { useState } from 'react';
import styled from 'styled-components';

const ToolTip = styled(({ className, message, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={className}>
      <span
        className="child"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      <TooltipContainer message={message} isVisible={isVisible} />
    </div>
  );
})`
  position: relative;

  /* to make the text be inline with the rest of the sentence */
  display: inline-block;

  .child {
    /* to indicate to the user that the text has interactions */
    text-decoration: underline;
  }
`;

const TooltipContainer = styled(({ className, message, isVisible }) => (
  <div className={className}>
    <div className="arrow-box">{message}</div>
  </div>
))`
  position: absolute;
  
  /* FIXME */
  top: -200%;
  left: -12px;

  /* to make things pretty */
  color: white;
  background: #454545;
  border-radius: 4px;
  padding: 4px 12px;

  /* to stop the tooltip from wrapping to multiple lines */
  white-space: nowrap;

  /* to stop the tooltip from capturing the mouse events */
  pointer-events: none;

  ${(props) => (props.isVisible ? 'display: block' : 'display: none')}};

  /* to draw the arrow */
  .arrow-box:after {
    position: absolute;
    border: 8px solid transparent;
    border-top-color: #454545;
    content: " ";
    height: 0;
    width: 0;
    top: 100%;
    left: 20px;
  }
`;

export default ToolTip;

