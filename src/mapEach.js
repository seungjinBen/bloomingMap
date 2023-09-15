import React from 'react';
import data from './data';
import { useRef, useEffect } from 'react';

const { naver } = window;

function MapEach({mapId}) {
  let locate = [...data];
  
  const content = [
    "<div>",
    `       <img src="/img/markerEvent.png" width="20" height="20 alt="장소 마커"/>`,
    "</div>",
  ].join("");

  useEffect(() => {
     locate.forEach(({id, lat, lng})=>{
      if(mapId == id){
        const mapPosition = new naver.maps.LatLng(lat, lng);
        const initMapEach = () => {
          const map = new naver.maps.Map("map", {
            center: mapPosition,
            zoom: 16,
          });
    
          let marker = new naver.maps.Marker({
              position: { lat , lng },
              map: map,
              icon:{ 
                content,
                size: new naver.maps.Size(50,52),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 26)
              }
            });
        };
        initMapEach();

      }
     })
  }, []);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: "550px", // 720px
    height: "600px",
  };

  return (
    <React.Fragment>
      <div id="map" style={{width:360+'px', height:256+'px', position:'relative'}} ></div>
      {/* <Marker position={location} /> */}
    </React.Fragment>
  );
};

export default MapEach;