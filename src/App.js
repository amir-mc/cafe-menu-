import Header from './Header/header';
import './App.css';
import CategoryList from './Category/categoryList';
import Loding from './Loding/loding';
import { useEffect, useState } from 'react';
import axios from './axios';
import Fastfood from './Fast/fast';


function App() {
  const[loding,setloding]=useState(false)
  const[fasTfood,setFastfood]=useState([])
  const fechData = async (categoryId=null)=>{
    setloding(true)
    const response= await axios.get(`/FastFood/list/${categoryId ?"?categoryId"+categoryId:""}`)
    setloding(false)
    setFastfood(response.data)
  }
  
  useEffect(()=>{
    fechData();
  },[])
  const renderr=()=>{
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
      <CategoryList></CategoryList>
      <div className="container">
        {
          renderr()
        }
      </div>

    </div>
 
);
}

export default App;
