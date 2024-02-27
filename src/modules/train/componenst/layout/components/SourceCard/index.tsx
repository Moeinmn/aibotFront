import styles from './styles.module.css'

const SourceCard=()=>{

    return(
        <>
        <div style={{width:"250px",height:"150px",border:"0.5px solid #000",backgroundColor:"rgba(217, 217, 217, 0.15)", borderRadius:"5px",padding:"8px",marginTop:"75px",marginRight:"30px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
               <span style={{
                fontWeight:"600", fontSize:"19px"
               }}>منابع آموزش</span>
            </div>
            <div>
                <span style={{fontWeight:"500",fontSize:"17px"}}>مجموع کلمات استفاده شده:</span>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <span>"30.597/400.000"</span>
            </div>
            <div>
            <button className={styles.retrainBtn}>آموزش مجدد بات</button>

            </div>




        </div>
        </>
    )


};
export default SourceCard;