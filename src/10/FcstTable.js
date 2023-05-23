const FcstTable = ({datas, gubun}) => {
    console.log("datas", datas);
    console.log("gubun", gubun);
    return(
        <table>        
        <thead>
        <tr>
        <th scope="항목">항목</th>
        <th scope="예측일자">예측일자</th>
        <th scope="예측시작">예측시작</th>
        <th scope="단위">단위</th>
        </tr>
        </thead>
        </table>
    );
}
export default FcstTable;