import React from 'react';
import '../App.css'

class cTOF extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }

  export default cTOF;