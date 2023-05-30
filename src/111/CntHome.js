import { BrowserRouter, Routes , Route} from "react-router-dom";
const CntHome = () => {
    return(
        <BrowserRouter>
                    <main className='container'>
                <FcstNav />
                <Routes>
                    <Route path='/' element={<Cnt />} />
                    <Route path='/' element={<CntDisp />} />
                    <Route path='/' element={<CntInput />} />
                </Routes>
                </main>
        </BrowserRouter>
       
    );
}
export default CntHome