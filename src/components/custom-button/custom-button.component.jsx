import React, { Component } from "react";

import "./custom-button.styles.scss";

class CustomButton extends Component {
   render() {
      const { children, isWhite, ...otherProps } = this.props;
      return (
         <button
            className={`${isWhite ? "white-button" : ""} custom-button`}
            {...otherProps}>
            {children}
         </button>
      );
   }
}

export default CustomButton;
