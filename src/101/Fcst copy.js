import { useState , useEffect, useRef } from "react"
import code from "./getcode.json" // getcode 가지고와서 radiobox 만드는데 씀. 
const FcstTable = (items, gubun) => {
    //2. useState변수 : 변수값이 변경이 되면 재 렌더링이 일어남. fetch에 따라 바꿔옴 
    const [items, setItems] = useState() ;           //변경을 위해서는 set을 붙여야함. //fetch 끝나면 items가 바뀜. 
    const [trTags, settrTags] = useState () ; //기상정보 끌어온게 달라지므로 use state. 
    const [opTags, setopTags] = useState () ; //선택 메뉴 바뀌게 변경
    const sel = useRef(); //ref변수 만들어서 select 메뉴
    //1. 렌더링이 될 때 한번 실행
    useEffect(()=> {
      
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst'
        url = url + `?serviceKey=%2BGVqhh8TZ2VwLNb1GwpgHWIuf04eTLsidieUvFljHbOEwStUoIvDJ4UGzBbJuhIq3i8e19e3%2BdFgGOd4GX3gVQ%3D%3D`
        url = url + `&numOfRows=60`; //요청변수에 붙임. 
        url = url + `&pageNo=1`;
        url = url + `&base_date=20230524`;
        url = url + `&base_time=0630`;
        url = url + `&nx=55`;
        url = url + `&ny=127`;
        url = url + `&dataType=json`;

        console.log(url); //3. fetch data를 먼저 달것. 
    
        fetch(url)
        .then((resp) => resp.json()) 
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err)); 

          //12. code 만들기 (초단기예보)
          let tempcd =  code.filter((i) => i["예보구분"] === gubun) //getcode에서 일부만 골라서 가져오므로 filter
          tempcd = tempcd.map((i) => 
                <option key = {i['항목값']} value ={i['항목값']}>{i['항목명']}({i['항목값']})</option> //항목값을 항목명으로 change. 
          )       //13. filter된 option은 전부 뿌려야 하므로 map
          console.log('code', code) ; //14. getcode가 찍히는지 확인. 
          setopTags(tempcd);
          console.log('tempcd', tempcd) ; //15. 초단기예보만 골라져서 찍히는지 확인. 
    }, []) ; 


    useEffect(()=>{ //4. dependency area에 items를 넣고 item이 변한 상황을 확인
        
}, [items]); 

    //사용자 정의 : 16. select change에 따라서 -> showitem 불러오기 재렌더링 막기 위해 e.prevent
    const showItem = (e) => {
        e.preventDefault();
        //console.log(e.target.value) //9. ref로 쓸 수도 있음.
        console.log('sel', sel.current.value) //ref 변수 확인  

        if(items === undefined) return ; //4. item이 없으면 만들지 않을 것. 
        let temp = items.filter((i) => i.category === sel.current.value); //select 된 것에 맞춰서 item을 filtering 하여 뿌림.  
        let tempcd = code.filter((i) =>
            i["예보구분"] === gubun &&
            i["항목값"] === sel.current.value
        );
        tempcd = tempcd[0] ; // 5. object로 만듬
        //let temp = items.map((i) => ( // items를 돌아서 10개 만듬. return. 항목이 4개므로 4줄이 필요. 
            
        console.log('tempcd', tempcd)
        let skyobj = {'1' : '🌞', '3':'☁', '4':'⛅'} // . sky코드에 맞게 맑음 등 출력하는 변수 if 안에 if못들어가므로 obj처리
        let ptyobj = {'0' : '없음', '1' : '비', '2' : '비,눈', '3' : '눈', '5' : '빗방울', '6' : '빗방울눈날림', '7' : '눈날림'}
        temp = temp.map((i, idx) =>  // 6. 하나 돌 때마다 tr(한줄)이 생겨야함.  //
            <tr key = {i.category + idx}>
                <td>{tempcd["항목명"]}</td>
                <td>{i.fcstDate}</td>
                <td>{i.fcstTime}</td>
                <td>
                    {(i.category === 'SKY') ? skyobj[i.fcstValue]  // 17. 카테고리가 sky이면 skyobj 불러옴. 
                    : (i.category === 'PTY')? ptyobj[i.fcstValue]   // 18. 카테고리가 pty이면 ptyobj 불러옴. 
                    : i.fcstValue + tempcd["단위"]} 
                </td>
            </tr>                              
        );
        console.log('items', items)   
        console.log('temp', temp)
        settrTags(temp) ; //use state적용. 
    };
    return (                        //7. data 가져온걸 뿌림. 10개 object에 대한 행을 만들어야 함. -> 10개를 다 돔. map 11. onchange show 적용. 
        <main className="container">
            <article>
                <header>
                    <form>
                    <div className="grid">
                        <div><h1>기상청 초단기예보</h1></div>
                        <div>
                            <select ref={sel} name='sel' onChange={showItem}>   
                                <option val=''>선택</option>
                                {opTags}
                            </select>
                        </div>

                    </div>
                    </form>
                </header>
                <table>
                    <thead>
                    <tr>
                        <th scope="col">자료구분코드</th>
                        <th scope="col">예측일자</th>
                        <th scope="col">예측시간</th>
                        <th scope="col">예보값</th>
                    </tr>
                    {items && trTags}
                    </thead>
                </table>
            </article>
        </main>
    )               // 8. items가 있으면 trtags를 만듬.-> items && trTags items값을 가져오면 trtags가 만들어짐. 
}

export default FcstTable;