

    const Loding =({theme})=>{
        return(
            <div className="d-flex justify-content-center m-auto">
                <div className={`loding spinner-border text-${theme || "warning"}`}>

                </div>
            </div>
        )
    }        
    export default Loding;