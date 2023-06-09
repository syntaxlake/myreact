const TaccidentDetail = ({selData}) => {
    console.log('detail', Object.keys(selData))
    const tagKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']

    let tags = tagKey.map((k, idx) => 
        <div key={'k'+idx}>
            {k} {selData[k]}
        </div>
    )
    return(
        <div className="grid">
            {tags}
        </div>
    );
}

export default TaccidentDetail ;