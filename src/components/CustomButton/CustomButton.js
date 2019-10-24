import React from 'react';

import { CustomButtonContainer } from './CustomButtonContainer';

// import styled, { css } from 'styled-components';

// import './CustomButton.scss';

const CustomButton = ({ children, ...props }) => {
  // const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => {
  return (
    <div>
      <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    </div>
    // <button 
    //   className={`${inverted ? 'inverted': ''} ${
    //     isGoogleSignIn ? 'google-sign-in' : ''
    //   } custom-button`} 
    //   {...otherProps}
    // >
    //   {children}
    // </button>
  );
};

export default CustomButton;