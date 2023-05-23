import { useParams } from 'react-router-dom';
import FcstTable from './FcstTable';

const UltraSrtFcst = () => {
  const {dt} = useParams().dt;
  const {area} = useParams().area;
  const {x} = useParams().x;
  const {y} = useParams().y;

  console.log(dt);
  console.log(area);
  console.log(x);
  console.log(y);

  const getData = (dt, x, y) => {
    let apikey = `%2BGVqhh8TZ2VwLNb1GwpgHWIuf04eTLsidieUvFljHbOEwStUoIvDJ4UGzBbJuhIq3i8e19e3%2BdFgGOd4GX3gVQ%3D%3D`
    let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst'
    url = url + `serviceKey=${apikey}`
    url = url + `&numOfRows=10`
    url = url + `&pageNo=1`
    url = url + `&base_date=${dt}`
    url = url + `&base_time=0630`
    url = url + `nx=${x}`
    url = url + `ny=${y}`

    console.log(url); 
    fetch (url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err)) 
  }


  return (
    <>
      <main className='container'>
        <article>
          <header>
            <h1>초단기예보 선택</h1>
            <select>
            <option value="" disabled selected>Select</option>
            <option>…</option>
            </select>
          </header>
          <h1>초단기예보</h1>
          <p>Date: {dt}</p>
          <p>Area: {area}</p>
          <p>X: {x}</p>
          <p>Y: {y}</p>
          <FcstTable item={area} />
        </article>
      </main>
    </>
  );
};

export default UltraSrtFcst;