import { useEffect, useState } from "react";
import axios from "../axios";
import './cat.css'

import Loding from "../Loding/loding";


const CategoryList=({filterItems})=>{
    const [lodingg,upLodnig]=useState(true)
    const [categories,setcategories]=useState([]);
   useEffect(()=>{
    const feachData= async ()=>{
    const response=await axios.get('/FoodCategory/categories')
    setcategories(response.data)
    upLodnig(false)
    }  
    feachData()
},[])

    
const Renderr=()=>{
    if(lodingg)
    {
           return(<Loding theme={"primary"}/>)
    }

return(
<ul className="nav">
<li className="nav-item" onClick={() => filterItems()}>
                        <a className="nav-link" href="#">
                            همه ی فست فودها
                        </a>
                    </li>
                    {
                        categories.map(category => (
                            <li className="nav-item" key={category.id} onClick={() => filterItems(category.id)}>
                                <a className="nav-link" href="#">
                                    {category.name}
                                </a>
                            </li>
                        )  )
                    }
                </ul>
)
}
    return(
        <nav className="container mt-n5">
            <div className="bg-dark rounded-3 shadow-1g py-4 insize">
                
                    
                       {Renderr()}
                       
                    
                
                
            </div>
        </nav>
    )
}
export default CategoryList;
