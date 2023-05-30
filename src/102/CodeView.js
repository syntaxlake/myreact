import CodeGubun from "./CodeGubun";
import { RecoilRoot } from "recoil";
import CodeList from "./CodeList";
const Codeview = () => {

    return(
        <>
        <RecoilRoot>
        <main className="container">
        <h1>code</h1>
        <ul>
            <CodeGubun/>
            <CodeList/>
        </ul>
        </main>
        </RecoilRoot>
        </>
    );
}

export default Codeview;