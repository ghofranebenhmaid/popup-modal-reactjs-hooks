import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Modal from './components/Modal';

function App() {
   const [modalState, setModalState] = useState(false);
   const toggleModalState = () => {
      setModalState(!modalState);
   };

   return (
      <Container className='App'>
         <ModalBackground
            SdalBackground
            className={`modalShowing-${modalState}`}
            onClick={() => toggleModalState()}
         >
            <ModalCloas onClick={() => toggleModalState()}> X </ModalCloas>
         </ModalBackground>
         <ModalInner className={`modalShowing-${modalState}`}>
            <h2>Pop up modal - Reactjs (Hooks) </h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
               ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
               dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
               ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
               dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
            </p>

            <a href='http://www.ghofrane.com/' target='blank'>
               www.ghofrane.com
            </a>
         </ModalInner>
         <Btn onClick={() => toggleModalState()}> Click Me</Btn>
      </Container>
   );
}
const Container = styled.div`
   position: relative;
`;

const ModalBackground = styled.div`
   pointer-events: none;
   background: rgba(0, 0, 0, 0.7);
   position: absolute;
   width: 100%;
   height: 100%;
   opacity: 0;
   display: flex;
   transition: opacity 0.4s ease-in-out;
   &.modalShowing-true {
      opacity: 1;
      pointer-events: visible;
   }
`;
const ModalCloas = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   width: 10px;
   height: 10px;
   color: #fff;
   margin: 15px;
   padding: 10px;
   border-radius: 50px;
   cursor: pointer;
   background: black;

   display: flex;
   justify-content: center;
   align-items: center;

   font-weight: 700;
   font-size: 15px;
`;
const ModalInner = styled.div`
   opacity: 0;
   width: 750px;
   overflow-y: scroll;
   max-width: calc(100% - 60px);
   margin: auto;
   background: white;
   padding: 15px;
   border-radius: 10px;
   z-index: 1;
   pointer-events: none;
   &::-webkit-scrollbar {
      display: none;
   }

   &.modalShowing-true {
      opacity: 1;
      pointer-events: visible;
   }
`;

const Btn = styled.button`
   width: 100px;
   height: 100px;
   border-radius: 50%;
   background: #000;
   cursor: pointer;
   position: absolute;
   transition: all 0.4s ease-in-out;

   font-weight: 900;
   font-size: 17px;

   color: #f3ca20;

   &:hover {
      transform: scale(1.1);
   }
`;
export default App;
