

import './cat.css'
import SearchBar from "../Searchbar/searchbar";

import Loding from "../Loding/loding";
import useAxios from "../useAxios";




const CategoryList=({filterItems,searchItem})=>{
const[categories, , loding]=useAxios({
    url:'/FoodCategory/categories'
})


   

    
const Renderr=()=>{
    if(loding)
    {
           return(<Loding theme={"primary"}/>)
    }

return(
    <div className="p3-3 w-100 d-flex aligen-item-center justify-content-between gap-5">
<ul className="nav">
<li className="nav-item" onClick={() => filterItems()}>
                        <a className="nav-link" href="/#">
                            all  
                        </a>
                    </li>
                    {
                        categories.map(category => (
                            <li className="nav-item" key={category.id} onClick={() => filterItems(category.id)}>
                                <a className="nav-link" href="/#">
                                    {category.name}
                                </a>
                            </li>
                        )  )
                    };
                </ul>
              <SearchBar searchItem={searchItem} >
               
              </SearchBar>
                </div>
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
