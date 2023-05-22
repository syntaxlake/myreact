import { useLocation } from 'react-router-dom';

import qs from 'query-string' ;

const RoutePage2 = () => {
    let location = useLocation().search ;
    console.log("location", location) ;
    let item = qs.parse(location).item;
    console.log("item", item) ;

    const fruits = ['사과🍎', '바나나🍌', '포도🍇'] ;
    let tag = fruits.includes(item) ?  "과일입니다." : "과일이 아닙니다." ;
    return (
        <>
            <h1>Page2</h1>
            <p>{`${item}는 ${tag}`}</p>
        </>
    );
}
export default RoutePage2 ;