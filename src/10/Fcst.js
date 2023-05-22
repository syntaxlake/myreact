import { BrowserRouter, Routes , Route} from "react-router-dom";

import FcstNav from "./FcstNav";
import FcstMain from './FcstMain' ;
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from './VilageFcst' ; 

const FcstMain = () => {

    return(
        <BrowserRouter>
            <main className='container'>
                <RouteNav />
                <Routes>
                    <Route path='/' element={<FcstMain />} />
                    <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst />} />
                    <Route path='/vilage/:dt/:area/:x/:y' element={<VillageFcst />} />
                </Routes>
            </main>
        </BrowserRouter>
       
    );
}

export default FcstMain;