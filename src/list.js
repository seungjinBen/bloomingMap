import { useState, useEffect } from "react";
import data from './data';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import AboutMap from "./about";
import './about.css';
import aboutTime from './img/home/aboutTime.png'
import aboutEvent from './img/home/aboutEvent.png'

function Listbar(props) {
  const [isHovering, setIsHovering] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [content, setContent] = useState(0);

  // console.log(props.homeContent);

  let [locate, setLocate] = useState(data);
  const onMouseDown = (e)=>{
    if(!isDrag){
      setIsDrag(true);
      setDragY(e.pageY);
    }
  };

  const onMouseUp = (e)=>{
    if(isDrag){
      const deltaY = e.pageY - dragY; // 마우스 뗀 위치에서 시작 위치를 뺀 값
      if(deltaY<0){
        console.log("마우스를 아래로 쓸음");
        setContent(0);
      }
      else{
        console.log("마우스를 위로 쓸음");
        setContent(1);
      }
      setIsDrag(false);
    }
  }

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/about");
  };


  return (
    <div className={'list' + (content == 1 ? ' active':'')}
    onMouseOver={()=>setIsHovering(1)}
    onMouseOut={() => setIsHovering(0)}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}>
      <div className="listFixed">
        <div className="listUpperBar"></div>
        <div className="listUpper"></div>
        <div className='listTitle'>행사 리스트
      </div>
      <div onClick={()=>setContent(0)}>
        <div className={'listClose' + (content == 1 ? ' activeClose':'')}>✖</div>
      </div>
      </div>
      <div className='listContent'>
      {content === 1 ? locate.map((a, num)=>{
        return(
          <ListBarUp locate={locate[num]}></ListBarUp>
        )
      }):''}
      {/* {content === 1 ? goToMain():''} */}
      </div>
    </div>
  );
}

function ListBarUp(props){
  
  if(props.locate.id == 0){
    return(<AboutWithEvent id={props.locate.id}/>)
  }
  else if(props.locate.id == 1){
    return(<AboutWithoutEvent id={props.locate.id} backColor = "#FFEAB8"/>)
  }
  else if(props.locate.id == 2){
    return(<AboutWithoutEvent id={props.locate.id} backColor = "#DEECFF"/>)
  }
  else if(props.locate.id == 3){
    return(<AboutWithEvent id={props.locate.id} backColor = "#E3F6EA"/>)
  }
};

function AboutWithEvent({id, backColor}){
  let [locate, setLocate] = useState(data);

  const navigate = useNavigate();

  return(
    <div className="listBar">
      <div className="barMe" onClick={()=> {
        navigate(`/about/${id}`);
        // goToAbout2(); -> 이렇게 호출시 값 전달 안되고 두번 렌더링 됌.
        }}>
        <div className='aboutContent' style= {{backgroundColor: backColor}}>
          <div className='aboutTitle'>장소 : {id} 번</div>
          <div className='aboutExp'>행사 내용 설명 행사 내용 설명 행사 내용 설명</div>
          <div className='aboutTime'>
              <img src={aboutTime} className='aboutTimeImg'/>
              <p>일정</p>
              <div className='aboutDate'>
                  <div className='aboutDay'>9월21일(목)</div>
                  <div className='aboutHour'>10:00 - 02:00</div>
              </div>
          </div>
          <div className='aboutLine'></div>
          <div className='aboutEvent'>
              <img src={aboutEvent} className='aboutEventImg'/>
              <p>이벤트</p>
              <div className='aboutEventCont'>가게와  같은 색의 옷을 입고 오면 상품 증정해 드립니다.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutWithoutEvent({id, backColor}){
  let [locate, setLocate] = useState(data);

  const navigate = useNavigate();

  return(
    <div className="listBar">
      <div className="barMe" onClick={()=> {
        navigate(`/about/${id}`);
        // goToAbout2(); -> 이렇게 호출시 값 전달 안되고 두번 렌더링 됌.
        }}>
        <div className='aboutContent2' style= {{backgroundColor: backColor}}>
          <div className='aboutTitle'>장소 : {id} 번</div>
          <div className='aboutExp'>행사 내용 설명 행사 내용 설명 행사 내용 설명</div>
          <div className='aboutTime'>
              <img src={aboutTime} className='aboutTimeImg'/>
              <p>일정</p>
              <div className='aboutDate'>
                  <div className='aboutDay'>9월21일(목)</div>
                  <div className='aboutHour'>10:00 - 02:00</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Listbar;
  