import { useState , useEffect, useRef } from "react"
import CntInput from "./CntInput";
import CntDisp from "./CntDisp";
const Cnt = () => {

    useEffect(()=> { //상태값이 변경되면 상태값이 변경될 때마다 할 일을 찍음
        console.log("n", n) ;
    },[n]);

    
    const [n, setN] = useState(0) ;          //2개 값을 배열 안에 넣음. 초기값 n = 0; 

    
   

    return(
    <>    
    <main className="container">
        <CntInput n={n} setN={setN}/>
        <CntDisp n= {n}/>
    </main>
    </>
    );
}
export default Cnt;