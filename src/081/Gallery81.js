/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css' ;
import GalleryView from './GalleryView';

const Gallery81 = () => {
    //state 변수
    const [items, setItems] = useState([]) ;

    //input 제어
    const txt1 = useRef();

    //컴포넌트가 처음 렌더링 될 때 한 번 실행
           //input에 포커스 맞추기
    useEffect(() => {
        txt1.current.focus();
    }, []);
           //폼 컨트롤하기 위해 useEffect로 변경.
                                //dependency를 안쓰기 위해서   
                                //맨처음 렌더링 되었을 때 ref에 focus. 
    //컴포넌트 해당하는 state 변수가 변경이 될 때마다 실행 
    useEffect(() => {
        console.log(items);
    }, [items]); //item이 변경될 때마다 변함
    //사용자 정의 함수

    const getData = (kw, num, no) => {
        let apikey = '%2BGVqhh8TZ2VwLNb1GwpgHWIuf04eTLsidieUvFljHbOEwStUoIvDJ4UGzBbJuhIq3i8e19e3%2BdFgGOd4GX3gVQ%3D%3D'
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        url = url + `serviceKey=${apikey}`
        url = url + `&numOfRows=${num}`
        url = url + `&pageNo=${no}`
        url = url + '&MobileOS=ETC'
        url = url + '&MobileApp=AppTest'
        url = url + '&arrange=A'
        url = url + `&keyword=${kw}`
        url = url + '&_type=json'
        
        //https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?
        //serviceKey=%2BGVqhh8TZ2VwLNb1GwpgHWIuf04eTLsidieUvFljHbOEwStUoIvDJ4UGzBbJuhIq3i8e19e3%2BdFgGOd4GX3gVQ%3D%3D
        //&numOfRows=10
        //&pageNo=1
        //&MobileOS=ETC
        //&MobileApp=AppTest
        //&arrange=A
        //&keyword=%EC%9E%90%EA%B0%88%EC%B9%98
        //&_type=json

        console.log(url); 
        fetch (url)
        .then((resp) => resp.json())
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err)) 
    };

                        //fetch 던지기 전에 url 잘 나온지 테스트. 
                        //.then((resp) => console.log(resp)) //response 객체 받는 것임.
                         //bodydata 가지고 옴. item이 배열이 됨. 
                         // err 확인. fetch가 안넘어 올 수도 있음. 

    const show = (e) => {
        e.preventDefault()
                                // 공백체크
        if (txt1.current.value === '') {
            alert('키워드를 입력해주세요.');
            txt1.current.focus();
            return;
        }

        // 인코딩한 키워드(한글은 인코딩 해야함.)
        let kw = encodeURI(txt1.current.value); //ref변수므로 current 적용
        getData(kw, 10, 1); // 인코딩한 정보 전달. kw
        console.log(kw)
    };      



    const showClear = (e) => {
        e.preventDefault();
    };
                                    //에러 나는 걸 막기 위해 preventdefault
    return(
        <main className="container">
            <form>
            <article>
                    <header>
                        <h1>한국관광공사_관광사진 정보</h1>
                    </header>
                    <div className="grid">                        
                        <div>
                        <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                        </div>
                        <div className={styles.btDiv}>
                            <button onClick={(e)=>show(e)}>확인</button> 
                            <button onClick={(e)=>showClear(e)}>취소</button>
                        </div>
                    </div>
                
            </article>
            </form>
            {items && <GalleryView content={items}/>}
        </main>
    );
}       
            // items undefined 상태이므로 items &&을 추가. 
export default Gallery81 ;