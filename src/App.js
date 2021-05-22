import React, { useRef } from 'react';
import './App.css';
import styled from 'styled-components';
import Modal from './components/Modal';

function App() {
   const modalRef = useRef();

   const openModal = () => {
      modalRef.current.openModal();
   };

   return (
      <div className='App'>
         <Btn onClick={openModal}> Open Modal</Btn>
         <Modal ref={modalRef}>
            <h2>Simple and reusable modal with React hooks </h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <a href='http://www.ghofrane.com/' target='blank'>
               www.ghofrane.com
            </a>
         </Modal>
      </div>
   );
}

const Btn = styled.button`
   width: 100px;
   height: 100px;
   border-radius: 50%;
   background: #000;
   cursor: pointer;
   transition: all 0.4s ease-in-out;

   font-weight: 900;
   font-size: 17px;

   color: #f3ca20;

   &:hover {
      transform: scale(1.1);
   }
`;

export default App;
