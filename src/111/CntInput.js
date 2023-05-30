import { Link } from "react-router-dom" ;
import { CntAtoms, CntAtomsTwice } from "./CntAtoms"  ;
import { useRecoilState } from "recoil";
const CntInput = () => {
    const [n, setN] = useRecoilState(CntAtoms);

    const downN = (e) => {
        e.preventDefault();     // form이 있기 때문에 버튼 누를때마다 자동 새로고침 -> 이를 방지하기 위해 prevent
        if (n - 1 < 0) setN(0); //음수는 0 
        else setN(n -1) ;   // n 그자체에 뭔가 조작을 가할 수 없음. 
    }

    const upN = (e) => {    //값을 넘겨줄때는 button에서 반드시 콜백함수 사용.
        e.preventDefault();
        if ( n + 1 > 100) setN(100);    //100넘어가면 안되게 
        else setN(n + 1) ;

        console.log(n) //바뀌고 난 다음 useEffect에서 일어남. 
    }


    return (
    <article>
        <form>
            <div className="grid">
            <div></div>
            <div><button onClick={downN}>-</button></div>           
            <input type="text" id="number" name="number" readOnly value={n} ></input>
            <div><button onClick={upN}> + </button></div>
            <div></div>  
        </div>
        </form>
        <footer>
        <Link to='/disp'>출력화면이동</Link>
        </footer>
    </article>
    );
} 
export default CntInput;