import './about.css';
import MapEach from './mapEach';
import { useParams } from 'react-router-dom';
import logoImg from './img/logoImg.png';
import aboutTime from './img/home/aboutTime.png'
import aboutEvent from './img/home/aboutEvent.png'


function AboutMap(mapId){
    const aboutId = useParams().aboutId;

    return(
        <>
        <header>
            <div className='logo'><img src={logoImg} className='logoImg'/></div>
        </header>
        <main>
            <div className='background'>
                <div className='mapWrap'>
                    <MapEach mapId = {aboutId}/>
                </div>
                <div className='aboutWrap'>
                    <div className="listUpper2"></div>
                    <div className='aboutContent'>
                        <div className='aboutTitle'>장소 : {aboutId} 번</div>
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
                {/* <div className='list'>
                    <div className='listTitle'>행사 장소</div>
                    <div className='listContent'></div>
                </div> */}
            </div>
        </main>
        <section>
            <div className='goNext'>
                <div className='goMap2'>행사 지도</div>
                <div className='goSchedule2'>행사 일정</div>
            </div>
            <div className='downBar2'></div>
        </section>
        </>
    )
}

export default AboutMap;
