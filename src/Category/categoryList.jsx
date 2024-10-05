import { useEffect, useState } from "react";
import axios from "../axios";
import './cat.css'



const CategoryList=()=>{
    const [categories,setcategories]=useState([]);
   useEffect(()=>{
    const feachData= async ()=>{
    const response=await axios.get('/FoodCategory/categories')
    setcategories(response.data)
    }  
    feachData()
},[])

    
    return(
        <nav className="container mt-n5">
            <div className="bg-dark rounded-3 shadow-1g py-4 insize">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="/#" className="nav-link">
                            hame
                        </a>
                    </li>
                    {
                        categories.map(category=>(
                            <li className="nav-item" key={category.id}>
                                <a className="nav-link" href="/#">
                                    {category.name}
                                </a>
                            </li>
                        )  )
                    }
                </ul>
            </div>
        </nav>
    )
}
export default CategoryList;