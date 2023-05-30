import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";                            // recoilroot적용. 

import CntInput from "../111/CntInput";
import CntDisp from "../111/CntDisp";
const Cnt = () => {

  

    return (
        <BrowserRouter>
            <main className="container">
            <RecoilRoot>                                    
            <Routes>
                <Route path="/" element={<CntInput/>} />
                <Route path="/disp" element={<CntDisp/>} />
            </Routes>   
            </RecoilRoot>     
            </main>
        </BrowserRouter>

    );
}
export default Cnt;