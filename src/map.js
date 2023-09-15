import React, { useState } from 'react';
import data from './data';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AboutMap from './about';

const { naver } = window;

const MapB = () => {
  
  let locate = [...data];
  const [myLocation, setMyLocation] = useState({  });
  const [placeId, setId] = useState(-1);

  const content = [
    "<div>",
    `       <img src="/img/markerDrink.png" width="20" height="20" alt="장소 마커"/>`,
    "</div>",
  ].join("");

  const navigate5 = useNavigate();

  function GogoAbout(){
    placeId == -1 ? AboutMap(placeId) : console.log('안녕');
    useEffect(()=>{console.log('안녕하십')}, []);
  }

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            setMyLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
    } else {
        window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  useEffect(() => {
      if (typeof myLocation !== "string") {
          const currentPosition = [myLocation.latitude, myLocation.longitude];

          const initMap = () => {
            const map = new naver.maps.Map("map", {
              center: new naver.maps.LatLng(37.546457, 127.077408),
              zoom: 15,
              minZoom: 14
            });
      
            locate.forEach(({id, lat, lng})=>{
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
              marker.addListener("click", () => {
                map.panTo(marker.position);
                // setId(id);
                // GogoAbout();
                navigate5(`/about/${id}`);
              });
              // markers.push(marker)
            })
              const currentMarker = new naver.maps.Marker({
                position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
                map: map,
            });
          };
          initMap();
      }
  }, [myLocation]);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: "550px", // 720px
    height: "600px",
  };

  return (
    <React.Fragment>
      <div id="map" style={{width:360+'px', height:604+'px', position:'relative'}} ></div>
      {/* <Marker position={location} /> */}
    </React.Fragment>
  );
};

export default MapB;

  
  // useEffect(() => {
  //   // let map;
  //   const initMap = () => {
  //     const map = new naver.maps.Map("map", {
  //       center: new naver.maps.LatLng(37.546457, 127.077408),
  //       zoom: 15,
  //       minZoom: 14
  //     });

  //     locate.forEach(({id, lat, lng})=>{
  //       let marker = new naver.maps.Marker({
  //         position: { lat , lng },
  //         map: map,
  //         icon:{ 
  //           url: './resources/img/foodBack.png',
  //           size: new naver.maps.Size(50,52),
  //           origin: new naver.maps.Point(0, 0),
  //           anchor: new naver.maps.Point(25, 26)
  //         }
  //       });
  //       marker.addListener("click", () => {
  //         map.panTo(marker.position);
  //         AboutMap(id);
          
  //         goToAbout();
  //       });
  //       // markers.push(marker)
  //     })
  //   };
  //   initMap();
  // }, []);
// 현재 위치 받아와서 마커 찍기
