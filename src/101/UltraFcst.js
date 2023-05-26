import { useState , useEffect} from "react";
import code from './getcode.json';
import FcstTable from './FcstTable' ;
const UltraFcst = () => {
    const [items, setItems] = useState() 
    useEffect(()=> {
      
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst'
        url = url + `?serviceKey=%2BGVqhh8TZ2VwLNb1GwpgHWIuf04eTLsidieUvFljHbOEwStUoIvDJ4UGzBbJuhIq3i8e19e3%2BdFgGOd4GX3gVQ%3D%3D`
        url = url + `&numOfRows=60`; //요청변수에 붙임. 
        url = url + `&pageNo=1`;
        url = url + `&base_date=20230525`;
        url = url + `&base_time=0630`;
        url = url + `&nx=55`;
        url = url + `&ny=127`;
        url = url + `&dataType=json`;

        console.log(url); 
    
        fetch(url)
        .then((resp) => resp.json()) 
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err)); 

         
    }, []) ; 


    useEffect(()=>{ 
        
    }, [items]); 

    return (           
    <>             
    {items && <FcstTable items={items} gubun='초단기예보' />} 
    </>
    );
}
export default UltraFcst;