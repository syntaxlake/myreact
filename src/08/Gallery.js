// 한국관광공사 api 링크// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=%2BGVqhh8TZ2VwLNb1GwpgHWIuf04eTLsidieUvFljHbOEwStUoIvDJ4UGzBbJuhIq3i8e19e3%2BdFgGOd4GX3gVQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%9E%90%EA%B0%88%EC%B9%98&_type=json
import {useState, useEffect, useRef} from 'react';
import styles from './Gallery.module.css'
const Gallery = () => {
    
    //키워드 input

    const txt1 = useRef();

    //컴포넌트가 맨처음 렌더링되면 
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //확인
    const show = (e) => {
        e.preventDefault();
        if(txt1.current.value === '') return ; 

        let kw = encodeURI(txt1.current.value) ;
        console.log(txt1.current.value, kw);
    }

    //취소
    const showdown = (e) => {
          e.preventDefault();
    }

    return (
        <main className="container">
            <form>
                <article>
                    <header>
                    <h1>한국관광공사 관광사진 정보</h1>
                    </header>    
                    <div className="grid">
                        <div className={styles.btDiv}>
                            <input useRef = "txt1" type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요"/>
                                <button onClick ={(e)=>show(e)}>확인</button>   
                                <button onClick ={(e)=>showdown(e)}>취소</button>
                        </div>
                    </div>
                </article>
            </form>
        </main>
    );
}

export default Gallery ;