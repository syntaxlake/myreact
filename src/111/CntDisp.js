import { Link } from "react-router-dom"
import { CntAtoms, CntAtomsTwice } from "./CntAtoms"  ;
import { useRecoilValue } from "recoil";

const CntDisp = () => {
//const CntDisp = (probs) => {
   // const n = probs.n ;
    const n = useRecoilValue(CntAtoms); // value와 set을 따로 분리시킴. set을  안쓰면 안해놔도 됨. 
    const n2 = useRecoilValue(CntAtomsTwice);
    return(
        <article>
        <div className="grid">
        <div>
        <h1>입력값: {n}  </h1>
        </div>
        <div>
        <h1>입력값2배: {n2} </h1>
        </div>
        </div>
        <footer>
            <Link to='/'>입력화면이동</Link>
        </footer>
        </article>
    )
}

export default CntDisp;