import { useState , useEffect} from "react"
const UltraFcst = ({items, gubun}) => {
    const [items, setItems] = useState() 
    useEffect(()=> {
      
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageSrtFcst'
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

         
    }, []) ; 


    useEffect(()=>{ //4. dependency area에 items를 넣고 item이 변한 상황을 확인
        
    }, [items]); 

    return (           
    <>             
    {items && <FcstTable items={items} gubun='단기예보' />} 
    </>
    );
}
export default VillageFcst;