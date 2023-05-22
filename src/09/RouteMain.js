const RouteMain = () => {

    return(
        <BrowserRouter>
            <main className='container'>
                <RouteNav />
                <Routes>
                    <Route path='/' element={<RouteHome />} />
                    <Route path='/page1' element={<RoutePage1 />} />
                    <Route path='/page2' element={<RoutePage2 />} />
                </Routes>
            </main>
        </BrowserRouter>
       
    );
}

export default RouteMain;