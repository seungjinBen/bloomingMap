import './entry.css';
import { useNavigate } from 'react-router-dom';
import homeLogo from './img/home/homeLogo.png'
import homeExp from './img/home/homeExp.png'
import homeButton from './img/home/homeButton.png'
import homeBack from './img/home/homeBack.png'

function Entry(){
    const navigate = useNavigate();
  
    const goToHome = () => {
      navigate("/");
    };
    return(
      <>
      <div className='homeBackground'>
        <img src={homeLogo} className='homeLogo'/>
        <img src={homeExp} className='homeExp'/>
        <img src={homeBack} className='homeBack'/>
        <div className='homeCont'>
        광진구에서는 9월 청년 주간을 맞이해<br/>
        1회 광진구 청년의 날 축제인<br/>
        "2023 청춘대로" 축제를 개최합니다.<br/>
        <br/>
        2023. 9. 21.(목) ~ <br/>
        22.(금) 13:00~21:00 
        </div>
        <button className='entryGo' onClick={()=>{goToHome()}}>행사 살펴보기</button>
      </div>
      </>
    )
};

export default Entry;