import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const ModalContainer =styled.div`
position: absolute;
top: 1px;
height: 100%;
padding: 12px;
background-color: grey;
border: 1px solid grey;
`
const ModalContent =styled.div`
background: #fff;
width: 24%;
margin: auto;
padding: 8rem;
`
const Modal = ({ children }) => (
  ReactDOM.createPortal(
    <ModalContainer>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalContainer>,
    document.getElementById('modal')
  )
);

export default Modal;