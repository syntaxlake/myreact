const CntDisp = ({n}) => {
//const CntDisp = (probs) => {
   // const n = probs.n ;
    return(
        <article>
        <div className="grid">
        <div>
        <h1>입력값: {n} </h1>
        </div>
        <div>
        <h1>입력값2배: {n * 2}</h1>
        </div>
        </div>
        </article>
    )
}

export default CntDisp;