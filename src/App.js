//import logo from './logo.svg';
// import Hello from './01/Hello';

//import './App.css';
//import Boxcopy from './03/Box copy';
//import MyClock from './02/MyClock';
//import MyDiv from './04/MyDiv' ;
//import Frcst from './05/Frcst';
//import MyRef from "./07/MyRef";
//import Gallery from './081/Gallery81'
//import RouteHome from './09/RouteHome';
import Fcst from './10/Fcst';

function App() {
  return (                                              // 사용자정의함수는 반드시 return이 들어가야함. 최소 return 1개. return에는 tag하나만 있어야함. (자식들 포함 div 하나 있어야 함. root div에 1개만 붙을 수 있음.)
      // <MyClock/> 
      // <MyClock/>
      // <Boxcopy/>
      // <MyDiv />
      // <MyRef/>
      //<RouteHome/>
      <Fcst/>
    );
}

export default App;