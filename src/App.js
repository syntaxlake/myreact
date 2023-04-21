//import logo from './logo.svg';
// import Hello from './01/Hello';

import './App.css';
// import MyClock from './02/MyClock';
import Box from './03/Box' ;

function App() {
  return (                                              // 사용자정의함수는 반드시 return이 들어가야함. 최소 return 1개. return에는 tag하나만 있어야함. (자식들 포함 div 하나 있어야 함. root div에 1개만 붙을 수 있음.)
      //  <MyClock/> 
      <Box/>
    );
}

export default App;