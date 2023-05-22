import {Link} from 'react-router-dom' ;
import { useNavigate} from "react-router-dom";

const RouteHome = () => {
    const navigate = useNavigate() ;
    // const url = {
    //     '사과🍎' : '/p2?item=사과🍎' ,
    //     '바나나🍌' : '/p2?item=바나나🍌' ,
    //     '당근🥕' : '/p2?item=당근🥕'
    // }

    const goUrl = (item) => {
        let url = `/p2?item=${item}` ; 
        navigate(url) ;
           
        // navigate(url[item]);
        // if (item === '사과🍎') navigate('/p2?item=사과🍎');
        // else if (item === '바나나🍌') navigate('/p2?item=바나나🍌');
        // else if (item === '당근🥕') navigate('/p2?item=당근🥕');
    }

    return (
        <>
            <h1>HOME</h1>

            <h2>파라미터 전송1</h2>
            <ul>
                <li><Link to='/p1/사과🍎'>사과🍎</Link></li>
                <li><Link to='/p1/바나나🍌'>바나나🍌</Link></li>
                <li><Link to='/p1/당근🥕'>당근🥕</Link></li>
            </ul>

            <h2>파라미터 전송2</h2>
            <button onClick={() => goUrl('사과🍎')}>사과🍎</button>
            <button onClick={() => goUrl('바나나🍌')}>바나나🍌</button>
            <button onClick={() => goUrl('당근🥕')}>당근🥕</button>
        </>
    );
}
export default RouteHome ;