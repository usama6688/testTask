import React from 'react';
import { useState } from "react";
import ModelComponent from "./components/Modal";
import './App.css';
import { Modal } from 'react-bootstrap';
import { calenderImg, closeImg, locationImg, userPlaceholderImg } from "./assets";

function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="App">

      <button className='modalOpenBtn' onClick={openModal}>Open Modal</button>

      <ModelComponent
        size="md"
        show={modalIsOpen}
        handleClose={closeModal}
        title="Choose the form of payment"
        className="ml-0"
      >

        <Modal.Title className="d-flex" >
          <img src={closeImg} alt="" onClick={closeModal} className='mr-2 closeIcon' />
        </Modal.Title>

        <Modal.Body className='customScroll'>

          <div className="logoutDiv">
            <div className="media d-flex align-items-center">
              <span className='imgSpan'>J</span>
              <div className="media-body ml-3">
                <h5 className="mt-0 userName">John</h5>
                <p className='userNum'>(88) 99602-2404</p>
              </div>
            </div>

            <button className='logoutBtn'>Log out</button>
          </div>


          <div className='mt-3'>
            <label className='labels'>Selected service</label>

            <div className="userDetailDiv">
              <div className="media d-flex align-items-center">
                <img src={userPlaceholderImg} alt="" className='userImg' />
                <div className="media-body ml-3">
                  <h5 className="mt-0 userName mb-3">Japanese lessons</h5>
                  <p className='dateTime'><img src={calenderImg} alt="" /> Dec 2, 2020 · 11:00 · 1 month</p>
                  <p className='locationName'><img src={locationImg} alt="" /> Client`s place</p>
                </div>
              </div>

              <h6 className='codeNum'>Rp 1.350.000</h6>
            </div>
          </div>


          <div className='mt-3'>
            <label className='labels'>Enter your location</label><br />

            <input type="text" className='inputFields' placeholder='Enter address' />

          </div>


          <div className='mt-3'>
            <label className='labels'>Note (optional)</label><br />

            <input type="text" className='inputFields' placeholder='Enter text here' />

          </div>


          <div className='mt-3'>
            <label className='payLabels'>Choose a way to pay</label><br />

            <div className="row">
              <div className="col-4 pr-2">
                <input
                  type="radio"
                  className="hideCheckbox"
                  id="cash"
                  name='cards'
                />
                <label className="payCheckbox" htmlFor="cash">
                  Cash
                </label>
              </div>

              <div className="col-4 pl-2 pr-2">
                <input
                  type="radio"
                  className="hideCheckbox"
                  id="credit"
                  name='cards'
                />
                <label className="payCheckbox" htmlFor="credit">
                  Credit card
                </label>
              </div>

              <div className="col-4 pl-2">
                <input
                  type="radio"
                  className="hideCheckbox"
                  id="eWallet"
                  name='cards'
                />
                <label className="payCheckbox" htmlFor="eWallet">
                  eWallet/Virtual bank
                </label>
              </div>
            </div>

          </div>


          <div className='mt-3 d-flex align-items-center'>
            <input
              type="checkbox"
              id="check"
            />

            <label className='labelCheckbox ml-3 mb-0' htmlFor="check">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href="#">do eiusmod</a></label>

          </div>

        </Modal.Body>

        <Modal.Footer>
          <div className="modalFooter">
            <button className='prevBtn bg-white text-dark'>Previous</button>
            <button className='nextBtn'>Next</button>
          </div>
        </Modal.Footer>

      </ModelComponent>
    </div>
  );
}

export default App;
