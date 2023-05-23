import { useParams } from 'react-router-dom';
import FcstTable from './FcstTable';
import { useState, useEffect} from 'react';

const UltraSrtFcst = () => {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;

  const [datas, setDatas] = useState() ;
  useEffect(()=>{
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=%2BGVqhh8TZ2VwLNb1GwpgHWIuf04eTLsidieUvFljHbOEwStUoIvDJ4UGzBbJuhIq3i8e19e3%2BdFgGOd4GX3gVQ%3D%3D&numOfRows=10&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=json`
    // 처음 한번만 fetch
    console.log(url)
    
    fetch(url)
    .then((resp) => resp.json())
    .then((data)=> setDatas(data.response.body.items))
    .catch((err) => console.log(err))
  }, [])

  
  return (
    <>
      <main className='container'>
        <article>
        <select>
          <option value="" disabled default value>Select</option>
           <option>…</option>
        </select>
          <header>
            <h1>{area}</h1>
            {datas && <FcstTable datas={datas} gubun="초단기예보" />}
          </header>
        </article>
      </main>
    </>
  );
};

export default UltraSrtFcst;