import React, {useState} from 'react'
import styled from "styled-components";

import "./App.css"

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };
  
  const Button = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    padding: 15px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    justify-content: flex-end;
    margin: 10px 5px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    vertical-align: middle;

      background-color: ${(props) => theme[props.theme].hover};
    }
  `;
  Button.defaultProps = {
    theme: "blue"
  };


  

  

  
  export default function MainButton(props) {
    return (
      <>
        <div style={{float: 'right'}}>
          <Button>{props.name}</Button>
        </div>
     

      </>
    );
  }
  
