import { BrowserRouter, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import xy from './getxy.json';

const FcstMain = () => {
  const ops = xy.map((item) => (
    <option value={item["행정구역코드"]} key={item["행정구역코드"]}>
      {item["1단계"]}
    </option>
  ));

  console.log(xy);

  // state 변수
    const [dt, setDt] = useState();
    // const [code, setCode] = useState();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();

  // 입력값을 가져오기 위한 ref 변수
    const txt1 = useRef();
    const sel1 = useRef();

  // dt가 변경되었을 때
  useEffect(() => {
    console.log(dt);
  }, [dt]);

  //useEffect(() => {
  //  console.log(area);
  //  let temp = xy.filter((item) => item["행정구역코드"] === code)[0];
 //   console.log(temp);
 //   setArea(temp["1단계"]);
  //  setX(temp["격자 X"]);
  //  setY(temp["격자 Y"]);
  //}, [code]);

  // 입력 이벤트
    const getDt = () => {
    let tdt = txt1.current.value; // 클릭이 될때마다 dt가 만들어짐. //ref는 반드시 current value 담. 
    tdt = tdt.replaceAll('-', '');
    setDt(tdt);
    console.log(tdt);
  };

    const getSel = () => {
    let temp = xy.filter((item)=> (item)["행정구역코드"] ===parseInt(sel1.current.value));
    console.log(temp);
    setArea(temp["1단계"]);
    setX(temp["격자 X"]);
    setY(temp["격자 Y"]);
}
  


    return(
        <BrowserRouter>
          <main className='container'>
               <article>
                    <header>
                    <nav>
                        <ul>
                          <li><strong>기상청 단기예보</strong></li>
                         </ul>
                         <ul>
                           <li><a href="#" role="button">단기예보 확인</a></li>
                           </ul>
                        </nav>
                        <h1> 단기예보 선택 </h1>
                    </header>
                    <div className="grid">          
                        <div>
                        <input ref={txt1} type='date' id='dt' name='dt' onChange={() => getDt()}/>  
                        </div>              
                            <select ref={sel1} id='sel' name='sel' onChange={() => getSel()}>
                                <option value=''>선택</option>
                                {ops}
                            </select>
                            <Link to={`/ultra/${dt}/${area}${x}${y}`} role='button'> 초단기예보</Link> 
                            <Link to={`/vilage/${dt}/${area}${x}${y}`} role='button'> 단기예보</Link> 
                    </div>
                
            </article>
            </main>
            </BrowserRouter>
    );
};
export default FcstMain;