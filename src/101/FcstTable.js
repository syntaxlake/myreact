import { useState, useEffect, useRef } from "react";
import code from "./getcode.json";
const FcstTable = ({ items, gubun }) => {
    const [trTags, settrTags] = useState();
    const [opTags, setopTags] = useState();
    const sel = useRef();


    useEffect(() => {
        let tempcd = code.filter((i) => i["예보구분"] === gubun);
        console.log('gubun', gubun);
        tempcd = tempcd.map((i) =>
            <option key={i['항목값']} value={i['항목값']}>{i['항목명']}({i['항목값']})</option>
        )
        console.log('code', code);
        setopTags(tempcd);
        console.log('tempcd', tempcd);

    }, []);


    const showItem = (e) => {
        e.preventDefault();

        console.log('sel', sel.current.value)

        if (items === undefined) return;
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd = code.filter((i) =>
            i["예보구분"] === gubun &&
            i["항목값"] === sel.current.value
        );
        tempcd = tempcd[0];
        console.log('tempcd', tempcd)
        let skyobj = { '1': '🌞', '3': '☁', '4': '⛅' }
        let ptyobj = { '0': '없음', '1': '비', '2': '비,눈', '3': '눈', '5': '빗방울', '6': '빗방울눈날림', '7': '눈날림' }
        temp = temp.map((i, idx) =>
            <tr key={i.category + idx}>
                <td>{tempcd["항목명"]}</td>
                <td>{i.fcstDate}</td>
                <td>{i.fcstTime}</td>
                <td>
                    {(i.category === 'SKY') ? skyobj[i.fcstValue]
                        : (i.category === 'PTY') ? ptyobj[i.fcstValue]
                            : i.fcstValue + tempcd["단위"]}
                </td>
            </tr>
        );
        console.log('items', items)
        console.log('temp', temp)
        settrTags(temp);
    };

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div><h1>기상청 초단기예보</h1></div>
                            <div>
                                <select ref={sel} name='sel' onChange={showItem}>
                                    <option val=''>선택</option>
                                    {opTags}
                                </select>
                            </div>
                        </div>
                    </form>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">자료구분코드</th>
                            <th scope="col">예측일자</th>
                            <th scope="col">예측시간</th>
                            <th scope="col">예보값</th>
                        </tr>
                        {items && trTags}
                    </thead>
                </table>
            </article>
        </main>
    )
}

export default FcstTable;