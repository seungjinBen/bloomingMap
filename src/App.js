import './App.css';
import MapB from './map';
import React from 'react';
import { useState } from "react";
import { Routes, Route} from 'react-router-dom';
import styled, { ThemeProvider} from "styled-components";
import theme from "./theme";
import Listbar from './list';
import Entry from './entry';
import AboutMap from './about';
import logoImg from './img/logoImg.png'; import markerImg1 from './img/markerDrink.png'; 
import markerImg2 from './img/markerFood.png'; import markerImg3 from './img/markerFestival.png'; import markerImg4 from './img/markerEvent.png'; import gpsBack from './img/gpsBack.png';
import gpsMarker from './img/gpsMarker.png'; import modalDeleteImg from './img/modalDelete.png'; import bloomingMap from './img/bloomingMap.jpg'; import polygon from './img/polygon.png';

const Wrapper = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }

  width: 100vw;
  height: 100vh;
  background: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: 100px;
  height: 100px;
  background: white;
  margin: 5px;
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = ()  => setIsModalOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div className="App">
        <Routes>
          <Route path='/entry' element={<Entry/>}></Route>
          <Route path='/' element={
            <>
              <header>
                <div className='logo'><img src={logoImg} className='logoImg'/></div>
              </header>
              <main>
                <div className='background'>
                  <div className='category'>
                    <div className='cate1'><img src={markerImg1} className='cate1Img'/>일일호프</div>
                    <div className='cate2'><img src={markerImg2} className='cate2Img'/>푸드트럭</div>
                    <div className='cate3'><img src={markerImg3} className='cate3Img'/>행사 및 공연</div>
                    <div className='cate4'><img src={markerImg4} className='cate4Img'/>이벤트</div>
                  </div>
                  <div className='mapWrap'>
                    <MapB/>
                  </div>
                  <div>
                    <button className='modalButton' onClick={openModal}>약도 확인하기
                      <img src={polygon} className='polygon'/>
                    </button>
                    <Modal isOpen={isModalOpen} closeModal={closeModal}/>
                  </div>
                  <div className='gpsLabel'>
                    <img src={gpsBack} className='gpsBack'/>
                    <img src={gpsMarker} className='gpsMarker'/>
                  </div>
                  <div className='listWrap'>
                    <Listbar/>
                  </div>
                  {/* <div className='list'>
                    <div className='listTitle'>행사 장소</div>
                    <div className='listContent'></div>
                  </div> */}
                </div>
              </main>
              <section>
                <div className='goNext'>
                    <div className='goMap'>행사 지도</div>
                  {/* <GoMap/> */}
                  <div className='goSchedule'>행사 일정</div>
                </div>
                <div className='downBar'></div>
              </section>
            </>
          } exact={true}>
          </Route>
          <Route path='/about/:aboutId' element={<AboutMap/>}>
            {/* <Route path=":aboutID" element={<AboutMap />} /> */}
          </Route>
        </Routes>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}


export default App;

function Modal({isOpen, closeModal}){
  return (
    <div style={{display:isOpen ? "block" : "none"}}>
      <div className='modalBack'></div>
      <div className='modalFront'>
        <img src={bloomingMap} className='bloomingMap'/>
        <button className="modalDelete" onClick={closeModal}><img src={modalDeleteImg} className='modalDeleteImg'/></button>
      </div>
    </div>
  )
}



