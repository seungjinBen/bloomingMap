import './App.css';
import MapB from './map';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  return (
    <div className="App">
      <header>
        <div className='logo'>청춘대로</div>
      </header>
      <main>
        <div className='background'>
          <div className='map'>
            <MapB/>
          </div>
          <button>행사 약도</button>
          <div className='listTitle'>행사 장소</div>
          <div className='list'></div>
        </div>
      </main>
      <section>
        <div className='goNext'>
          <div className='goMap'>행사 지도</div>
          <div className='goSchedule'>행사 일정</div>
        </div>
      </section>
    </div>
  );
}

export default App;
