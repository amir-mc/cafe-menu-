import Header from './Header/header';
import './App.css';
import CategoryList from './Category/categoryList';
import Loding from './Loding/loding';
import { useEffect, useState } from 'react';
import axios from './axios';
import Fastfood from './Fast/fast';



function App() {
  //const [url, setUrl] = useState("/FastFood/list");
  const[loding,setloding]=useState(false)
  const[fasTfood,setFastfood]=useState([])
  const fechData = async (categoryId=null)=>{
    setloding(true)
    const response= await axios.get(`/FastFood/list/${categoryId ? "?categoryId"+categoryId:""}`);
    setloding(false)
    setFastfood(response.data)
  }

  useEffect(()=>{
    fechData();
  },[])
   
  const filterItems = (categoryId) => {
    //setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
    fechData(categoryId);
    
  };
  const searchItem = async (term)=>{
    setloding(true)
    const response = await axios.get(`/FastFood/search/${term ? "?term="+term:""}`)
      setloding(false)
      setFastfood(response.data)
    }

    
  const renderr=()=>{
   if(fasTfood.length===0)
    { 
      return(
        <>
        <div className='alert alert-warning text-center' >
          Errro
        </div>
        </>
      )
    }
   
    if(loding)
      return( <Loding/>
    )
    return(
      <Fastfood fasTfood={fasTfood}/> 
    )

      

}

  return (
    <div className='wrapper bg-fadad-dark'>
      <Header></Header>
  
      <CategoryList  filterItems={filterItems} searchItem={searchItem} >
       
      </CategoryList>
      <div className="container">
        {
          renderr()
        }
      </div>

    </div>
 
);
}

export default App;
