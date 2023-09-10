import React, { useState } from 'react';
import data from './data';
import { useRef, useEffect } from 'react';


const MapB = () => {
  let [locate, setLocate] = useState(data);
  // const location = new window.naver.maps.LatLng(37.547701, 127.073569);
  
  useEffect(() => {
    let map = null;
    const initMap = () => {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.546457, 127.077408),
        zoom: 15.8,
      });
      // PolylineOverlay polyline = new PolylineOverlay();
      // polyline.setCoords(Arrays.asList(
      //     new LatLng(37.57152, 126.97714),
      //     new LatLng(37.56607, 126.98268),
      //     new LatLng(37.56445, 126.97707),
      //     new LatLng(37.55855, 126.97822)
      // ));
      // polyline.setMap(naverMap);

      locate.forEach(({lat, lng})=>{
        let marker = new window.naver.maps.Marker({
          position: { lat , lng },
          map: map
        });
        marker.addListener("click", () => {
          map.panTo(marker.position);
        });
        // markers.push(marker)
      })
    };
    initMap();
  }, []);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: "550px", // 720px
    height: "660px",
  };

  return (
    <React.Fragment>
      <div id="map" style={mapStyle}></div>
      {/* <Marker position={location} /> */}
    </React.Fragment>
  );
};

export default MapB;
