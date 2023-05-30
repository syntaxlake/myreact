import CodeList from "./CodeList";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { CodeAtom } from "./CodeAtom";

const CodeGubun = () => {
    const [sel, setSel] = useRecoilState(CodeAtom);

    const selItem = (e) => {
        console.log(e.target.value)
        setSel(e.target.value) ;
        console.log(sel);
    }

    useEffect(() => {
        console.log(sel);
    },[sel])

    return(
        <>
        <main className="container">
        <article>
        <form>
            <div className="grid">
            <div>
            <select id="sel" name="sel" onClick={selItem}>
                <option value="">선택</option>
                <option value="단기예보">단기예보</option>
                <option value="초단기예보">초단기예보</option>
            </select>
            </div>
            </div>   
        </form>
        </article>
        </main>
        </>
    );
}
//<li> {sel === '' ?<h1>값을 선택하세요.</h1> : <CodeList sell={sel} />  }</li>                

export default CodeGubun;