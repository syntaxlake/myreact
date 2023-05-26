import code from '../101/getcode.json';
import { useState, useEffect} from 'react';   
const CodeList = ({sell}) => {

    let temp = code.filter((i) => i["예보구분"] ===sell) ;
    console.log(temp)

    let opTags = temp.map((i) =>
       <option key = {i['항목값']} value ={i['항목값']}>{i['항목명']}({i['항목값']})</option> );
    console.log(opTags)
    return(
        <>
            <select id='sel2' name='sel2' defaultValue=''>
                <option value=''>선택</option>
                {opTags}
            </select>
        </>
    )
}

export default CodeList;