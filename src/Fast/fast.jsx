import FastfoodList from "../Fastlist/fastlist"
    const Fastfood=({fasTfood})=> {
   let delay=5.1
        return(
        
        
        <div className="row">
            {
                fasTfood.map(fastfoood=>{
                    delay+=0.20
                    return(
                        <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastfoood.id}>
                            <FastfoodList {...fastfoood} delay={delay}/>
                        </div>
                    ) 
                })
            }
        </div>
    )
    
    }
    export default Fastfood
