import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = forwardRef((props, ref) => {
   const [display, setDisplay] = useState(false);

   useImperativeHandle(ref, () => {
      return {
         openModal: () => open(),
         close: () => close(),
      };
   });

   const open = () => {
      setDisplay(true);
   };
   const close = () => {
      setDisplay(false);
   };

   if (display) {
      return ReactDOM.createPortal(
         <ModalWrapper className='modal-wrapper'>
            <ModalBackground onClick={close} className='modal-background' />

            <ModalBox className='modal-box'>{props.children}</ModalBox>
            <ModalCloas onClick={close}> X </ModalCloas>
         </ModalWrapper>,
         document.getElementById('modal-root')
      );
   }
   return null;
});
const ModalWrapper = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
`;

const ModalBackground = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 100;
   background-color: rgba(0, 0, 0, 0.5);

   transition: all 0.4s ease-in-out;
`;
const ModalBox = styled.div`
   position: relative;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   max-width: calc(100% - 100px);
   width: 700px;
   overflow-y: auto;
   background-color: white;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
   z-index: 101;
   padding: 25px;

   border-radius: 10px;
`;
const ModalCloas = styled.button`
   position: absolute;
   top: 0;
   right: 0;
   width: 25px;
   height: 25px;
   color: #fff;
   margin: 10px;
   padding: 10px;
   border-radius: 50px;
   cursor: pointer;
   background: black;

   display: flex;
   justify-content: center;
   align-items: center;

   font-weight: 700;
   font-size: 12px;
   z-index: 102;
   transition: opacity 0.4s ease-in-out;

   &:hover {
     opacity:.7;
   }
`;


export default Modal;
